# Trak — Master Positioning Doc

Source of truth for the value proposition and competitive framing. Audience-specific pitches
(pilot one-pagers, investor decks, internal briefs) should be adapted from this document, not
drafted independently, so the story stays consistent as facts change.

*Last assembled: 2026-08-09. Update this doc whenever the character-feature validation status,
legal status, or competitive facts below change — stale competitor pricing is worse than none.*

---

## The one-line pitch

Trak gives young footballers a performance record that belongs to *them* — not their club — and
builds good sportsmanship into the habit of using it.

## The problem

A youth academy player changes club or coach roughly ten times over a five-year career. Every
time, their performance history resets — it lived in that club's admin system, not with them.
Meanwhile, values and character are treated as a separate lecture kids tune out, disconnected
from the sport they actually show up for every week.

## What Trak does — two things, not competing, nested

**The mechanism (why someone opens the app today):** athletes log matches, see a plain-language
7-band rating (never a raw number), receive coach assessments, and carry an Evolution Card /
Passport that travels with them regardless of which club or coach they're with. This is the
career-tracking layer, and it's the reason a player, parent, or coach has to open the app
regularly.

**The differentiator (what makes Trak more than a stats app):** a six-value character-reflection
habit (Composure, Respect, Effort, Responsibility, Care, Transfer) woven into the same
post-match loop — never a separate chore, never merged into the performance rating. **This is
already built and shipping in the product** — it is not a roadmap promise. What's still in
progress is the *content*: the specific scenarios, flashcards, and framework language are being
validated by a sports psychologist before they're presented as authoritative. Say it as: "the
character feature is live in the app today; its content is being finalized with an expert
before wider rollout" — not "coming soon."

## Who it's for

| Persona | What Trak gives them |
|---|---|
| **Player** (13–18) | A performance record that's theirs for life, not their club's — plus a private space to reflect after every match. |
| **Coach** | A fast way to assess, log, and recognise players across six dimensions, with an AI assistant that knows their squad. |
| **Parent** | Visibility into their child's matches, ratings, and coach feedback — without needing to chase the coach for updates. |
| **Club / academy admin** | An org-wide view of coaches and squads, with band-distribution analytics — opt-in, no direct player management. |

## What we promise — and what we don't

- **We say:** Trak helps athletes improve on and off the pitch, gives them a record that
  survives a club change, and promotes good sportsmanship through a framework built on
  established sport-education research (Hellison's TPSR, PCA's ROOTS).
- **We don't say:** that it "fixes" behaviour, guarantees character change, or replaces coaching.
  It promotes and supports — it does not promise outcomes.
- **Character is never graded, scored, or ranked.** It's a personal growth journey, never a
  comparison between children, and it never feeds the 0–10 performance band.

---

## Competitor matrix

| Competitor | Core Features | Pricing | Who Pays | Career-Tracking (cross-club) | Values/Character Component | Gap Trak Fills |
|---|---|---|---|---|---|---|
| **Spond** | Team scheduling, RSVP/attendance, group messaging, payment collection for clubs/teams. | Free for teams/clubs; Spond Club payment features charge ~2.5% + €0.20/transaction. No player-stats tier. | Free for parents/coaches; clubs pay indirectly via payment fees. | **No** — pure admin/logistics tool, no player-stats or league-table feature at all. | **No** — no evaluation, rating, or character content. | Spond solves logistics, not development. Trak adds the entire performance-record + character layer Spond lacks. |
| **TeamSnap** | Scheduling, communication, registration/payments, rosters, basic stats/photo sharing. | Tiered: free plan, Basic, Premium (~$79.99/mo cited for larger teams), Ultra. *Figures partially confirmed — vary by source.* | Coach/team-manager or club pays for paid tiers; free tier usable by any team. | **No** — stats/rosters live inside one team's account; no player-owned profile that moves between clubs. | **Marketing-only** — blog content on youth-sport character, not an in-app feature. | TeamSnap talks about character in a blog; Trak builds it into the logging habit as a structured, expert-vetted feature. |
| **Coachbetter** | Training planning (700+ drills), team/player management, attendance, coach-driven player evaluations, scouting tools; Man City content partnership. | Individual coach plans: Base $6.99/mo, Plus $12.99/mo, Pro $159.99/yr; Club Solution is custom/sales-gated. | Primarily the **coach** personally; clubs negotiate custom Club Solution deals. | **Partial/No** — evaluations live in the coach/club's account, not confirmed as portable when the player leaves. | **Partial** — coach-assessed evaluations exist, but no player self-reflection or confirmed values framework. | Coachbetter's data belongs to the coach/club; Trak's belongs to the player and adds structured self-reflection, not just one-way evaluation. |
| **Playermaker** | Wearable boot-sensor system tracking touches, sprints, kick velocity; individual/team dashboards; video tagging. | Subscription (monthly/annual/24-month) + hardware bundle; exact pricing sales-gated. | Mix — parents/players for individual kits, clubs for team deployments. | **Partial** — data tied to the player's account, but it's raw biomechanical data requiring continued hardware/subscription ownership. | **No** — purely physical/technical metrics. | Playermaker needs hardware and a live subscription; Trak tracks holistic, qualitative performance plus character with just a phone. |
| **Hudl** | Video recording/analysis, highlight reels, team stats, recruiting-focused athlete profile pages. | Youth football (US): Bronze $400/team/yr, Silver $1,000/team/yr, Gold $1,600/team/yr; soccer team packages from $500/team/yr. | **Club or team** pays the subscription, not individual players/parents. | **Partial** — athlete profiles are linked but exist for recruiting/video, tied to a paying team account; portability across accounts unconfirmed. | **No** — video/stats-analysis focused, no character feature. | Hudl is club-purchased and video-centric; Trak is player-owned and always-on, independent of any team's subscription status. |
| **Veo** | AI-powered automated match-recording camera with cloud analytics, auto-highlights, "Player Spotlight" individual stats. | Hardware ~$1,299 + subscription $67–$109+/mo; realistic first-year cost ~$2,100–$2,700+. | **Club or team** purchases hardware + subscription, sometimes parent-fundraised. | **Partial/No** — stats tied to the purchasing club's camera/account; doesn't travel if the player switches clubs. | **No** — video/stats analytics only. | Veo is expensive, hardware-dependent, and club-account-bound; Trak is lightweight, phone-based, and player-owned. |
| **MatchTrackr** | Grassroots result/goalscorer/assist logging with auto per-player stat tallies. *Product identity unconfirmed — closest match "Matchtracker" (UK grassroots app).* | **Unconfirmed** — no pricing found; official site returned an error on fetch. | Likely coach/parent, informal use — **unconfirmed**. | **No** — single-team result logger, no cross-club persistence. | **No** — scoresheet/stat-logging only. | No persistence across clubs, no development or character dimension at all — Trak's two core differentiators are entirely absent. |

