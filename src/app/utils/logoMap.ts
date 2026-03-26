import { IconType } from 'react-icons';
import { 
  SiVisa,
  SiMastercard,
  SiStripe,
  SiCloudflare,
  SiOpenai,
  SiShopify,
  SiWalmart,
  SiGooglecloud,
  SiTechcrunch,
  SiAkamai,
  SiOkta,
  SiCircle
} from 'react-icons/si';
import { Building2 } from 'lucide-react';

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
  'akamai': SiAkamai,
  'openai': SiOpenai,
  'openai tokens': SiOpenai,
  'anthropic': SiOpenai, // Using OpenAI as placeholder
  
  // Security & Identity
  'okta': SiOkta,
  
  // E-commerce
  'shopify': SiShopify,
  'shopify checkout': SiShopify,
  'walmart': SiWalmart,
  'walmart.com': SiWalmart,
  
  // Media
  'techcrunch': SiTechcrunch,
};

// Get icon component for a company name
export function getLogoIcon(name: string): IconType | typeof Building2 | null {
  const normalized = name.toLowerCase().trim();
  return logoIconMap[normalized] || null;
}

// Check if a company has an icon available
export function hasLogoIcon(name: string): boolean {
  return getLogoIcon(name) !== null;
}
