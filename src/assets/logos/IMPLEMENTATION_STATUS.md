# Company Logo Implementation Status

## Solution Overview

Instead of managing individual logo image files, we're using the **react-icons** library which includes official brand icons for hundreds of companies. This provides:

- ✅ Instant access to brand logos without file management
- ✅ Consistent sizing and styling across the app
- ✅ SVG-based icons that scale perfectly
- ✅ Automatic color theming support

## Implementation

### Files Created
1. `/src/app/utils/logoMap.ts` - Maps company names to react-icons
2. `/src/app/components/LogoImage.tsx` - Smart component that displays logos with text fallback

### Pages Updated
- ✅ HomePage - Partners section
- ✅ HomePage - Press section  
- ✅ HomePage - Identity & Trust intro card
- ✅ HomePage - Checkout & Payments intro card
- ✅ HomePage - Coverage section
- ✅ AboutPage - Network Partners section

## Current Logo Coverage

### ✅ Working with Icons (via react-icons)

**Payment & Financial:**
- Visa ✓
- Mastercard ✓
- Stripe ✓
- Plaid ✓
- Circle ✓

**Tech & Cloud:**
- AWS ✓
- Google Cloud ✓
- Cloudflare ✓
- Akamai ✓
- OpenAI ✓

**Security & Identity:**
- Experian ✓
- Okta ✓

**E-commerce:**
- Amazon ✓
- Shopify ✓
- Walmart ✓
- Getty Images ✓

**Media:**
- Forbes ✓
- TechCrunch ✓

### ⏳ Showing Text Only (no icon available)

These companies will display their name as text until we add them to the logoMap:

- Jumio
- Onfido
- Sumsub
- RBC
- Forter
- Sift
- Ory
- Datadome
- Henry Labs
- Cart-ai
- Consumer Reports
- Bose Headphones
- Anthropic (currently using OpenAI icon as placeholder)
- The Wall Street Journal
- Decrypt
- VentureBeat
- Business Insider
- American Banker

## How to Add More Logos

### Option 1: Add from react-icons (Best)
If the company has an icon in react-icons/simple-icons:

```typescript
// In /src/app/utils/logoMap.ts
import { SiCompanyname } from 'react-icons/si';

export const logoIconMap: Record<string, IconType> = {
  // ... existing
  'company name': SiCompanyname,
};
```

### Option 2: Check Available Icons
Browse available icons at: https://react-icons.github.io/react-icons/

Search for company names - most major brands are included.

### Option 3: Upload Custom Logo Files
If a company isn't in react-icons:
1. Place logo file in `/tmp/sandbox/src/assets/logos/company-name.png`
2. Update `LogoImage.tsx` to check for custom files first
3. Falls back to icon, then to text

## Usage in Components

```tsx
import { LogoImage } from '../components/LogoImage';

// Basic usage
<LogoImage name="Stripe" />

// With custom sizing
<LogoImage name="Visa" size={20} />

// Icon only (no text)
<LogoImage name="AWS" showText={false} />

// In a list
{partners.map(name => (
  <LogoImage key={name} name={name} size={18} />
))}
```

## Next Steps

To expand logo coverage:
1. Check react-icons for the remaining companies
2. Import any available icons and add to logoMap.ts
3. For companies not in react-icons, consider custom SVG or PNG files
4. Update this document with new additions

## Benefits vs. File-Based Logos

**Icon-based approach:**
- ✅ No file management or storage
- ✅ Perfect scaling at any size
- ✅ Consistent styling
- ✅ Fast loading (part of JS bundle)
- ✅ Easy to update all at once

**When to use files:**
- When official brand assets are required
- For logos not available in react-icons
- When specific logo versions/colors are mandated by brand guidelines
