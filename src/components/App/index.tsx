import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import { Counter } from '@pages/Counter'
import { HelloWorld } from '@pages/HelloWorld'
import { Quotes } from '@pages/Quotes'
import { Navbar } from './Navbar'

export function App() {
  return (
    <RecoilRoot>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<HelloWorld />}
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
    </RecoilRoot>
  )
}
