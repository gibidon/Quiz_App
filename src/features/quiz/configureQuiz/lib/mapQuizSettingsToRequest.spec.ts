import { describe, expect, it as test } from 'vitest'
import { mapQuizSettingsToRequest } from './mapQuizSettingsToRequest'

describe('mapQuizSettingsToRequest function', () => {
  test('maps all fields correctly', () => {
    const input = {
      complexity: [1, 2],
      skillIDs: [10, 20],
      limit: 5,
      mode: 'NEW', // must be ignored
    }
    //@ts-expect-error wrong input intentionally
    const result = mapQuizSettingsToRequest(input)

    expect(result).toEqual({
      complexity: [1, 2],
      skills: ['10', '20'],
      limit: 5,
    })
  })

  test('handles missing optional fields', () => {
    const input = {}

    const result = mapQuizSettingsToRequest(input)

    expect(result).toEqual({
      skills: undefined,
      complexity: undefined,
      limit: undefined,
    })
  })

  test('handles skillIDs only', () => {
    const input = {
      skillIDs: [1, 2, 3],
    }

    const result = mapQuizSettingsToRequest(input)

    expect(result).toEqual({
      skills: ['1', '2', '3'],
      complexity: undefined,
      limit: undefined,
    })
  })
})
