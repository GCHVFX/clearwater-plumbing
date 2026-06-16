# Project Structure — Starter Pack Edition

## Directory Tree (What to Customize in Each Folder)

```
clearwater-plumbing/
│
├── 📝 CUSTOMIZATION GUIDE (Start here)
│   ├── STARTER_PACK.md          ← Read first: customization checklist
│   └── PROJECT_STRUCTURE.md      ← You are here
│
├── 📁 public/
│   ├── logo.png                  ✏️  CUSTOMIZE — Replace with contractor logo
│   ├── icon.png                  ✏️  CUSTOMIZE — Replace with contractor icon
│   └── (other SVGs — leave as is)
│
├── 📁 app/
│   ├── layout.tsx                ✏️  CUSTOMIZE (Line 7)
│   │   └── Metadata: title, description
│   │
│   ├── page.tsx                  ✏️  CUSTOMIZE (Heavy)
│   │   ├── Hero headline & subheadline
│   │   ├── Service descriptions & pricing
│   │   ├── Testimonials
│   │   ├── Trust signals text
│   │   └── All CTA copy
│   │
│   ├── globals.css               ✓ Keep as is
│   │
│   ├── 📁 about/
│   │   └── page.tsx              ✏️  CUSTOMIZE (Medium)
│   │       ├── Owner story (paragraphs 1-4)
│   │       ├── Years started, experience
│   │       ├── Service areas
│   │       ├── Why different section
│   │       └── Credentials & numbers
│   │
│   ├── 📁 services/
│   │   └── page.tsx              ✏️  CUSTOMIZE (Medium)
│   │       ├── Service names & descriptions
│   │       ├── Price ranges
│   │       ├── Service area list
│   │       └── Icons (emojis — can change)
│   │
│   ├── 📁 gallery/
│   │   └── page.tsx              ✏️  CUSTOMIZE (Optional)
│   │       └── Replace image URLs with contractor's photos
│   │
│   ├── 📁 contact/
│   │   └── page.tsx              ✏️  CUSTOMIZE (Light)
│   │       ├── Phone number
│   │       ├── Email address
│   │       ├── Hours of operation
│   │       ├── Service areas
│   │       ├── License info
│   │       └── Calendly embed code (when available)
│   │
│   └── 📁 api/quote/
│       └── route.ts              ✓ Keep as is
│           (Logs quote requests to console)
│
├── 📁 components/
│   ├── Header.tsx                ✓ Keep as is
│   ├── Footer.tsx                ✓ Keep as is
│   ├── QuoteForm.tsx             ✓ Keep as is
│   ├── ServiceCard.tsx           ✓ Keep as is
│   └── TestimonialCard.tsx       ✓ Keep as is
│
├── 📁 node_modules/              ✓ Auto-generated (git ignored)
├── 📁 .next/                     ✓ Auto-generated (git ignored)
│
├── tailwind.config.ts            ✓ Usually keep as is
│                                 ✏️  OPTIONAL: Change colours if contractor has brand
│
├── tsconfig.json                 ✓ Keep as is
├── next.config.js                ✓ Keep as is
├── package.json                  ✓ Keep as is (no new dependencies)
├── .gitignore                    ✓ Keep as is
│
└── 📝 Supporting files
    ├── SETUP.md                  ← Deployment instructions
    ├── STARTER_PACK.md           ← Customization guide
    └── PROJECT_STRUCTURE.md      ← You are here

```

---

## Customization Legend

| Symbol | Meaning |
|--------|---------|
| ✏️ CUSTOMIZE | Edit this for new contractor |
| ✓ Keep as is | Don't touch—works for all contractors |
| ✏️ OPTIONAL | Nice to have, but not required |

---

## File-by-File Customization Guide

### 🟥 MUST CUSTOMIZE (for each new contractor)

#### 1. `public/logo.png` and `public/icon.png`
```
Old: Clearwater Plumbing logo
New: [Contractor's logo]
```
Replace PNGs. No code changes needed.

---

#### 2. `app/layout.tsx` (Lines 6-10)
```tsx
// BEFORE
export const metadata: Metadata = {
  title: "Clearwater Plumbing | Fast. Dependable. Professional.",
  description: "Professional plumbing services in the Lower Mainland BC..."
};

// AFTER
export const metadata: Metadata = {
  title: "[CONTRACTOR_NAME] | [TAGLINE]",
  description: "[SERVICE_DESCRIPTION] in [SERVICE_AREA]..."
};
```

---

#### 3. `app/page.tsx` (Home Page)
**Sections to update:**

**Hero section (Lines 10-27):**
```tsx
// Replace:
<h1>Fast. Dependable. Professional. Plumbing You Can Trust.</h1>
<p>Serving the Lower Mainland for 12+ years</p>
<p>No hidden fees. Transparent pricing upfront.</p>

// With contractor's:
- Headline
- Subheadline
- Tagline
```

