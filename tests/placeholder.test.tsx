import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { App } from '@components/App'

describe('placeholder', () => {
  test('document loads', () => {
    render(<App />)

    const text = screen.getByText('react')
    expect(text).toBeInTheDocument()
  })
})
