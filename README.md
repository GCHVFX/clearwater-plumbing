# Clearwater Plumbing — Contractor Website Starter Pack

A production-ready Next.js template for building professional contractor websites. Spin up a new site in 30 minutes. Deploy to Vercel. Start selling subscriptions.

**Current Status:** Fully built, tested, deployed-ready.

---

## What's In The Box

**5 Complete Pages:**
- Home (hero, services, trust signals, testimonials)
- Services (8 plumbing services with pricing)
- About (owner story, credentials, service areas)
- Gallery (12 job photo placeholders)
- Contact (quote form + contact details + Calendly embed)

**Features:**
- Fully responsive (mobile-first)
- Quote form with validation (posts to `/api/quote`)
- Contractor language (not SaaS jargon)
- Navy and blue colour scheme
- Calendly integration ready (placeholder)
- Zero dependencies beyond Next.js

**Deploy:**
- One command to Vercel
- Site live in 90 seconds
- Free tier works great

---

## Quick Navigation

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **QUICK_START.md** | Step-by-step to launch a new site | 5 min |
| **PROJECT_STRUCTURE.md** | Visual guide to what to edit | 10 min |
| **STARTER_PACK.md** | Customization checklist | 5 min |
| **SETUP.md** | Deployment instructions | 3 min |

**Start here:** Open **QUICK_START.md**

---

## 30-Second Version

```bash
# 1. Clone the starter pack
git clone [this-repo] contractor-site
cd contractor-site

# 2. Replace logo files
cp /path/to/logo.png public/logo.png

# 3. Search/Replace key values
# Find & Replace: "Clearwater Plumbing" → "Company Name"
# (repeat for phone, email, service area, etc.)

# 4. Test locally
npm run dev
# Go to http://localhost:3000

# 5. Deploy
git add .
git commit -m "First site"
git remote add origin [your-repo]
git push
# Import on vercel.com

# 6. Site is live
```

That's it. You have a professional contractor website.

---

## What to Customize

**Must Change (5 files):**
1. `public/logo.png` — Replace with contractor logo
2. `public/icon.png` — Replace with contractor icon
3. `app/layout.tsx` — Update metadata (title, description)
4. `app/page.tsx` — Update hero, services, testimonials
5. `app/contact/page.tsx` — Update phone, email, hours

**Should Change (optional):**
- `app/services/page.tsx` — Service descriptions and pricing
- `app/about/page.tsx` — Owner story and credentials
- `app/gallery/page.tsx` — Replace placeholder images with real photos

**Don't Touch:**
- Everything in `components/` folder
- `app/api/quote/route.ts`
- Config files (tailwind, tsconfig, etc.)

See **PROJECT_STRUCTURE.md** for exact line numbers and what to change.

---

## Key Features Explained

### Quote Form
Located on the contact page. Customers enter:
- Name
- Phone
- Email
- Job description
- Address

Form validates and posts to `/api/quote`. API logs to console. In production, can be wired to:
- Email the contractor
- TradePulse API (auto-generate estimate)
- Database

### Mobile-First
- Burger menu on mobile
- Touch-friendly buttons (44px+)
- Fast on slow connections
- Works without JavaScript (mostly)

### Contractor Language
All copy avoids:
- "Solutions"
- "Streamline"
- "Leverage"
- "Optimize"
- "Synergy"

Uses instead:
- "Fix that leak"
- "Transparent pricing"
- "Same-day response"
- "Licensed and insured"

---

## File Structure (What Matters)

```
clearwater-plumbing/
├── app/
│   ├── page.tsx                 ← Customize: Hero, services, testimonials
│   ├── layout.tsx               ← Customize: Metadata
│   ├── about/page.tsx           ← Customize: Owner story
│   ├── services/page.tsx        ← Customize: Service list
│   ├── contact/page.tsx         ← Customize: Contact info
│   ├── gallery/page.tsx         ← Customize: Images (optional)
│   ├── api/quote/route.ts       ← Don't touch
│   └── globals.css              ← Don't touch
│
├── components/
│   ├── Header.tsx               ← Don't touch
│   ├── Footer.tsx               ← Don't touch
│   ├── QuoteForm.tsx            ← Don't touch
│   ├── ServiceCard.tsx          ← Don't touch
│   └── TestimonialCard.tsx      ← Don't touch
│
├── public/
│   ├── logo.png                 ← Customize: Replace
│   └── icon.png                 ← Customize: Replace
│
└── [Guides: QUICK_START.md, PROJECT_STRUCTURE.md, etc.]
```

