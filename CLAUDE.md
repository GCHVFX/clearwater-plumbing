# Clearwater Plumbing — Demo Contractor Website

Read first:

- AI-WORKFLOW.md
- ARCHITECTURE.md
- IMPORT-SYSTEM.md (if applicable)

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

globals.css uses @import "tailwindcss" at the top (not the v3 directives).

### Styling rules
- Default to inline style props for static styling.
  - CORRECT: `<div style={{ backgroundColor: '#1B3A5C', padding: '80px 20px' }}>`
  - WRONG: `<div className="bg-navy py-20">`
- Component-level `<style>` blocks are allowed only when needed for:
  - Media queries
  - Hover states
  - Focus states
  - Pseudo-selectors
  - Complex responsive behaviour
- Do not use `className` for Tailwind utility classes.
- If using `className`, it must only reference local selectors defined in the same component's `<style>` block.
- Keep component-level CSS small and scoped.
- Do not introduce global CSS unless explicitly requested.

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
Use CSS grid with auto-fit/minmax for responsive columns. No Tailwind responsive classes.

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
- next.config.ts
- postcss.config.mjs
- tsconfig.json
- tailwind.config.ts

## After Every Change
1. npm run build — must compile clean, zero errors
2. git add .
3. git commit -m "description of change"
4. git push

# AI Workflow

## Primary Roles

### ChatGPT

Use for:

* Product planning
* Feature design
* Business strategy
* Pricing decisions
* UX planning
* Technical specifications
* Reviewing competing implementation approaches
* Deciding what should be built

ChatGPT is the planner and specification writer.

---

### Claude Code

Claude Code is the primary implementation agent.

Use Claude Code for:

* New features
* UI implementation
* API development
* Database changes
* Refactors
* Website development
* TradePulse development
* RouteBuddy development
* AddressBuddy development
* Executing approved specifications

Claude should generally be given a complete specification before implementation begins.

---

### Codex

Codex is the reviewer and auditor.

Use Codex for:

* Architecture review
* Security review
* Bug hunting
* Edge-case analysis
* Performance review
* Requirement compliance review
* Deployment readiness review
* Pull request review
* Diff review

Codex should generally not be the primary implementation agent.

---

# Preferred Workflow

For most work:

1. ChatGPT creates specification
2. Claude Code implements
3. Codex reviews implementation
4. Claude Code fixes findings
5. Codex validates final result

Avoid having Claude Code and Codex edit the same files simultaneously.

---

# When to Request a Codex Review

Always consider a Codex review after:

* Authentication changes
* Database schema changes
* Payment system changes
* File upload systems
* OCR integrations
* AI integrations
* Major refactors
* Production deployment preparation

---

# Quick Decision Guide

Use Claude Code when:

* Building a new feature
* Creating a page
* Creating a website
* Connecting systems together
* Implementing a specification
* Modifying UI
* Refactoring code

Use Codex when:

* "Did Claude miss anything?"
* "Review this implementation."
* "Find bugs."
* "Audit this feature."
* "Review security."
* "Review architecture."
* "Review this diff."
* "Is this production ready?"

If unsure:

Build with Claude Code first.
Review with Codex second.

When project documentation conflicts with implementation practicality, prefer maintainable and readable solutions over rigid adherence to stylistic rules.

---

# Andrej Karpathy's 5

1. Ask, don't assume. If something is unclear, ask before writing a single line. Never make silent assumptions about intent, architecture, or requirements. When running unattended, pick the most reasonable interpretation, proceed, and record the assumption rather than blocking.

2. Implement the simplest solution for simple problems, better solutions for harder problems. Do not over-engineer or add flexibility that isn't needed yet. Before implementing, state the approach in 2 lines and list what it makes harder later.

3. Don't touch unrelated code but please do surface bad code or design smells you discover with me so we can address them as a separate issue.

4. Flag uncertainty explicitly. If you're unsure about something, see point 1 above. If it makes sense to do so, conduct a small, localised and low-risk experiment and bring the hypothesis and results to me to discuss. Confidence without certainty causes more damage than admitting a gap.

5. If you see a clearly better approach, say so before implementing. Explain the tradeoff in 2-4 bullets. If the current request is still reasonable, proceed unless the alternative avoids serious risk or wasted work.