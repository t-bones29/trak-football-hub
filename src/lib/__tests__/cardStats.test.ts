import { describe, it, expect } from 'vitest'
import { deriveCardStats, type CoachInputs } from '../cardStats'

const inputs: CoachInputs = {
  workRate: 7,
  tactical: 6,
  attitude: 8,
  technical: 9,
  physical: 5,
  coachability: 7,
}

describe('deriveCardStats', () => {
  it('maps attitude directly to consistency', () => {
    expect(deriveCardStats(inputs).consistency).toBe(8)
  })

  it('maps technical directly to impact', () => {
    expect(deriveCardStats(inputs).impact).toBe(9)
  })

  it('maps workRate directly to workrate', () => {
    expect(deriveCardStats(inputs).workrate).toBe(7)
  })

  it('averages technical and tactical into technique', () => {
    expect(deriveCardStats(inputs).technique).toBe(7.5) // (9 + 6) / 2
  })

  it('averages attitude and coachability into spirit', () => {
    expect(deriveCardStats(inputs).spirit).toBe(7.5) // (8 + 7) / 2
  })

  it('rounds every stat to one decimal place', () => {
    const uneven: CoachInputs = {
      workRate: 6.33,
      tactical: 7.77,
      attitude: 5.05,
      technical: 8.88,
      physical: 4.44,
      coachability: 9.99,
    }
    const stats = deriveCardStats(uneven)
    for (const value of Object.values(stats)) {
      expect(value).toBe(Math.round(value * 10) / 10)
    }
  })

  it('does not use physical at all — it is coach-only, not a Card stat', () => {
    const withLowPhysical = deriveCardStats({ ...inputs, physical: 0 })
    const withHighPhysical = deriveCardStats({ ...inputs, physical: 10 })
    expect(withLowPhysical).toEqual(withHighPhysical)
  })

  it('handles all-zero input', () => {
    const zero: CoachInputs = { workRate: 0, tactical: 0, attitude: 0, technical: 0, physical: 0, coachability: 0 }
    expect(deriveCardStats(zero)).toEqual({ consistency: 0, impact: 0, workrate: 0, technique: 0, spirit: 0 })
  })

  it('handles all-max input', () => {
    const max: CoachInputs = { workRate: 10, tactical: 10, attitude: 10, technical: 10, physical: 10, coachability: 10 }
    expect(deriveCardStats(max)).toEqual({ consistency: 10, impact: 10, workrate: 10, technique: 10, spirit: 10 })
  })
})
