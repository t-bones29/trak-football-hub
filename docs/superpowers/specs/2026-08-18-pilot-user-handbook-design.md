# Pilot User Handbook — design

Status: content spec, to be drafted directly (no code changes).

## Purpose

A standalone handbook (not in-app) for the four Trak pilot personas — Player, Coach, Parent,
Academy — so each can use the app to its fullest intended extent from day one of the pilot. This
fills a real, verified gap: `CoachManual.tsx` exists in-app for coaches, but no equivalent exists
anywhere for Player, Parent, or Academy.

## Format

One combined document: `docs/pilot-user-handbook.md`. Four sections, one per persona, each
self-contained — a reader should be able to read only their own section and have everything they
need. Splitting into four separate handouts later (for kickoff distribution) is an easy follow-up
if wanted; not done now.

## Content sourcing

Derived **fresh from the codebase** for all four personas — actual pages, RLS policies, and
migrations — independent of `CoachManual.tsx`'s existing copy (a deliberate choice, not an
oversight: this handbook is independently verified against source rather than inheriting
`CoachManual`'s framing). Cross-checked against `docs/use-cases-current-state.md` so nothing
described is either unbuilt or has since changed.

Relevant source per persona:
- **Player**: `src/pages/player/*.tsx` (Home, Matches, MatchDetail, Feedback, EvolutionCard,
  Passport, Profile)
- **Coach**: `src/pages/coach/*.tsx` (Squad, AddPlayer, Assess, QuickAssess, QuickMatchLog,
  AddSession, Sessions, Recognition, AwardPlayer, Schedule, Assistant, Profile) — verified
  independently against source, not copied from `CoachManual.tsx`
- **Parent**: `src/pages/parent/*.tsx` (Home, Matches, Alerts, Profile) + the RLS policies that
  define exactly what a parent can/cannot see (`docs/use-cases-current-state.md` P1–P6)
- **Academy**: `src/pages/club/*.tsx` (Home, Coaches, Squads, Radar, Profile) + the organization
  join-code flow (`join_organization()`/`get_org_id_by_join_code()`)

## Scope decisions

- **Character/values feature**: brief "coming soon" mention only (Player and Academy sections) —
  not described in detail, since content and legal status can still change. No mention of specific
  values, mechanics, or timeline.
- **Academy section**: covers both the in-app Club Admin features (org dashboard, coach/squad
  visibility, radar analytics, join-code management) **and** practical pilot-logistics guidance —
  how to onboard coaches via join code, and honest notes on what isn't automated yet (no billing,
  no formal consent-capture flow — an academy running a pilot needs to know this going in, not
  discover it).
- **Nothing described that isn't live today.** No aspirational PRD content, no unbuilt features
  presented as available.

## Non-goals

- Not an in-app manual (no new React pages/components).
- Not a replacement for `CoachManual.tsx` — that stays as the in-app reference; this handbook is a
  separate, standalone pilot-launch document that happens to cover the same ground for coaches too
  (independently verified, not copy-pasted).
- Not a marketing document — that's `docs/business-positioning.md` and `docs/pilot-pitch-
  onepager.md`'s job. This handbook assumes the reader is already a pilot participant.
