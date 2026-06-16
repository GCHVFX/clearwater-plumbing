# Clearwater Plumbing — Demo Contractor Website

## Purpose
Demo site for selling web design subscriptions to BC trades businesses. Must look professional enough that contractors feel embarrassed about their current site on a Zoom call.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind v4
- Vercel (auto-deploys on push to main)
- Live at: clearwater-plumbing-one.vercel.app

## Critical: Tailwind v4 Constraint
Do NOT use Tailwind utility classes in components or pages. They do not render reliably in this setup.

All styling must use inline style props directly on JSX elements:
- CORRECT: <div style={{ backgroundColor: '#1B3A5C', padding: '80px 20px' }}>
- WRONG: <div className="bg-navy py-20">

globals.css uses @import "tailwindcss" at the top (not the v3 directives).

## Brand
- Navy: #1B3A5C (primary backgrounds)
- Blue: #2E86C1 (CTAs, accents, links)
- Off-white: #F0F4F8 (section breaks)
- White: #ffffff (cards, text on dark)
- Body text: #1e293b
- Muted text: #64748b
- Stars: #FDB022

Logo files:
- public/logo.png — full logo (use in header and footer)
- public/icon.png — icon only (use as favicon fallback only)

## Responsive Layout
Use CSS grid with auto-fit/minmax for responsive columns. Add media queries via <style> tags inside components when needed. No Tailwind responsive classes.

## Files — What to Edit
- app/page.tsx — Home page
- app/services/page.tsx — Services page
- app/about/page.tsx — About page
- app/gallery/page.tsx — Gallery page
- app/contact/page.tsx — Contact page
- components/Header.tsx — Two-bar header (white logo bar + navy nav bar)
- components/Footer.tsx — Navy footer
- components/QuoteForm.tsx — Quote form with validation
- components/ServiceCard.tsx — Service card component
- components/TestimonialCard.tsx — Testimonial card component

## Files — Do Not Touch
- app/api/quote/route.ts
- next.config.ts
- postcss.config.mjs
- tsconfig.json
- tailwind.config.ts

## After Every Change
1. npm run build — must compile clean, zero errors
2. git add .
3. git commit -m "description of change"
4. git push