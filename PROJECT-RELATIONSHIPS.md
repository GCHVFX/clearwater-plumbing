# Project Relationships

## WARNING

Do not delete, rename, or migrate any Supabase tables without checking BOTH repos:

- C:\web-apps\clearwater-plumbing (this repo)
- C:\web-apps\tradepulse-estimates

Both apps share the same TradePulse Supabase project.

---

## This Repo

**Name:** Clearwater Plumbing
**Purpose:** Demo contractor website for selling web design subscriptions to BC trades businesses. Includes website quote intake and admin estimate dashboard.
**Live URL:** clearwater-plumbing-one.vercel.app

## Supabase Project

**Current:** TradePulse (https://fctequqcwxyhmnjgxixg.supabase.co)
**Long-term:** Same — shared TradePulse project with tradepulse-estimates

## Tables Used (current)

| Table | Usage |
|---|---|
| tpe_businesses | Business record for Clearwater (TP_BUSINESS_ID) |
| tpe_estimates | Website quote submissions (status=needs_review) |
| tpe_estimate_photos | Photo metadata for quote submissions |
| tpe_pricebook_items | Pricebook for building draft estimates |
| tpe_estimate_line_items | Draft estimate line items from pricebook |

## Tables Used (target — after standalone TradePulse migration)

Same as current. This app does not use:

- tpe_estimate_changes
- tpe_payment_reminders
- tpe_rate_limits

Those tables will be used by the standalone TradePulse app sharing this project.

## Storage Buckets

| Bucket | Usage |
|---|---|
| tpe-estimate-photos | Private photo storage for quote submissions (signed URLs only) |

After standalone migration, these buckets will also exist in this project:

| Bucket | Usage |
|---|---|
| logos | Business logos (standalone TradePulse) |
| estimate-photos | Estimate photos (standalone TradePulse, legacy — may merge into tpe-estimate-photos) |

## Environment Variables

| Variable | Purpose |
|---|---|
| SUPABASE_URL | TradePulse Supabase project URL |
| SUPABASE_SERVICE_ROLE_KEY | Service role key (server-only, bypasses RLS) |
| TP_BUSINESS_ID | UUID of Clearwater Plumbing in tpe_businesses |
| TP_ADMIN_SECRET | Admin password for /admin/* routes |

## Auth Model

Single-tenant. No Supabase Auth. Admin access via TP_ADMIN_SECRET cookie (HMAC token). All queries scoped to TP_BUSINESS_ID.

## Long-Term Direction

Clearwater is a demo site. It uses TradePulse as a backend for quote intake and estimate building. It will continue to use TP_BUSINESS_ID for single-tenant access. When the standalone TradePulse app migrates to this same Supabase project, both apps will share the same tables with no conflicts — Clearwater accesses by business_id, standalone accesses by owner_user_id.

## Migration Status

- Phase 1/2A/2B/2C: Complete (quote intake, pricebook, estimates dashboard)
- Supabase project migration: Complete (moved from Web Apps to dedicated TradePulse project)
- Table prefix migration: Complete (tp_ → tpe_)
- Standalone TradePulse migration: Not started (schema expansion + code updates pending)
