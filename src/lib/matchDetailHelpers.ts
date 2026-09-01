import { type Band } from '@/lib/clubMock'
import { scoreToBand } from '@/lib/rating-engine'

export const BAND_COLORS: Record<Band, string> = {
  Exceptional: '#C8F25A',
  Standout: '#86efac',
  Good: '#4ade80',
  Steady: '#60a5fa',
  Mixed: '#fb923c',
  Developing: '#a78bfa',
  Difficult: 'rgba(255,255,255,0.4)',
}

// Self-rating mapping
export const SELF_RATING_BAND: Record<string, Band> = {
  excellent: 'Exceptional',
  good: 'Good',
  average: 'Steady',
  poor: 'Mixed',
}

// Map a 1–10 coach category score to a band word.
// Delegates to the canonical scoreToBand rather than a separate threshold
// ladder — this used to have its own (drifted) thresholds, so the same
// score could show as "Mixed" on the Evolution Card but "Developing" here.
export function categoryScoreToBand(score: number): Band {
  const band = scoreToBand(score)
  return (band.charAt(0).toUpperCase() + band.slice(1)) as Band
}
