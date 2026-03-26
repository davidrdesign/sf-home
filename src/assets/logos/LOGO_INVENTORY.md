# Logo Reference Guide

This document lists all the places where company logos appear in the Skyfire application and provides instructions for adding logo files.

## How to Add Logos

1. Place logo files in `/src/assets/logos/`
2. Name files using lowercase with hyphens: `company-name.png` or `company-name.svg`
3. Update the logo mappings in `src/app/utils/logoMap.ts` if needed

## Logo Inventory

### HomePage - Partners Section
**Location:** `HomePage.tsx` line ~1240
**Companies:**
- Experian → `experian.png`
- Jumio → `jumio.png`
- Onfido → `onfido.png`
- Sumsub → `sumsub.png`
- Visa → `visa.png`
- Mastercard → `mastercard.png`
- RBC → `rbc.png`
- Circle → `circle.png`
- Akamai → `akamai.png`
- Cloudflare → `cloudflare.png`
- Stripe → `stripe.png`
- Plaid → `plaid.png`
- Forter → `forter.png`
- Sift → `sift.png`
- AWS → `aws.png`
- Google Cloud → `google-cloud.png`

### HomePage - Press Section
**Location:** `HomePage.tsx` line ~1253
**Publications:**
- The Wall Street Journal → `wall-street-journal.png`
- TechCrunch → `techcrunch.png`
- Decrypt → `decrypt.png`
- VentureBeat → `venturebeat.png`
- Forbes → `forbes.png`
- Business Insider → `business-insider.png`
- American Banker → `american-banker.png`

### HomePage - Demo Merchants
**Location:** `HomePage.tsx` line ~16-22
**Merchants:**
- Getty Images → `getty-images.png`
- Anthropic → `anthropic.png`
- Bose Headphones → `bose.png`
- OpenAI Tokens → `openai.png`

### HomePage - Coverage Section
**Location:** `HomePage.tsx` (Coverage section)
**Companies:**
- Akamai → `akamai.png`
- Forter → `forter.png`
- Experian → `experian.png`
- Datadome → `datadome.png`
- Okta → `okta.png`
- Ory → `ory.png`

### HomePage - Intro Cards
**Location:** `HomePage.tsx` (Two-col Intro)
**Identity & Trust Partners:**
- Akamai → `akamai.png`
- Datadome → `datadome.png`
- Ory → `ory.png`
- Okta → `okta.png`
- Forter → `forter.png`
- Experian → `experian.png`

**Checkout & Payments Partners:**
- Visa → `visa.png`
- Henry Labs → `henry-labs.png`
- Cart-ai → `cart-ai.png`
- Consumer Reports → `consumer-reports.png`
- Getty Images → `getty-images.png`

### AboutPage - Network Partners
**Location:** `AboutPage.tsx` line ~107-119
**Companies:**
- Experian → `experian.png` (Identity Verification)
- Visa → `visa.png` (Payment Processing)
- Akamai → `akamai.png` (Edge Infrastructure)
- Forter → `forter.png` (Fraud Prevention)
- RBC → `rbc.png` (Banking Partner)
- Stripe → `stripe.png` (Payment Rails)

### UseCasesPage - Agent Access Demo
**Location:** `UseCasesPage.tsx` line ~50-52
**Companies:**
- Amazon → `amazon.png`
- Walmart → `walmart.png`
- Shopify → `shopify.png`

## Logo Specifications

### Technical Requirements
- **Format:** PNG (transparent) or SVG preferred
- **Size:** 200-400px width for PNG files
- **File Size:** < 100KB per file
- **Background:** Transparent (PNG with alpha channel)
- **Color:** Full color versions preferred (component handles theming)

### Visual Guidelines
- Logos should be the official brand assets
- Maintain proper aspect ratios
- Include adequate padding/whitespace
- Use high-resolution assets for retina displays

## Implementation Notes

When logos are added to `/src/assets/logos/`:
1. The `LogoImage` component will automatically attempt to load them
2. Falls back to company name text if logo not found
3. Currently all instances show text - swap to image mode once logos are added
4. Update `LogoImage.tsx` fallbackType prop from 'text' to 'placeholder' to enable image loading

## Total Logo Count
- **Unique companies:** ~30
- **Total instances across app:** ~70+
- **Priority logos (most frequently used):**
  1. Experian (4 instances)
  2. Akamai (4 instances)
  3. Forter (4 instances)
  4. Visa (3 instances)
  5. Stripe (2 instances)
