import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Counter } from '@components/Counter'
import { HelloWorld } from '@components/HelloWorld'
import { GlobalStyle } from './style'

export function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<HelloWorld />}
          />
          <Route
            path='/counter'
            element={<Counter />}
          />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}
