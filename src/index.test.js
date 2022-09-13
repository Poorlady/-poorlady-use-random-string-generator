import { renderHook } from '@testing-library/react-hooks'
import { UseRandomString } from './index'

describe('test custom hooks UseRandomString', () => {
  test('hooks must return object with text and isLoading props', () => {
    const { result } = renderHook(() => UseRandomString())

    expect(result.current).toHaveProperty('text')
    expect(result.current).toHaveProperty('isLoading')
  })

  test('hooks must return isLoading true on first load', () => {
    const { result } = renderHook(() => UseRandomString())

    expect(result.current.isLoading).toBe(true)
  })

  test('hooks must return random string on fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => UseRandomString())

    await waitForNextUpdate()
    expect(typeof result.current.text).toBe('string')
    expect(result.current.text).not.toBe('')
    expect(result.current.text).not.toBe(null)
    expect(result.current.isLoading).toBe(false)
  })
})
