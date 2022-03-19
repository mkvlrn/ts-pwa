import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HelloWorld } from '.'

describe('Hello World', () => {
  test('should render', () => {
    render(<HelloWorld />)

    const text = screen.getByText('react pwa')
    expect(text).toBeInTheDocument()
  })
})
