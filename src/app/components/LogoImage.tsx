import { getLogoIcon, normalizeLogoName } from '../utils/logoMap';

const logoAssets = import.meta.glob('../../assets/logos/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const NOISE_TOKENS = new Set([
  'logo',
  'primary',
  'black',
  'white',
  'light',
  'dark',
  'mode',
  'big',
  'shield',
]);

function canonicalizeLogoKey(value: string): string {
  return value
    .toLowerCase()
    .replace(/\.(svg|png|jpe?g|webp)$/i, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .filter((token) => !NOISE_TOKENS.has(token))
    .filter((token) => !/^\d+$/.test(token))
    .filter((token) => !/^[a-f0-9]{6,}$/i.test(token))
    .join(' ')
    .trim();
}

const localLogoEntries = Object.entries(logoAssets).map(([path, assetUrl]) => {
  const fileName = path.split('/').pop() ?? path;
  const baseName = fileName.replace(/\.(svg|png|jpe?g|webp)$/i, '');
  return {
    assetUrl,
    baseName: baseName.toLowerCase(),
    canonical: canonicalizeLogoKey(baseName),
  };
});

function getLocalLogo(name: string): string | null {
  const candidates = [
    name.toLowerCase().trim(),
    normalizeLogoName(name),
    normalizeLogoName(name).replace(/^the\s+/, ''),
  ];

  const exactKeys = new Set(
    candidates.flatMap((candidate) => [
      candidate,
      candidate.replace(/\s+/g, '-'),
      candidate.replace(/\s+/g, ''),
      candidate.replace(/\s+/g, '_'),
    ])
  );

  for (const entry of localLogoEntries) {
    if (exactKeys.has(entry.baseName)) {
      return entry.assetUrl;
    }
  }

  const canonicalCandidates = candidates
    .map(canonicalizeLogoKey)
    .filter(Boolean);

  for (const candidate of canonicalCandidates) {
    const exactMatch = localLogoEntries.find((entry) => entry.canonical === candidate);
    if (exactMatch) {
      return exactMatch.assetUrl;
    }

    const partialMatch = localLogoEntries.find(
      (entry) => entry.canonical.includes(candidate) || candidate.includes(entry.canonical)
    );
    if (partialMatch) {
      return partialMatch.assetUrl;
    }
  }

  return null;
}

interface LogoImageProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  showText?: boolean;
}

/**
 * LogoImage component that prefers local logo assets,
 * then falls back to react-icons, then to company name text.
 */
export function LogoImage({ 
  name, 
  className = '', 
  style,
  size = 24,
  showText = true
}: LogoImageProps) {
  const localLogo = getLocalLogo(name);
  const Icon = getLogoIcon(name);
  const shouldShowText = showText && !localLogo && !Icon;

  if (localLogo) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          ...style
        }}
      >
        <img
          src={localLogo}
          alt={name}
          style={{
            height: `${size}px`,
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            flexShrink: 0,
          }}
        />
        {shouldShowText && <span>{name}</span>}
      </div>
    );
  }
  
  // If we have an icon, render it
  if (Icon) {
    return (
      <div 
        className={className} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          ...style 
        }}
      >
        <Icon size={size} style={{ flexShrink: 0 }} />
        {shouldShowText && <span>{name}</span>}
      </div>
    );
  }
  
  // Otherwise fall back to text only
  return (
    <div className={className} style={style}>
      {name}
    </div>
  );
}

// Export helper functions for checking logo availability
export { hasLogoIcon } from '../utils/logoMap';
