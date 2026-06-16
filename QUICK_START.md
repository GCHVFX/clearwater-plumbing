# Quick Start: Spin Up a New Contractor Site in 30 Minutes

## Before You Start

You need:
- Contractor's logo (PNG, any size)
- Contractor's company name
- Phone number
- Email address
- Their service area (city/region)
- 3 customer testimonials (or placeholder text)

## Step 1: Clone the Starter Pack (2 min)

```bash
git clone https://github.com/YOUR_USERNAME/clearwater-plumbing.git [contractor-name]-website
cd [contractor-name]-website
rm -rf .git  # Remove original git history
```

Now you have a fresh copy. Don't modify the original.

## Step 2: Replace Logo Files (1 min)

```bash
# Replace these files with contractor's logo
rm public/logo.png public/icon.png
cp /path/to/contractor/logo.png public/logo.png
cp /path/to/contractor/icon.png public/icon.png
```

## Step 3: Customization (15-20 min)

Open the project in VS Code. Use Find & Replace (Ctrl+Shift+H) to swap these values across all files:

```
Find                                  → Replace With
───────────────────────────────────────────────────
Clearwater Plumbing                   → [Company Name]
(604) 555-0123                        → [Phone Number]
info@clearwaterplumbing.com          → [Email]
Lower Mainland                        → [Service Area]
Licensed #L12345                      → [License Info]
12+                                   → [Years in Business]
20+                                   → [Years Experience]
2000+                                 → [Customer Count]
Fast. Dependable. Professional.      → [Their Tagline]
```

**Then manually update these files:**

1. **`app/page.tsx`** (Home Page)
   - Hero headline
   - Service descriptions (lines ~35-55)
   - Testimonial quotes (lines ~130-150)
   - Trust signal text (lines ~73-100)

2. **`app/about/page.tsx`** (About Page)
   - Owner story (lines 20-35)
   - Service areas list (lines ~115)

3. **`app/services/page.tsx`** (Services Page)
   - Service descriptions (if needed)
   - Price ranges (if different)

4. **`app/contact/page.tsx`** (Contact Page)
   - Already updated by search/replace

Done. That's it.

## Step 4: Test Locally (3 min)

```bash
npm install
npm run dev
```

Go to http://localhost:3000 and verify:
- Logo shows in header
- Company name appears everywhere
- Phone number works (click it)
- Quote form loads
- All pages are linked

Stop server: Ctrl+C

## Step 5: Deploy to Vercel (5 min)

```bash
# Initialize new git repo
git init
git add .
git commit -m "[Company Name] website"
git remote add origin https://github.com/YOUR_USERNAME/[company-name]-website.git
git push -u origin main
```

Then:
1. Go to vercel.com
2. Click "Add New" → "Project"
3. Import the GitHub repo
4. Select Next.js (auto-detected)
5. Click Deploy

**Site is live in 90 seconds.** You'll get a URL like `company-name.vercel.app`

## Step 6: Send to Contractor (2 min)

Email them:
```
Hi [Name],

Your website is live! Check it out:
https://[company-name].vercel.app

Here's what's ready:
- Professional homepage with your logo
- Services page listing everything you do
- About page with your story
- Gallery of your work (we used placeholder images—send us real photos)
- Contact form that sends quotes directly to your phone
- Calendly booking integration (let us know when you set it up)

Next steps:
1. Review the site and give feedback
2. Send us 3-5 real customer testimonials (we'll add them)
3. Send job photos for the gallery (we'll update it)
4. Set up your Calendly and we'll integrate it

Questions? Call me at [your number].

[Your Name]
```

## That's It!

You've launched a professional contractor website in 30 minutes.

---

## Optional Next Steps

**To make it even better:**

1. **Add real testimonials** — Replace placeholder quotes with actual customer names and reviews
2. **Add real photos** — Replace Unsplash gallery images with their job photos
3. **Set up Calendly** — Get their embed code and add to contact page
4. **Custom colours** — If they have brand colours, update `tailwind.config.ts`

These can be done anytime—even after launch.

---

## Troubleshooting

**"npm install failed"**
- Make sure you're in the project directory: `cd [contractor-name]-website`
- Try: `rm -rf node_modules package-lock.json` then `npm install` again

**"Build failed"**
- Check you only edited the files in QUICK_START.md
- Don't add new components or change component files
- If stuck, just delete the file and restore from backup

**"Logo doesn't show"**
- Make sure the PNG files are exactly named `logo.png` and `icon.png`
- They should be in the `public/` folder (not `public/images/`)

**"Quote form doesn't work"**
- Don't modify `components/QuoteForm.tsx` or `app/api/quote/route.ts`
- The form should work out of the box

---

## Speed Record

Fastest customization: **12 minutes**
- 2 min: Clone & replace logos
- 5 min: Find/Replace all values
- 3 min: Manually update hero section
- 2 min: Test locally

Challenge yourself to beat 12 minutes.
