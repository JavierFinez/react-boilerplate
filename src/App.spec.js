import React from 'react'
import App from './App'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
