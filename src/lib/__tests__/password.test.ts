import { describe, it, expect } from 'vitest'
import { validatePassword, PASSWORD_MIN } from '../password'

describe('validatePassword', () => {
  it('accepts a password meeting every requirement', () => {
    expect(validatePassword('Trak2026!')).toBeNull()
  })

  it(`rejects a password shorter than ${PASSWORD_MIN} characters`, () => {
    expect(validatePassword('Ab1!')).toBe(`Password must be at least ${PASSWORD_MIN} characters`)
  })

  it('rejects a password missing a lowercase letter', () => {
    expect(validatePassword('TRAK2026!')).toMatch(/lowercase letter/)
  })

  it('rejects a password missing an uppercase letter', () => {
    expect(validatePassword('trak2026!')).toMatch(/uppercase letter/)
  })

  it('rejects a password missing a number', () => {
    expect(validatePassword('TrakFootball!')).toMatch(/number/)
  })

  it('rejects a password missing a symbol', () => {
    expect(validatePassword('Trak2026')).toMatch(/symbol/)
  })

  it('lists every missing requirement together, not just the first one found', () => {
    const message = validatePassword('trakfootball')
    expect(message).toMatch(/uppercase letter/)
    expect(message).toMatch(/number/)
    expect(message).toMatch(/symbol/)
  })

  it('joins multiple missing requirements with commas and a final "and"', () => {
    // missing uppercase, number, symbol — three items
    expect(validatePassword('trakfootball')).toBe(
      'Password needs an uppercase letter, a number and a symbol (e.g. !)'
    )
  })

  it('phrases a single missing requirement without "and"', () => {
    // meets everything except a symbol
    expect(validatePassword('Trak2026')).toBe('Password needs a symbol (e.g. !)')
  })

  it(`length check takes priority over character-class checks`, () => {
    // too short AND missing every character class — should report length only
    expect(validatePassword('ab')).toBe(`Password must be at least ${PASSWORD_MIN} characters`)
  })

  it('accepts a password exactly at the minimum length', () => {
    // 8 chars, one of each required class
    expect(validatePassword('Abcdef1!')).toBeNull()
  })
})
