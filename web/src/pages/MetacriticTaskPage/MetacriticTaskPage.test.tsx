import { render } from '@redwoodjs/testing/web'

import MetacriticTaskPage from './MetacriticTaskPage'

describe('MetacriticTaskPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MetacriticTaskPage />)
    }).not.toThrow()
  })
})
