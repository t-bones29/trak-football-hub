# Trak — Design Principles

One evolving doc. Update in place; don't fork per-feature copies.

## Foundations (already true across the app — don't reinvent)

- **Shell**: every screen is wrapped in `MobileShell` (`src/components/trak/MobileShell.tsx`) —
  `max-w-[430px]`, background `#0A0A0B`, `px-5 pb-24`. Bottom tab bar is `NavBar`, fixed, role-aware
  (`player` | `coach` | `parent`).
- **Type**: DM Sans for all UI text and headings (weight 300–500, tight tracking on large numerals,
  e.g. `-0.03em` to `-0.04em`). DM Mono exclusively for metadata/labels: 9–11px, uppercase,
  `letter-spacing: 0.12em`, via the `MetadataLabel` component or its inline equivalent.
- **Surface colors**: page bg `#0A0A0B` · card bg `#101012` · elevated card `#17171A` · hairline
  border `rgba(255,255,255,0.07)` (sometimes `0.05`–`0.11` for emphasis/subtlety). Never a flat
  black-on-black block without at least the `0.05` border — cards always separate from the page.
- **Text opacity tiers**: `t1 = rgba(255,255,255,0.88)` primary text, `t2 = 0.45` secondary,
  `t3 = 0.22` tertiary/placeholder-adjacent. Use these tiers, not arbitrary opacities.
- **Accent**: `#C8F25A` (lime) is the one accent color — primary CTAs, active states, positive
  signal. It appears as solid fill (buttons), or at low alpha for tinted chips/cards
  (`rgba(200,242,90,0.06–0.15)` bg with `rgba(200,242,90,0.24–0.35)` border).
- **Rating bands**: `BANDS` in `src/lib/types.ts` is the *only* palette for skill/performance
  ratings — Exceptional `#C8F25A`, Standout `#86efac`, Good `#4ade80`, Steady `#60a5fa`,
  Mixed `#fb923c`, Developing `#a78bfa`, Difficult `rgba(255,255,255,0.4)`. Rendered via `BandPill`.
  Never invent a new rating color scale — if a screen needs a rating/quality signal, it maps to a
  `BANDS` entry.
- **Session-type colors** (established in `PlayerHome`'s Upcoming Events list, not yet a shared
  component — extend the convention, don't fork it): Training `#C8F25A`, Match `#fbbf24`,
  Tournament `#c084fc`, Other `rgba(255,255,255,0.4)`. Use these for any session-type badge/dot
  across Schedule, Training Plan, and Session Run surfaces so a "Training" tag always reads the
  same color everywhere in the app.
- **Cards**: `rounded-[14px]`–`rounded-[24px]` depending on hierarchy (14–18px for list rows/content
  cards, 24px for hero cards), `border border-white/[0.07]`, `p-4` typical padding. Reuse `TrakCard`
  where a plain content card is enough; hand-roll only when a card needs a gradient/hero treatment
  matching `PlayerHome`'s hero card pattern.
- **Chips/pills**: selected = `rgba(200,242,90,0.10–0.12)` bg, `#C8F25A` text, `rgba(200,242,90,0.3)`
  border. Unselected = `#202024` or `rgba(0,0,0,0.3–0.35)` bg, `rgba(255,255,255,0.4–0.45)` text,
  `rgba(255,255,255,0.07)` border. This is `PillSelector` / the inline `Chip` pattern in
  `CoachAddSession` — reuse it for any new single/multi-select control instead of inventing toggle
  styling.
- **Primary CTA**: full-width, `rounded-[12px]`, sticky to the bottom of the scroll area with a
  gradient fade (`linear-gradient(180deg, rgba(10,10,11,0) 0%, #0A0A0B 35%)`) behind it. Enabled =
  `#C8F25A` bg / black text. Disabled = `rgba(255,255,255,0.06)` bg / `rgba(255,255,255,0.3)` text.
  This exact pattern is in `CoachAddSession` — reuse verbatim for any new save/submit action.
- **Back nav**: `34×34px`, `bg-[#17171A]`, `border border-white/[0.11]`, `rounded-[10px]`,
  `ChevronLeft` icon at 14px. Reuse this exact square for every detail-screen topbar.

## Patterns introduced by the Schedule → Training Plan → Attendance → Feedback journey

These are new — flagged explicitly per the agent brief, not silently invented:

- **RSVP state color**: *Going* = accent lime `#C8F25A` (positive/confirmed, consistent with every
  other "confirmed/active" state in the app). *Can't make it* = the existing `--destructive` /
  `--red` token (`#ef4444`-family, already used for absent/red-card states in `CoachAddSession`).
  *No response* = neutral `t2`/`t3` white, no color — absence of a decision should never borrow the
  destructive red, since "haven't answered yet" ≠ "declined."
- **Attendance pre-filled from RSVP**: when a coach opens Session Run and an attendance mark
  originated from a player's RSVP rather than a manual coach edit, it carries a small DM Mono
  caption (`· from RSVP`) at `t3` opacity next to the Present/Absent toggle. This keeps the existing
  `CoachSessionDetail` present/absent binary — it does not add a third state. Per the spec's
  "approach A," RSVP is a pre-fill convenience, not a separate tracked field on top of attendance.
- **Drill/objective picker**: extends the `PillSelector`/`Chip` multi-select pattern already used
  for `SESSION FOCUS` in `CoachAddSession` — a drill card is a taller variant of that same chip
  (title + one-line sub-copy, selected/unselected via the same lime-tint treatment), not a new
  interaction model.
- **Feedback-to-player surface**: reuses the `PointCard` accordion visual language from
  `PlayerFeedback.tsx` (numbered chip, expand/collapse, tinted bank card) but simplified to a single
  session-level note rather than the match-feedback engine's 3-point AI breakdown — session
  feedback is one coach-authored note, not a generated multi-point analysis.

## When a new pattern is genuinely warranted

Only introduce new visual language when nothing above covers it, and say so explicitly in the
wireframe hand-off. Silent deviation from an existing pattern is treated as a bug in this process.
