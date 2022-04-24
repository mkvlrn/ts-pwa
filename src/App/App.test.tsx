import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { App } from '.'

describe('App component', () => {
  test('document loads', () => {
    render(<App />)

    const text = screen.getByText('react pwa')
    expect(text).toBeInTheDocument()
  })
})
