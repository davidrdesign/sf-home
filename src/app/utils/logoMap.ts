import { IconType } from 'react-icons';
import { 
  SiAnthropic,
  SiVisa,
  SiMastercard,
  SiStripe,
  SiCloudflare,
  SiOpenai,
  SiShopify,
  SiWalmart,
  SiGooglecloud,
  SiTechcrunch,
  SiOkta,
  SiCircle,
  SiBose,
  SiAuth0,
} from 'react-icons/si';
import { Building2 } from 'lucide-react';

const logoNameAliases: Record<string, string> = {
  'amazon.com': 'amazon',
  'bose headphones': 'bose',
  'openai tokens': 'openai',
  'rbc': 'royal bank of canada',
  'shopify checkout': 'shopify',
  'the wall street journal': 'wall street journal',
  'walmart.com': 'walmart',
};

// Map company names to their react-icons brand icons
// Only including icons that are confirmed to exist in simple-icons
export const logoIconMap: Record<string, IconType | typeof Building2> = {
  // Payment & Financial
  'visa': SiVisa,
  'mastercard': SiMastercard,
  'stripe': SiStripe,
  'circle': SiCircle,
  
  // Tech & Cloud
  'google cloud': SiGooglecloud,
  'cloudflare': SiCloudflare,
  'openai': SiOpenai,
  'anthropic': SiAnthropic,
  
  // Security & Identity
  'okta': SiOkta,
  'auth0': SiAuth0,
  
  // E-commerce
  'shopify': SiShopify,
  'walmart': SiWalmart,
  'bose': SiBose,
  
  // Media
  'techcrunch': SiTechcrunch,
};

export function normalizeLogoName(name: string): string {
  const normalized = name.toLowerCase().trim();
  return logoNameAliases[normalized] || normalized;
}

// Get icon component for a company name
export function getLogoIcon(name: string): IconType | typeof Building2 | null {
  const normalized = normalizeLogoName(name);
  return logoIconMap[normalized] || null;
}

// Check if a company has an icon available
export function hasLogoIcon(name: string): boolean {
  return getLogoIcon(name) !== null;
}
