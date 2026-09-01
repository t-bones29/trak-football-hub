import type { Position } from './types'

/**
 * Coaches enter a squad player's position as free-ish text ("Goalkeeper", "GK",
 * "CB", "Defender", ...) via a pill selector. The rating engine only knows four
 * keys. A silently wrong mapping here produces a silently wrong rating — the
 * exact failure this product exists to prevent — so this is isolated and tested
 * rather than left inline.
 */
export function mapPositionToRatingKey(position: string | null | undefined): Position {
  const posRaw = (position || '').toLowerCase()
  if (posRaw.includes('goalkeeper') || posRaw === 'gk') return 'gk'
  if (posRaw.includes('defender') || posRaw === 'def' || posRaw === 'cb' || posRaw === 'lb' || posRaw === 'rb') return 'def'
  if (posRaw.includes('attacker') || posRaw === 'att' || posRaw === 'cf' || posRaw === 'st' || posRaw === 'lw' || posRaw === 'rw') return 'att'
  return 'mid'
}

/**
 * Most players who show up to a match play in it. Defaulting the attendance
 * selection to the whole squad means a coach deselects the rare absentee
 * instead of tapping every player who actually attended.
 */
export function defaultAttendanceSet(squad: { id: string }[]): Set<string> {
  return new Set(squad.map(p => p.id))
}
