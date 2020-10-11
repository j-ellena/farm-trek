import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders title', () => {
  const { getByText } = render(<App />)
  const titleElement = getByText(/^Farm Trek$/i) // full string match, ignore case

  expect(titleElement).toBeInTheDocument()
})
