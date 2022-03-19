import { useCounter } from '@hooks/useCounter'
import * as S from './style'

export function Counter() {
  const { count, increment, decrement } = useCounter()

  return (
    <S.Counter>
      <div>count: {count}</div>
      <button
        type='button'
        onClick={increment}
      >
        +
      </button>
      <button
        type='button'
        onClick={decrement}
      >
        -
      </button>
    </S.Counter>
  )
}
