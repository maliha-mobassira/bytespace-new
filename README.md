# ByteSpace — Online Learning Platform

ByteSpace is a high-performance, modern online learning web application built with Next.js, TypeScript, and Tailwind CSS. The interface is meticulously crafted to match pixel-accurate Figma designs, incorporating vibrant Persian Blue accents, Electric Lime call-to-actions, bespoke typography, and high-fidelity 3D assets.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Typography**: 
  - Poppins (`--font-poppins`) — Primary headings
  - Satoshi (`--font-satoshi`) — Body & UI labels
  - Clash Display Bold (`--font-clash`) — Brand wordmark
- **Icons & Assets**: Custom SVG icons, optimized WebP/PNG 3D illustrations

---

## 📁 Folder Structure

```text
├── app/
│   ├── layout.tsx             # Root layout with font providers
│   ├── page.tsx               # Main landing page route
│   ├── globals.css            # Tailwind design system tokens & utility classes
│   ├── fonts/                 # Local font assets (e.g. ClashDisplay-Bold.woff2)
│   ├── login/                 # Login route (/login)
│   │   └── page.tsx
│   └── register/              # Register route (/register)
│       └── page.tsx
├── components/
│   ├── layout/                # Persistent layouts & structural elements
│   │   ├── Navbar.tsx         # Responsive header navigation
│   │   ├── Footer.tsx         # Newsletter & global footer links
│   │   ├── AuthLayout.tsx     # Full-bleed layout for Login/Register pages
│   │   └── index.ts           # Layout barrel export
│   ├── sections/              # Standalone landing page sections
│   │   ├── Hero.tsx               # Hero header & search
│   │   ├── LogoStrip.tsx          # Trusted partner ribbon
│   │   ├── Discover.tsx           # Category tabs & course catalog grid
│   │   ├── LearningPaths.tsx      # Subject track cards & icons
│   │   ├── ProfessionalGrowth.tsx # Career acceleration stats & composition
│   │   ├── CreateManage.tsx       # Course creation dashboard & checklist
│   │   ├── CreatorCTA.tsx         # Full-width 3D creator call-to-action
│   │   ├── Testimonials.tsx       # Learner & creator social proof
│   │   └── index.ts               # Sections barrel export
│   └── ui/                    # Reusable primitive UI components
│       ├── Button.tsx         # Standardized button variants
│       ├── Input.tsx          # Form inputs with states & labels
│       ├── Container.tsx      # Standard 1440px max-width content wrapper
│       ├── CourseCard.tsx     # Course card preview component
│       ├── AvatarStack.tsx    # Overlapping circular user avatar badge
│       ├── FloatingCard.tsx   # Glassmorphic/elevated card wrapper
│       ├── SearchBar.tsx      # Search bar input with icon
│       └── index.ts           # UI barrel export
├── lib/
│   ├── types.ts               # Centralized TypeScript interfaces
│   ├── utils.ts               # Common utility functions (cn helper)
│   └── data/                  # Typed content constants
│       ├── courses.ts         # Course list & category taxonomy
│       ├── testimonials.ts    # User review testimonials
│       ├── navigation.ts      # Header & footer link configs
│       └── features.ts        # Platform statistics & feature checklists
└── public/
    └── images/                # Optimized vectors, photos, and 3D shapes
```

---

## 🛠️ Local Development

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Linting
Validate the production build:
```bash
npm run build
npm run lint
```

---

## 🧩 Adding a New Section or Component

### Adding a New Landing Page Section
1. Create your component in `components/sections/MySection.tsx`:
   ```tsx
   "use client";

   import React from "react";
   import { Container } from "@/components/ui";

   /**
    * MySection Component
    * Brief description of what this section displays.
    */
   export function MySection() {
     return (
       <section className="relative w-full py-[80px] lg:py-[120px] bg-white">
         <Container>
           {/* Section content */}
         </Container>
       </section>
     );
   }

   export default MySection;
   ```
2. Re-export it from `components/sections/index.ts`:
   ```ts
   export * from "./MySection";
   ```
3. Add any static data in `lib/data/` and types in `lib/types.ts`.
4. Include the section in `app/page.tsx`.

---

## 📄 License
Copyright © 2026 ByteSpace. All rights reserved.
