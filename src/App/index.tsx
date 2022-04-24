import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Shell } from '@components/Shell'

import { Counter } from '@pages/Counter'
import { Home } from '@pages/Home'
import { Quotes } from '@pages/Quotes'

export function App() {
  return (
    <RecoilRoot>
      <Shell>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/counter'
              element={<Counter />}
            />
            <Route
              path='quotes'
              element={<Quotes />}
            />
          </Routes>
        </Router>
      </Shell>
    </RecoilRoot>
  )
}