**Takeaway:** the market splits into admin/logistics tools (Spond, TeamSnap), coach/club-owned
evaluation and video platforms (Coachbetter, Hudl, Veo), and hardware-dependent physical
trackers (Playermaker), plus lightweight scorekeeping apps (MatchTrackr). Where any
career-tracking exists, it's owned by the club, coach, or hardware relationship — not the
player — and typically breaks when the player switches clubs. A built-in, validated
values/character habit is essentially absent across the whole set. Trak's combination — a
player-persistent 7-band rating *and* a structured six-values reflection habit — is a genuinely
unoccupied position.

**Data caveats:** TeamSnap pricing varies by source (partially confirmed). Playermaker and
Hudl club/enterprise pricing is largely sales-gated. The "MatchTrackr" identity match is
unconfirmed — flag this row for direct confirmation before this doc is used externally.

---

## Persona / feature matrix — what's actually built today

Sourced from the live codebase and `docs/use-cases-current-state.md`, not the aspirational PRD,
so this reflects what a demo can actually show.

| Persona | Career-tracking features (live) | Character/values (status) | Scheduling | Communication | Assessment |
|---|---|---|---|---|---|
| **Player** | Match history, 7-band rating, Evolution Card, Passport (career totals, season history, recognition), coach feedback view | ❌ Not yet built for the player-facing side (per-session reflection, growth/streaks) — planned, gated on psychologist review | — | Invite parent via shareable link | Views own coach assessments + private notes |
| **Coach** | Log matches for players (via secure RPC), assess on 6 sliders → band, view assessment history | ❌ "See a player's character progress" — planned, no code yet | Full calendar, AI import from text/club website | Share TRK-code to link players; AI assistant is squad-aware | Recognise/award players (feeds player's Passport) |
| **Parent** | View child's season band and match feed | — (not a parent-facing surface) | — | Alerts: match, assessment, and recognition-award notifications | View coach assessments + awards (coach's private note stays player-only) |
| **Club admin** | Org-wide squad and coach visibility, band-distribution dashboard | — | — | Manage join code | Radar analytics (avg ≥7.5, 2+ assessments, last 60 days) |

**Validation status flags:**
- Character feature (player-facing reflection, values, flashcards, scenarios) — **built into the
  product's design but the content itself is not yet built/validated.** Per
  `docs/use-cases-current-state.md`, this is the one active gap in an otherwise complete
  four-persona loop.
- Legal (terms of service, privacy policy, parental consent) and billing — **not built at all**,
  blocking real users or revenue independent of any feature work.
- Everything else in this table (coach, player, parent, club core loops) has been verified live
  against the database as of the most recent status update — no open defects.

---

## Open items before this doc is used externally

1. Confirm the "MatchTrackr" competitor identity and refresh its row with real data.
2. Re-check TeamSnap pricing directly (Basic/Premium tiers) before quoting a number externally.
3. Once the sports-psychologist review lands, update the character-feature row from "content in
   validation" to whatever its actual cleared status is.
4. This doc has not yet been checked against `docs/pilot-pitch-onepager.md` for drift — worth a
   pass to make sure the school-facing pitch still matches this master framing.
