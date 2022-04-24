import { atom, useRecoilState } from 'recoil'

const counterState = atom({
  key: 'counter',
  default: 0,
})

export function useCounter() {
  const [counter, setCounter] = useRecoilState(counterState)
  return {
    counter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1),
  }
}
