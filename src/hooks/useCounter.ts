import { useRecoilState } from 'recoil'

import { counter } from '@state/counter'

export function useCounter() {
  const [count, setCount] = useRecoilState(counter)
  return {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  }
}
