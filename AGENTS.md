# Clearwater Plumbing — Agent Rules

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Project Purpose
Demo contractor website. Used as a starter pack template for selling
web design subscriptions to trades businesses in BC, Canada.

## Key Conventions

### Do not modify these files
- components/Header.tsx
- components/Footer.tsx
- components/QuoteForm.tsx
- components/ServiceCard.tsx
- components/TestimonialCard.tsx
- app/api/quote/route.ts
- app/globals.css
- tailwind.config.ts

### Customize only these files per contractor
- public/logo.png and public/icon.png
- app/layout.tsx (metadata only)
- app/page.tsx (hero, services, testimonials)
- app/contact/page.tsx (phone, email, hours)
- app/about/page.tsx (owner story, credentials)
- app/services/page.tsx (service descriptions, pricing)
- app/gallery/page.tsx (image URLs and captions)

## Brand Colours
- Navy: #1B3A5C (primary)
- Blue: #2E86C1 (accent)
- Light: #F8FAFB (backgrounds)

## Copy Rules
- Canadian English (colour, labour, centre)
- No em dashes
- No jargon: no "solutions", "streamline", "leverage", "optimize"
- Specific numbers over vague language ("$150-400" not "affordable")
- Contractor language: estimate, quote, job, customer, service call

## Quote Form
- Fields: name, phone, email, jobDescription, address, service type, urgency, up to 5 photos
- Posts to /api/quote
- Creates tpe_estimates row (source=website_quote, status=needs_review) and uploads photos to tpe-estimate-photos bucket
- Quote appears in TradePulse app for contractor review

## Deployment
- Vercel via git push
- Required env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, TP_BUSINESS_ID, TP_ADMIN_SECRET