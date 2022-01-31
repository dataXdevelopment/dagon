import { render } from '@redwoodjs/testing/web'

import MetacriticTaskForm from './MetacriticTaskForm'

describe('MetacriticTaskForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MetacriticTaskForm />)
    }).not.toThrow()
  })
})
