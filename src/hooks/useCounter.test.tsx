import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import { RecoilRoot } from 'recoil'

import { useCounter } from './useCounter'

afterAll(cleanup)

describe('useCounter', () => {
  test('increment and decrement', () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: ({ children }) => <RecoilRoot>{children} </RecoilRoot>,
    })

    expect(result.current.counter).toBe(0)

    act(() => {
      result.current.increment()
    })
    expect(result.current.counter).toBe(1)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.counter).toBe(0)
  })
})