**Services (Lines 30-70):**
```tsx
// Update each ServiceCard:
<ServiceCard
  icon="🚨"
  title="Emergency Repairs"  // ← Change service names
  description="Burst pipes..." // ← Change descriptions
  priceRange="Starting at $200" // ← Change pricing
/>
```

**Trust signals (Lines 73-100):**
- Same-day response → contractor's promise
- Transparent pricing → their commitment
- Licensed & Insured → their credentials
- 24/7 availability → their availability

**Testimonials (Lines 130-160):**
```tsx
<TestimonialCard
  rating={5}
  quote="[Real customer quote]"  // ← Replace with actual testimonials
  author="[Name], [City]"        // ← Real customer name & location
/>
```

**Final CTA (Lines 165-175):**
- "Ready to fix that plumbing issue?" → adjust to service type
- All button text

---

#### 4. `app/contact/page.tsx` (Contact Page)
**Lines to update:**

```tsx
// Direct Contact section (around line 40)
href="tel:6045550123"                    // ← Change phone
<a href="mailto:info@clearwaterplumbing.com">  // ← Change email

// Email section (around line 55)
info@clearwaterplumbing.com              // ← Change email

// Hours section (around line 65)
<p><span>Mon-Fri:</span> 7am - 6pm</p>   // ← Change hours
<p><span>Sat-Sun:</span> 8am - 4pm</p>   // ← Change hours

// Badge section (around line 80)
Licensed #L12345                         // ← Change license number

// Service Areas (around line 95)
{['Vancouver', 'Burnaby', 'Richmond', ...].map(...)}  // ← Change areas
```

---

#### 5. `app/about/page.tsx` (About Page)
**Paragraphs to update (Lines 20-35):**

Replace the owner story:
```tsx
// BEFORE: "In 2012, I started Clearwater Plumbing..."
// AFTER: Contractor's actual story

// Update these facts:
- Year started: 2012
- Years of experience: 20+
- Why they started the business
- Service area: Lower Mainland
```

**Credentials section (Lines 75-95):**
```tsx
<p className="text-3xl font-bold text-blue mb-2">12+</p>  // ← Years in business
<p className="text-3xl font-bold text-blue mb-2">20+</p>  // ← Years experience
<p className="text-3xl font-bold text-blue mb-2">2000+</p> // ← Customer count
```

**Service areas (Lines 115-120):**
```tsx
{['Vancouver', 'Burnaby', 'Richmond', ...].map(...)}  // ← Change to contractor's areas
```

---

### 🟡 SHOULD CUSTOMIZE (recommended)

#### `app/services/page.tsx`
- Change service names, descriptions, pricing to match contractor
- Update service area list
- Adjust icons if they don't fit the trade

#### `app/gallery/page.tsx`
- Replace Unsplash image URLs with contractor's actual job photos
- Update captions to match their work
- Keep same grid structure

---

### 🟩 DON'T TOUCH (same for all contractors)

- `components/` (all files)
- `app/api/quote/route.ts`
- `app/globals.css`
- `tailwind.config.ts` (unless changing brand colours)
- `tsconfig.json`, `next.config.js`, `package.json`
- `.gitignore`

---

## Quick Reference: What to Search/Replace

**Find → Replace (use Ctrl+Shift+H in VS Code):**

| Find | Replace |
|------|---------|
| `Clearwater Plumbing` | `[NEW_COMPANY_NAME]` |
| `(604) 555-0123` | `[NEW_PHONE]` |
| `info@clearwaterplumbing.com` | `[NEW_EMAIL]` |
| `Lower Mainland` | `[SERVICE_AREA]` |
| `Licensed #L12345` | `[LICENSE_INFO]` |
| `Fast. Dependable. Professional.` | `[NEW_TAGLINE]` |
| `12+` | `[YEARS_IN_BUSINESS]` |
| `20+` | `[YEARS_EXPERIENCE]` |

---

## Customization Time Estimates

| Effort | Time | What It Includes |
|--------|------|---|
| **Minimal** (15 min) | 15 min | Logo, name, phone, email, hours |
| **Standard** (45 min) | 45 min | + Service descriptions + Testimonials |
| **Complete** (2-3 hrs) | 2-3 hrs | + Gallery photos + All copy perfected |

For quick sales cycles, go **Minimal** → Deploy → Show on Zoom → Update later.

---

## After Customization

1. Test locally: `npm run dev` → http://localhost:3000
2. Check all links work
3. Verify form submission
4. Test on mobile (use Chrome DevTools)
5. Push to GitHub
6. Deploy to Vercel (1-2 min)
7. Send link to contractor

Done. Site is live.
