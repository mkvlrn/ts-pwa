import { StrictMode } from 'react'
import { render } from 'react-dom'

import { App } from './App'
import { GlobalStyle } from './global.style'

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
