import { getLogoIcon, hasLogoIcon } from '../utils/logoMap';

interface LogoImageProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  showText?: boolean;
}

/**
 * LogoImage component that displays company logos using react-icons
 * Falls back to company name text if icon is not available
 */
export function LogoImage({ 
  name, 
  className = '', 
  style,
  size = 24,
  showText = true
}: LogoImageProps) {
  const Icon = getLogoIcon(name);
  
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
        {showText && <span>{name}</span>}
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
