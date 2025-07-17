import { describe, expect, it as test } from 'vitest'
import { classNames } from './classNames'

describe('classNames function', () => {
  test('returns only the base class if no mods or additional classes', () => {
    expect(classNames('btn', {}, [])).toBe('btn')
  })

  test('includes additional classes', () => {
    expect(classNames('btn', {}, ['primary', 'rounded'])).toBe('btn primary rounded')
  })

  test('includes mods with true value only', () => {
    expect(classNames('btn', { active: true, disabled: false, loading: 'yes' }, [])).toBe(
      'btn active'
    )
  })

  test('includes all: base, additional, and valid mods', () => {
    expect(classNames('btn', { active: true, disabled: false }, ['primary'])).toBe(
      'btn primary active'
    )
  })

  test('handles empty inputs', () => {
    expect(classNames('', {}, [])).toBe('')
  })
})
