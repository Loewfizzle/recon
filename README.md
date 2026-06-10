# Recon Technologies

A clean, fast-loading, mobile-first single-page website for Recon Technologies — built for dairy farmers who scan a QR code in the field.

**Live preview:** Open with `npm run dev` and visit http://localhost:3000

## Features

- Professional agricultural/dairy tech design matching Recon branding
- Sticky header with logo, navigation, and responsive mobile hamburger menu
- "Our ECA Machines" section with Single Cell and Dual Cell cards + detail modals
- HOCl vs Traditional Iodine comparison
- Fully interactive **Savings Calculator** (React state, live updates)
- Why Farmers Choose Recon + How It Works sections
- Strong CTAs and contact information

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- React 19
- Lucide icons

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Modal.tsx
│   └── SavingsCalculator.tsx
├── layout.tsx
├── page.tsx
└── globals.css
```

## Customization

- Update contact info (phone, email) in Header, Footer, and CTA sections.
- Tweak calculator assumptions in `SavingsCalculator.tsx` when real pricing data is available.
- Replace the inline logo SVG with the official Recon logo asset.
- Add a real `og-image.png` in `/public` for social sharing.

## Deployment

This is a standard Next.js app. Deploy easily to Vercel, Netlify, or any platform that supports Node.js.

```bash
npm run build
```

## License

Private — Recon Technologies, LLC

---

Built as a fast, scannable landing page for on-farm use. All content is farmer-focused and mobile-optimized.
