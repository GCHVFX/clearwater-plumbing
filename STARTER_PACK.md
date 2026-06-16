# Contractor Website Starter Pack

Use this as a template to quickly spin up sites for new contractors.

## Quick Customization Checklist

For each new contractor, you only need to modify 5 files:

### 1. `public/logo.png` and `public/icon.png`
Replace with contractor's logo and icon.

### 2. `app/layout.tsx`
Update metadata:
```tsx
export const metadata: Metadata = {
  title: "COMPANY_NAME | TAGLINE",
  description: "SERVICE_DESCRIPTION..."
};
```

### 3. `app/page.tsx` (Home Page)
Search and replace:
- `"Fast. Dependable. Professional. Plumbing You Can Trust."` → contractor's headline
- `"Serving the Lower Mainland for 12+ years"` → their tagline
- All service descriptions and pricing
- All testimonials (get from real customers)
- `Licensed #L12345 | Fully Bonded` → their license info

### 4. `app/contact/page.tsx`
Replace:
- Phone: `(604) 555-0123` → contractor's phone
- Email: `info@clearwaterplumbing.com` → contractor's email
- Hours: `Mon-Fri 7am-6pm` → their hours
- Service areas list
- License number

### 5. `app/about/page.tsx`
Replace:
- Owner story (first 4 paragraphs)
- `2012` → year they started
- `20+ years` → their experience
- Service areas list
- Any credentials

## Optional (But Recommended)

### Update Services
`app/services/page.tsx` — change service descriptions, pricing, and icons

### Update Gallery
`app/gallery/page.tsx` — replace placeholder images with real job photos

### Update Testimonials
`app/page.tsx` — replace with real customer quotes (you'll collect these)

## Search/Replace Strings

Use Find & Replace (Ctrl+Shift+H) to quickly swap values across all files:

| Find | Replace With |
|------|---|
| `Clearwater Plumbing` | `[COMPANY_NAME]` |
| `(604) 555-0123` | `[COMPANY_PHONE]` |
| `info@clearwaterplumbing.com` | `[COMPANY_EMAIL]` |
| `Lower Mainland` | `[SERVICE_AREA]` |
| `12+` | `[YEARS_IN_BUSINESS]` |
| `20+` | `[YEARS_EXPERIENCE]` |
| `2000+` | `[CUSTOMER_COUNT]` |
| `Licensed #L12345` | `[LICENSE_INFO]` |
| `Fast. Dependable. Professional.` | `[TAGLINE]` |

## Minimal Customization Path (15 Minutes)

If you're in a time crunch, minimum viable customization:

1. Replace logo files
2. Update company name, phone, email, hours in:
   - `app/layout.tsx` (metadata)
   - `app/page.tsx` (hero section)
   - `app/contact/page.tsx` (contact info)
3. Update service area in all pages
4. Change testimonials to generic but realistic ones (or placeholder text)

## Files You Generally Don't Need to Touch

These are generic and work for any contractor:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/QuoteForm.tsx`
- `components/ServiceCard.tsx`
- `components/TestimonialCard.tsx`
- `app/api/quote/route.ts`
- `app/globals.css`
- `tailwind.config.ts`

## Deployment Workflow

For each new contractor:

```bash
# 1. Clone the starter pack
git clone <starter-repo> contractor-website
cd contractor-website

# 2. Update the 5 files listed above

# 3. Push to GitHub
git init
git add .
git commit -m "[CONTRACTOR_NAME] website"
git remote add origin https://github.com/YOUR_USERNAME/[contractor-name]-website.git
git push -u origin main

# 4. Deploy to Vercel
# (via Vercel dashboard or CLI)
```

Vercel deployment takes 90 seconds. Site is live.

## What Each Page Does

| Page | Purpose | Customization Level |
|------|---------|---|
| Home | First impression, trust signals, CTAs | HIGH — all copy changes |
| Services | Shows what you offer with pricing | HIGH — service-specific |
| About | Owner credibility and story | MEDIUM — owner bio |
| Gallery | Social proof via job photos | MEDIUM — replace images |
| Contact | Quote form + booking | LOW — just contact info |

## Brand Colour Customization

If the contractor has their own brand colours, update `tailwind.config.ts`:

```ts
colors: {
  "navy": "#[HEX]",    // Primary colour
  "blue": "#[HEX]",    // Accent colour
  ...
}
```

Then it propagates everywhere (header, buttons, accents).

## TradePulse Integration

The quote form currently logs to console. To wire it to TradePulse:

In `app/api/quote/route.ts`, add:

```ts
// After form validation:
const tradepulseResponse = await fetch('https://api.tradepulse.com/v1/estimates', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.TRADEPULSE_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    businessId: process.env.TRADEPULSE_BUSINESS_ID,
    customerName: data.name,
    customerEmail: data.email,
    customerPhone: data.phone,
    jobDescription: data.jobDescription,
    address: data.address,
  }),
});
```

Set env vars on Vercel dashboard:
- `TRADEPULSE_API_KEY`
- `TRADEPULSE_BUSINESS_ID`

## Copy Tone Guidelines

All contractors use the same voice:
- Direct, no jargon
- Specific numbers (not "affordable" but "$150-400")
- Action-oriented ("Fix that leak" not "remediate moisture issues")
- One simple CTA per section
- No em dashes, no filler transitions

Keep it. It works.

## Post-Launch

After site goes live:

1. **Collect testimonials** — ask first 3-5 customers for quotes
2. **Add real photos** — replace Unsplash gallery with job photos
3. **Monitor quote form** — watch console logs (or email) for incoming requests
4. **Update hours/phone** — if they change

That's it. Site runs itself.
