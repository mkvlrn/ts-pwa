import { StrictMode } from 'react'
import { render } from 'react-dom'

import { App } from './App'
import './assets/global-style.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
