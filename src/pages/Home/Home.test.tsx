import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Home } from '.'

describe('Home', () => {
  test('should render', () => {
    render(<Home />)

    const text = screen.getByText('react pwa')
    expect(text).toBeInTheDocument()
  })
})
