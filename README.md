# JimsEstate

A clean, minimalist real estate website built with Next.js 14, TypeScript, and Tailwind CSS.

## Description

JimsEstate is a boutique real estate platform showcasing handpicked residential properties. The site features a curated listing of houses, condos, and townhouses with a focus on clean design and straightforward navigation.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data**: Static JSON mock data (no backend required)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone or download this repository.

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
.
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── next.config.js            # Next.js configuration
├── data/
│   └── listings.ts           # Mock property data (edit here to add/change listings)
├── app/
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   ├── page.tsx              # Home page with hero and featured listings
│   ├── globals.css           # Global styles (Tailwind directives)
│   ├── about/
│   │   └── page.tsx          # About page
│   └── listings/
│       ├── page.tsx          # All listings with search and filter
│       └── [id]/
│           └── page.tsx      # Individual property detail page
└── components/
    ├── Navbar.tsx            # Fixed top navigation bar
    ├── Footer.tsx            # Site footer
    ├── PropertyCard.tsx      # Reusable property card component
    ├── SearchBar.tsx         # Search input component
    └── FilterBar.tsx         # Filter buttons component
```

## Mock Data

All property listings are stored in `data/listings.ts`. Each listing follows the `Listing` interface:

```ts
interface Listing {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  type: 'house' | 'condo' | 'townhouse';
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
  featured: boolean;
}
```

To add new listings, simply add entries to the `listings` array in `data/listings.ts`. The site will automatically reflect the changes on next build or refresh.

## Design Principles

- Black, white, and stone-500 (#78716c) accent color palette
- Generous white space and clean typography
- No animations or gradients
- Mobile-first responsive layout
- Sharp corners (rounded-none) for a modern minimal aesthetic
