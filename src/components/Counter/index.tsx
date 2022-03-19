import { useCounter } from '@hooks/useCounter'
import * as S from './style'

export function Counter() {
  const { counter, increment, decrement } = useCounter()

  return (
    <S.Counter>
      <p>counter: {counter}</p>
      <S.Button onClick={decrement}>-</S.Button>
      <S.Button onClick={increment}>+</S.Button>
    </S.Counter>
  )
}
