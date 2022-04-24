import { useCounter } from '@state/counter'

export function Counter() {
  const { counter, increment, decrement } = useCounter()

  return (
    <div>
      <p>counter: {counter}</p>
      <button
        type='button'
        onClick={decrement}
      >
        -
      </button>
      <button
        type='button'
        onClick={increment}
      >
        +
      </button>
    </div>
  )
}
