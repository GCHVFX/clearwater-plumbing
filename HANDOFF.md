# Clearwater Plumbing handoff

Updated: 2026-09-12 01:01 PT

## Project

- Project: Clearwater Plumbing
- Repo path: C:\Work\websites\clearwater-plumbing
- Relationship: standalone demo contractor website (Next.js 16 / App Router,
  Tailwind v4 via inline styles, Vercel-deployed) integrated with the
  TradePulse backend for the guided quote flow.
- Production/site status: live at clearwater-plumbing-one.vercel.app,
  auto-deploys on push to `main` (per CLAUDE.md; not independently verified
  against the live Vercel dashboard this session).

## Current work

- Guided quote form (`GuidedQuoteFlow`, used on `app/contact/page.tsx`) is
  integrated with TradePulse.
- Small UI task completed this session: removed the unused
  `info@clearwaterplumbing.com` email contact section that sat beside the
  quote form sidebar (Phone / Email / Hours / "What happens next" stack).
  The Email block was deleted outright; the surrounding flex column's
  existing `gap` closes the space naturally, so Hours moved up with no
  layout changes needed elsewhere.
  - File: `app/contact/page.tsx`
  - Verified: `npm run build` compiled clean (zero errors, all 12 routes
    generated); grep confirmed no remaining "Email"/`info@clearwaterplumbing`
    references in the file; Phone, Hours, and the "What happens next" card
    confirmed unchanged.
  - Committed and pushed: commit `6102c40` on `main`.

## Important constraints

- Preserve existing behaviour unless explicitly requested otherwise.
- Keep changes tightly scoped — do not touch unrelated files, styling
  conventions (inline styles only; no Tailwind utility classes), or
  Do-Not-Touch files (`next.config.ts`, `postcss.config.mjs`,
  `tsconfig.json`, `tailwind.config.ts`).
- TradePulse is the backend/integration dependency for the quote flow;
  changes here should not assume changes on the TradePulse side.

## Current next action

- No outstanding UI work queued. If further contact-panel changes are
  requested, re-verify layout/build the same way (npm run build + visual
  check of the sidebar stack).

## AICC integration (this session)

- This repo was already a tracked AICC project (`.ai-control-centre/project.json`
  existed) but had no `activity.jsonl` / `current-session.json` (no session
  had ever been recorded) and no `HANDOFF.md`.
- Added this `HANDOFF.md` using the same structure as the working sibling
  projects (`tradepulse-estimates`, `greg-hansen`).
- Recorded a session via the existing AICC CLI (`npm run aicc --` from
  `C:\Work\tools\ai-control-centre`), using only confirmable metadata
  (provider `claude-code`; exact model/effort omitted per CLAUDE.md's
  guidance that Claude Code cannot reliably self-report those to a shelled
  command, unless explicitly supplied).
- No changes were made to the AICC application itself; the existing
  mechanism was fully sufficient.

## Web Chat / browser-chat handoff integration (2026-09-12 01:01 PT)

- Problem: AICC's Web Chat column showed "None recorded" for this project
  despite Claude Code session tracking already working.
- Copied the established working implementation from
  `C:\Work\tools\routebuddy\.claude\hooks\aicc-handoff.mjs` and
  `C:\Work\tools\routebuddy\.claude\settings.json` verbatim (no new
  integration invented). The hook is a Claude Code `UserPromptSubmit` hook
  that detects prompts starting with `[AICC]` and pipes the full raw prompt
  to the AICC CLI's `handoff record --stdin` command; the hook itself
  contains no dedupe logic — the CLI handles that via a stable fingerprint.
- Files added:
  - `.claude/hooks/aicc-handoff.mjs` (copied unchanged)
  - `.claude/settings.json` (new — no prior settings file existed in this
    repo, so no merge was needed; content matches routebuddy's exactly)
- Verified end-to-end using this session's actual `[AICC]` header (Source:
  ChatGPT, Model: GPT-5.6 Sol, Effort: High, Session type: Debugging) via
  `npm run aicc -- handoff record --project "C:\Work\websites\clearwater-plumbing" --prompt-file <this prompt> --json`
  from the AICC repo:
  - First call: `"status": "recorded"`, projectReindexed: true.
  - Identical replay: `"status": "skipped"`, warning "Duplicate of an
    existing recorded handoff — skipped.", same fingerprint, no new event
    and no reindex — confirms no duplicate handoff is created on retry.
- Confirmed directly in `project_derived` (AICC sqlite):
  `browser_chat_provider_key` = `chatgpt`, `browser_chat_model` =
  `GPT-5.6 Sol`, `browser_chat_effort` = `High`, `browser_chat_session_title`
  = "Debugging handoff", `browser_chat_at` populated. All were empty before
  this test.
- No Clearwater application code, UI, Supabase config, dependencies, or
  deployment configuration was touched — only `.claude/` files and
  `HANDOFF.md`.
