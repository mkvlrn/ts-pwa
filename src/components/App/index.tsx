import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

import { Counter } from '@pages/Counter'
import { Home } from '@pages/Home'
import { Quotes } from '@pages/Quotes'
import { Navbar } from './Navbar'

export function App() {
  return (
    <RecoilRoot>
      <CssBaseline />

      <Router>
        <Navbar />
        <Container>
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
        </Container>
      </Router>
    </RecoilRoot>
  )
}
