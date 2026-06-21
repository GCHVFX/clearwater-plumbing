# Project Relationships

## WARNING

Do not delete, rename, or migrate any Supabase tables without checking BOTH repos:

- D:\Work\web-apps\clearwater-plumbing (this repo)
- D:\Work\web-apps\tradepulse-estimates

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

## Tables Not Used by This App

These tables exist in the shared project but are used only by the standalone TradePulse SaaS app:

- tpe_estimate_changes
- tpe_payment_reminders
- tpe_rate_limits

## Storage Buckets

| Bucket | Usage |
|---|---|
| tpe-estimate-photos | Private photo storage for quote submissions (signed URLs only) |

Other buckets in the shared project (used by standalone TradePulse):

| Bucket | Usage |
|---|---|
| logos | Business logos (standalone TradePulse) |

## Environment Variables

| Variable | Purpose |
|---|---|
| SUPABASE_URL | TradePulse Supabase project URL |
| SUPABASE_SERVICE_ROLE_KEY | Service role key (server-only, bypasses RLS) |
| TP_BUSINESS_ID | UUID of Clearwater Plumbing in tpe_businesses |
| TP_ADMIN_SECRET | Admin password for /admin/* routes |

## Auth Model

Single-tenant. No Supabase Auth. Admin access via TP_ADMIN_SECRET cookie (HMAC token). All queries scoped to TP_BUSINESS_ID.

## Integration Model

Clearwater is the first standalone contractor website using TradePulse as a backend. It is not a second TradePulse app. Both apps share the same Supabase project with no conflicts:
- Clearwater scopes all queries by `TP_BUSINESS_ID` (= `tpe_businesses.id`)
- TradePulse SaaS scopes by `owner_user_id` (= `auth.users`)

Future contractor websites should follow the Clearwater pattern: standalone site, same Supabase project, own `TP_BUSINESS_ID`, quote form creates `tpe_estimates` rows with `source = 'website_quote'` and `status = 'needs_review'`.

## Migration Status

All migrations complete:
- Phase 1/2A/2B/2C: Complete (quote intake, pricebook, estimates dashboard)
- Supabase project migration: Complete (moved from Web Apps to dedicated TradePulse project)
- Table prefix migration: Complete (tp_ → tpe_)
- Standalone TradePulse migration: **Complete** (schema expansion, code updates, production verified)
- Production quote flow: **Verified end-to-end**
