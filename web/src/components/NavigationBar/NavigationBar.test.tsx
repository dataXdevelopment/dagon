import { render } from '@redwoodjs/testing/web'

import NavigationBar from './NavigationBar'

describe('NavigationBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationBar />)
    }).not.toThrow()
  })
})
