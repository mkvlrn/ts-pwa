import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { GlobalStyle } from './global.style'
import './tailwind.css'

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
