import { describe, it, expect } from 'vitest'
import { mapPositionToRatingKey, defaultAttendanceSet } from '../match-log'

describe('mapPositionToRatingKey', () => {
  it('maps goalkeeper variants to gk', () => {
    expect(mapPositionToRatingKey('Goalkeeper')).toBe('gk')
    expect(mapPositionToRatingKey('GK')).toBe('gk')
    expect(mapPositionToRatingKey('gk')).toBe('gk')
  })

  it('maps defender variants to def', () => {
    expect(mapPositionToRatingKey('Defender')).toBe('def')
    expect(mapPositionToRatingKey('DEF')).toBe('def')
    expect(mapPositionToRatingKey('CB')).toBe('def')
    expect(mapPositionToRatingKey('LB')).toBe('def')
    expect(mapPositionToRatingKey('RB')).toBe('def')
  })

  it('maps attacker variants to att', () => {
    expect(mapPositionToRatingKey('Attacker')).toBe('att')
    expect(mapPositionToRatingKey('ATT')).toBe('att')
    expect(mapPositionToRatingKey('CF')).toBe('att')
    expect(mapPositionToRatingKey('ST')).toBe('att')
    expect(mapPositionToRatingKey('LW')).toBe('att')
    expect(mapPositionToRatingKey('RW')).toBe('att')
  })

  it('defaults everything else to mid, including midfielder variants', () => {
    expect(mapPositionToRatingKey('Midfielder')).toBe('mid')
    expect(mapPositionToRatingKey('CM')).toBe('mid')
    expect(mapPositionToRatingKey('unknown position')).toBe('mid')
  })

  it('defaults null, undefined and empty string to mid rather than throwing', () => {
    expect(mapPositionToRatingKey(null)).toBe('mid')
    expect(mapPositionToRatingKey(undefined)).toBe('mid')
    expect(mapPositionToRatingKey('')).toBe('mid')
  })

  it('is case-insensitive', () => {
    expect(mapPositionToRatingKey('goalkeeper')).toBe('gk')
    expect(mapPositionToRatingKey('DEFENDER')).toBe('def')
    expect(mapPositionToRatingKey('cb')).toBe('def')
  })
})

describe('defaultAttendanceSet', () => {
  it('includes every player in the squad', () => {
    const squad = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
    const result = defaultAttendanceSet(squad)
    expect(result.size).toBe(3)
    expect(result.has('a')).toBe(true)
    expect(result.has('b')).toBe(true)
    expect(result.has('c')).toBe(true)
  })

  it('returns an empty set for an empty squad', () => {
    expect(defaultAttendanceSet([]).size).toBe(0)
  })
})