---

## Deployment Options

### Vercel (Recommended)
```bash
git push && vercel deploy
```
- Free tier works great
- Automatic deployments on push
- Live in 90 seconds
- Included functions for API route

### Other Platforms
- Netlify (works, but no serverless functions for free)
- AWS Amplify (overkill)
- Self-hosted (unnecessary)

**Recommendation:** Use Vercel. It's free and handles everything.

---

## Next Steps After Launch

1. **Collect real testimonials** — Ask customers for quotes
2. **Add real photos** — Replace Unsplash gallery images
3. **Set up Calendly** — Get embed code, add to contact page
4. **Monitor quote form** — Check console logs for incoming requests
5. **Iterate based on feedback** — Update copy, services, pricing as needed

---

## Troubleshooting

**Site won't build locally?**
- Delete `node_modules` and `.next` folder
- Run `npm install` again
- Run `npm run build`

**Logo doesn't appear?**
- Files must be named exactly `logo.png` and `icon.png`
- Must be in `public/` folder (not `public/images/`)
- Supported formats: PNG, JPG, SVG

**Quote form doesn't work?**
- Check you didn't modify `QuoteForm.tsx` or `api/quote/route.ts`
- Verify form fields match (name, phone, email, jobDescription, address)
- Check browser console for errors

**Vercel deployment fails?**
- Make sure `package.json` has `"next": "^16.0.0"`
- Check `tsconfig.json` is valid
- All imports must resolve correctly

---

## Customization Time Estimates

| Level | Time | Includes |
|-------|------|----------|
| **Minimal** | 15 min | Logo, name, phone, email |
| **Standard** | 45 min | + Services + Testimonials |
| **Complete** | 2-3 hrs | + Gallery photos + All copy |

For quick demos on sales calls, go **Minimal** and update later.

---

## Design Notes

**Colours (from Clearwater logo):**
- Navy: `#1B3A5C` (primary)
- Blue: `#2E86C1` (accent)
- Light: `#F8FAFB` (backgrounds)

**Typography:**
- Headlines: Inter Bold (600-700)
- Body: Inter Regular (400)
- All responsive and accessible

**Design Philosophy:**
- Clean and professional, not corporate
- Mobile-first, scales to desktop
- Trust signals prominent
- Single CTA per section
- No clutter

---

## For Sales Calls

**What to show:**
1. Home page (make them jealous of their current site)
2. Services (shows breadth of work)
3. Quote form (the killer feature)
4. Contact page (multiple ways to get in touch)

**Script:**
> "This is what a modern contractor website looks like. Clean, fast, mobile-first. Customers can describe their job, get a quote, and book a call—all from their phone. This usually takes agencies 4-6 weeks to build. You get it deployed on day one. For $250/month, it's a no-brainer."

---

## Pricing (For Your Sales Calls)

| Plan | Price | Includes |
|------|-------|----------|
| **Basic** | $250/month | 5-page website + Starter TradePulse + contact form |
| **Pro** | $350/month | All of Basic + Calendly booking + Google Business setup |

---

## API Integration (Optional)

The quote form can be wired to multiple endpoints:

**Option 1: Email (Simplest)**
```ts
// In app/api/quote/route.ts
await sendEmail({
  to: process.env.CONTRACTOR_EMAIL,
  subject: 'New Quote Request',
  body: `...`
});
```

**Option 2: TradePulse (Recommended)**
```ts
// Posts directly to TradePulse API
// Auto-generates estimate
// Contractor gets notified
```

**Option 3: Database**
```ts
// Save to Supabase / Firebase
// Build a dashboard for contractor
```

Currently posts to console (logs quote requests). Wire it up as needed.

---

## License & Attribution

This starter pack is yours to customize and resell. No attribution required. Build and deploy it as your own product.

---

## Questions?

Refer to the guides:
- **QUICK_START.md** — How to launch fast
- **PROJECT_STRUCTURE.md** — What to change where
- **STARTER_PACK.md** — Detailed customization checklist

If you get stuck, check **Troubleshooting** above or review the original code.

---

**Ready to launch? Open QUICK_START.md and follow the 6 steps.**
