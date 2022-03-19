import { RecoilRoot } from 'recoil'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Counter } from '.'

beforeEach(() => {
  render(
    <RecoilRoot>
      <Counter />
    </RecoilRoot>,
  )
})

describe('Counter component', () => {
  test('component loads', () => {
    const text = screen.getByText('counter: 0')
    const incrementButton = screen.getByText('+')
    const decrementButton = screen.getByText('-')

    expect(text).toBeInTheDocument()
    expect(incrementButton).toBeInTheDocument()
    expect(decrementButton).toBeInTheDocument()
  })

  test('increment button increments counter', () => {
    fireEvent.click(screen.getByText('+'))

    const text = screen.getByText('counter: 1')
    expect(text).toBeInTheDocument()
  })

  test('decrement button decrements counter', () => {
    fireEvent.click(screen.getByText('-'))

    const text = screen.getByText('counter: -1')
    expect(text).toBeInTheDocument()
  })
})
