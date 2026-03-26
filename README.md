# sf-home

A Vite + React marketing site for Skyfire's agent-trust platform. The current build includes a bold landing page and supporting product, company, and use-case pages centered on identity verification, secure access, and autonomous payments for AI agents.

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
    App.tsx        Router provider setup
    routes.tsx     Route definitions
  styles/          Global styles, theme tokens, and page styling
  main.tsx         Client entry point
```

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
- Adjust product storytelling in [src/app/pages/ProductsPage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/ProductsPage.tsx)
- Update company messaging in [src/app/pages/AboutPage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/AboutPage.tsx)
- Revise industry scenarios in [src/app/pages/UseCasesPage.tsx](/Users/drob/Documents/Repos/sf-home/src/app/pages/UseCasesPage.tsx)
- Tune global styling in [src/styles/skyfire.css](/Users/drob/Documents/Repos/sf-home/src/styles/skyfire.css)

## Notes

- This repo was generated from a design/code export and still contains some large inline style blocks that are good candidates for cleanup as we iterate.
- The root includes design artifacts like `Collaborate on Project.zip` and `guidelines/Guidelines.md` that can be kept for reference or removed later if we want a cleaner shipping repo.
