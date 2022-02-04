import { render } from '@redwoodjs/testing/web'

import Task from './Task'
const TASK = {
  id: '1',
}
describe('Task', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Task task={TASK} />)
    }).not.toThrow()
  })
})
