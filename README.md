# Samsung Accessories Store UI

A polished React + Vite storefront UI for showcasing Samsung phones and accessories. The project focuses on the customer journey from landing page to checkout, with responsive screens, rich product presentation, and a warm Samsung-inspired visual style.

## Overview

This repo is a front-end UI prototype, not a full e-commerce backend. It includes:

- A homepage with hero content, featured products, and category browsing
- A product listing page with filters and a product grid
- A product details page with gallery, finish/storage selection, and add-to-cart interactions
- A shopping cart page with quantity controls, voucher logic, and order totals
- A checkout page with delivery and payment selection

Navigation between these screens is currently handled inside the app with local React state for demo purposes.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Radix UI primitives

## Project Structure

```text
src/
  app/
    App.tsx
    components/
      Navbar.tsx
      HeroSection.tsx
      FeaturedProducts.tsx
      ShopByCategory.tsx
      ProductListingPage.tsx
      ProductDetailsPage.tsx
      CartPage.tsx
      CheckoutPage.tsx
      Footer.tsx
      ui/
  styles/
    index.css
    globals.css
    theme.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local Vite URL shown in your terminal.

### Create a production build

```bash
npm run build
```

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build

## Current Behavior

- Product data is mocked directly inside components
- Cart and checkout interactions are UI-only
- Page changes are demo-driven through the navbar, not React Router routes
- Prices are formatted in Kenyan shillings (`KSh`)

## Customization Ideas

- Replace mock product data with API data
- Add React Router for real page routing
- Connect cart state across all screens
- Persist checkout/cart state
- Add search, authentication, and payments

## Notes

- Additional component-level documentation lives in `COMPONENTS_README.md`
- The design uses custom colors, rounded surfaces, and high-contrast CTAs to create a premium storefront feel

## License

This project is currently provided without a license file. Add one before distributing or open-sourcing it.
