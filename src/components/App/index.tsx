import { Counter } from '@components/Counter'
import { RecoilRoot } from 'recoil'
import { GlobalStyle } from './style'

export function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <p>react pwa</p>
      <Counter />
    </RecoilRoot>
  )
}
