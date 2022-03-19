import { useRecoilState } from 'recoil'

import { counterState } from '@state/counter'

export function useCounter() {
  const [counter, setCounter] = useRecoilState(counterState)
  return {
    counter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1),
  }
}
