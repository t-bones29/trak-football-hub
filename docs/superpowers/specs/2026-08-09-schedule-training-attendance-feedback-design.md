# Schedule → Training Plan → Push → Attendance → Feedback: journey design

Status: wireframe scope, not an implementation plan. No code changes are proposed by this doc.

## Context

Trak currently lets a coach schedule sessions (`CoachSchedule`, `CoachAddSession`) and mark
attendance themselves (`session_attendance` table, `CoachSessionDetail`). There is no
player-facing schedule at all — no `PlayerSchedule` page exists — and no mechanism for a session
to notify players, for a player to RSVP, or for a coach to leave session-level feedback a player
can see. This journey closes that loop.

## The flow

| Step | Actor | What happens | Screen status |
|---|---|---|---|
| 1. Build Training Plan | Coach | Selects/authors drills, objective, duration for a session | New — extends `CoachAddSession` |
| 2. Schedule it | Coach | Sets date/time/venue, attaches the plan | Existing — `CoachAddSession`/`CoachSchedule` |
| 3. Push to squad | System | In-app alert + feed item to every linked player | New — mirrors the existing `ParentAlerts` pattern |
| 4. See it & RSVP | Player | Views session on a new Schedule surface, taps Going/Can't make it | New — `PlayerSchedule` doesn't exist yet |
| 5. Run session | Coach | Sees RSVPs pre-filling attendance | Existing, modified — `CoachSessionDetail` |
| 6. Confirm attendance | Coach | Marks final present/absent (editable from RSVP) | Existing — `CoachSessionDetail` |
| 7. Leave feedback | Coach | Session-level note/feedback the player can see | New — no session-feedback-to-player surface exists today |

**Attendance model for this pass:** a single state per session (approach A) — the coach's mark is
the record of truth; RSVP pre-fills it but doesn't create a separate "reliability" data point.
Tracking RSVP-vs-actual as two distinct fields was considered (approach B) and deliberately
deferred — it's a natural enhancement once this simpler loop is validated, not a v1 requirement.

**Push channel:** in-app notification/feed item only, matching how `ParentAlerts` already works.
Native mobile push (APNs/FCM) is out of scope — noted as a future infra dependency, not designed
here.

## Explicitly out of scope for this journey

The Football Manager-style ideas raised alongside this request — squad prep, competition groups,
seating/review of a championship, Discord-style chat groups — are a **separate future
workstream**, not part of this flow. Noted here so they aren't lost, not designed.

## Wireframe set

Four screens carry the actual design work; the two "existing, modified" rows above are minor
field/state additions, not worth a full mockup:

1. **Coach — Training Plan builder**: pick/author drills, objective, duration, attach to a session
2. **Player — Schedule**: list of upcoming sessions + a detail view with the RSVP action
3. **Coach — Session run view**: RSVP states shown, attendance pre-filled, editable
4. **Player — Session feedback**: where the coach's post-session note appears to the player

These four are handed to the `ux-ui-advisor` agent (`.claude/agents/ux-ui-advisor.md`) to produce
as rendered HTML mockups, grounded in Trak's existing design tokens (dark theme, `BANDS`,
`MobileShell` 430px width).

## Non-goals

- No database schema is being written by this doc — that's implementation work, deferred until
  the wireframes are validated.
- No native push notification infrastructure.
- No RSVP-vs-actual reliability tracking (approach B).
- No squad-prep/competition-group/chat features.
