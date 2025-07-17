import { describe, it as test, expect } from 'vitest'
import { formatLabel } from './formatLabel'

describe('formatLabel function', () => {
  test('capitalizes single words', () => {
    expect(formatLabel('dashboard')).toBe('Dashboard')
  })

  test('replaces dashes with spaces and capitalizes', () => {
    expect(formatLabel('quiz-list')).toBe('Quiz List')
  })

  test('replaces underscores with spaces and capitalizes', () => {
    expect(formatLabel('user_profile')).toBe('User Profile')
  })

  test('handles mixed dashes and underscores', () => {
    expect(formatLabel('user-profile_settings')).toBe('User Profile Settings')
  })

  test('capitalizes each word correctly', () => {
    expect(formatLabel('edit-quiz-title')).toBe('Edit Quiz Title')
  })

  test('returns empty string when input is empty', () => {
    expect(formatLabel('')).toBe('')
  })
})
