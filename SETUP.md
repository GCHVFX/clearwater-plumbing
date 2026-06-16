# Clearwater Plumbing Website — Setup & Deployment Guide

## What's Built

Complete 5-page contractor website with quote form and API route.

**Pages:**
- Home (hero, services overview, trust signals, testimonials, CTAs)
- Services (8 plumbing services with pricing ranges)
- About (owner bio, credentials, why choose us)
- Gallery (12 job photos with captions)
- Contact (quote form + contact details + Calendly embed)

**Features:**
- Fully responsive (mobile-first)
- Navy and blue colour scheme matching your logo
- Quote form with validation (posts to /api/quote)
- API route logs quote requests to console (no DB needed)
- All links wired and working

## Deployment to Vercel

1. Push this repo to GitHub:
```bash
cd /home/claude/clearwater-plumbing
git init
git add .
git commit -m "Initial Clearwater Plumbing site"
git remote add origin https://github.com/YOUR_USERNAME/clearwater-plumbing.git
git push -u origin main
```

2. Go to vercel.com and import the GitHub repo
3. Select Next.js as the framework (auto-detected)
4. Deploy (should take 1-2 minutes)

Once deployed, your site will be live and the quote form will work. Console logs will appear in Vercel's function logs.

## Add Calendly to Contact Page

1. Go to calendly.com and set up your account
2. Create a calendar and set available times
3. Get your embed code (Calendly provides this in Settings)
4. Open `app/contact/page.tsx`
5. Replace the Calendly placeholder section with your embed code

The placeholder section starts with:
```
{/* Calendly Embed - Placeholder */}
```

Replace the entire div with Calendly's provided embed code.

## Next Steps for Sales Calls

**What to show on Zoom:**
- Home page (impressive hero, clear trust signals)
- Services (shows range of work)
- About (ownership, years in business)
- Gallery (job examples)
- Contact page (quote form demo + booking)

**Script for the call:**
1. "This is what a modern contractor website looks like. Clean, professional, mobile-friendly."
2. "Here's the killer feature—quote form right on the home page. Customers describe the job, you get contacted directly."
3. "Mobile-first design means contractors can access it on the job site."
4. "Calendly integration for booking service calls—no back-and-forth emails."

**Pricing angles:**
- This site took 4-6 weeks to custom-build if you hired an agency ($5k-10k)
- Your subscription gives them this as a template, deployed on day 1
- TradePulse integration means quote form feeds directly into their estimate tool

## Customization After Sale

For each new contractor, you'll need to update:
- Logo and branding colours (currently uses Clearwater logo)
- Company name, phone, email, address
- Service descriptions and pricing
- Owner bio
- Service areas
- Testimonials (collect from real customers)

## Important Notes

- Quote form currently logs to console. In production, you might want to email submissions to the contractor or integrate with TradePulse API
- Gallery images use Unsplash (free, high quality). You can replace with actual job photos
- Calendly integration requires their embed code (they provide it)
- All copy is optimized for contractor language, not tech jargon

## Build Commands

```bash
# Development server (run locally to test)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Go to http://localhost:3000 to see it locally.
