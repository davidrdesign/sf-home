# sf-home

A Vite + React marketing site for Skyfire's agent trust, access, and payments platform. The repo includes the primary homepage, an alternate homepage concept, and supporting product, company, and use-case pages centered on verified identity, secure access, and autonomous checkout for AI agents.

## Tech Stack

- Vite 6
- React 18
- React Router 7
- TypeScript
- Tailwind CSS 4
- Radix UI primitives
- Lucide icons

## Pages

- `/` Home page with the main hero, trust-network storytelling, and animated product demos
- `/alternate-home` Alternate homepage concept with a more conversion-focused narrative and lighter editorial shell
- `/products` Product overview page for the trust stack
- `/about` Company narrative and partner/trust positioning
- `/use-cases` Industry and workflow examples for autonomous commerce

## Project Structure

```text
src/
  app/
    components/    Shared layout, navigation, footer, UI primitives
    hooks/         Small interaction hooks such as scroll reveal
    pages/         Route-level pages
    utils/         Shared helpers such as logo normalization/mapping
    App.tsx        Router provider setup
    routes.tsx     Route definitions
  assets/logos/    Local SVG/PNG/JPG logo files used across the site
  styles/          Global styles, theme tokens, and page styling
  main.tsx         Client entry point
```

## Logo Handling

The site uses a shared logo component that prefers local assets first and only falls back to icon/text rendering when no matching file exists.

- Add logo files to [`src/assets/logos`](/Users/drob/Documents/Repos/sf-home/src/assets/logos)
- Reusable logo rendering lives in [`src/app/components/LogoImage.tsx`](/Users/drob/Documents/Repos/sf-home/src/app/components/LogoImage.tsx)
- Name aliases and normalization live in [`src/app/utils/logoMap.ts`](/Users/drob/Documents/Repos/sf-home/src/app/utils/logoMap.ts)
- The loader matches common filename variations, so files like `Consumer_Reports_logo.png` and `rbc-logo-shield.svg` can still resolve
- Some sections intentionally render text pills instead of logos; those are controlled directly in the page markup

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app runs locally at [http://localhost:5173](http://localhost:5173).

### Create a production build

```bash
npm run build
```

## Where To Edit

- Update routing in [src/app/routes.tsx](/Users/drob/Documents/Repos/sf-home/src/app/routes.tsx)
- Edit the shared shell in [src/app/components/Layout.tsx](/Users/drob/Documents/Repos/sf-home/src/app/components/Layout.tsx)
- Update top-level navigation in [src/app/components/Navigation.tsx](/Users/drob/Documents/Repos/sf-home/src/app/components/Navigation.tsx)
- Refine homepage content in [src/app/pages/HomePage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/HomePage.tsx)
- Refine the alternate homepage concept in [src/app/pages/AlternateHomePage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/AlternateHomePage.tsx)
- Adjust product storytelling in [src/app/pages/ProductsPage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/ProductsPage.tsx)
- Update company messaging in [src/app/pages/AboutPage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/AboutPage.tsx)
- Revise industry scenarios in [src/app/pages/UseCasesPage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/UseCasesPage.tsx)
- Update shared logo behavior in [src/app/components/LogoImage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/components/LogoImage.tsx)
- Update logo aliases in [src/app/utils/logoMap.ts](/Users/drob/Documents/Repos/sf-home/src/app/utils/logoMap.ts)
- Tune global styling in [src/styles/skyfire.css](/Users/drob/Documents/Repos/sf-home/src/styles/skyfire.css)

## Notes

- This repo started from a design/code export and still contains some large inline style blocks, especially in route-level pages.
- The homepage currently includes several hand-tuned animated sections, so visual changes are often easiest to make directly in [`HomePage.tsx`](/Users/drob/Documents/Repos/sf-home/src/app/pages/HomePage.tsx) first, then extract later if needed.
- The root still includes design artifacts like `Collaborate on Project.zip` and `guidelines/Guidelines.md` that can be kept for reference or removed later.
