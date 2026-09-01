import { describe, it, expect } from 'vitest'
import { categoryScoreToBand, BAND_COLORS, SELF_RATING_BAND } from '../matchDetailHelpers'
import { scoreToBand } from '../rating-engine'

describe('categoryScoreToBand', () => {
  it('matches the canonical scoreToBand band, capitalized, for every threshold', () => {
    // Guards against re-drifting into a second, hand-maintained threshold
    // ladder — this function used to have its own thresholds that disagreed
    // with scoreToBand for scores between 2 and 6 (e.g. 4.5 showed as
    // "Mixed" on the Evolution Card but "Developing" on the match detail
    // screen for the identical number).
    for (let score = 0; score <= 10; score += 0.5) {
      const canonical = scoreToBand(score)
      const expected = canonical.charAt(0).toUpperCase() + canonical.slice(1)
      expect(categoryScoreToBand(score)).toBe(expected)
    }
  })

  it('specifically covers the range that previously disagreed (2 to 6)', () => {
    expect(categoryScoreToBand(2)).toBe('Developing')
    expect(categoryScoreToBand(3)).toBe('Developing')
    expect(categoryScoreToBand(4)).toBe('Mixed')
    expect(categoryScoreToBand(4.5)).toBe('Mixed')
    expect(categoryScoreToBand(5.9)).toBe('Mixed')
    expect(categoryScoreToBand(6)).toBe('Steady')
  })

  it('every returned band has a corresponding color', () => {
    for (let score = 0; score <= 10; score += 1) {
      const band = categoryScoreToBand(score)
      expect(BAND_COLORS[band]).toBeTruthy()
    }
  })
})

describe('SELF_RATING_BAND', () => {
  it('covers all four self-rating options', () => {
    expect(Object.keys(SELF_RATING_BAND).sort()).toEqual(['average', 'excellent', 'good', 'poor'])
  })

  it('maps each self-rating to a valid band with a color', () => {
    for (const band of Object.values(SELF_RATING_BAND)) {
      expect(BAND_COLORS[band]).toBeTruthy()
    }
  })
})
