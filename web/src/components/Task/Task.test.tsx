import { Table, Tbody } from '@chakra-ui/react'
import { render, screen } from '@redwoodjs/testing/web'
import { TaskStatus, EngineTypes } from 'types/graphql'

import Task from './Task'

const TableWrapper = ({ children }) => (
  <Table variant="simple">
    <Tbody>{children}</Tbody>
  </Table>
)
describe('Task', () => {
  it('renders successfully', () => {
    const TASK = {
      id: 1,
      name: 'String',
      status: 'PENDING' as TaskStatus,
      engine: 'TWITTER' as EngineTypes,
      createdAt: new Date(2022, 1, 5, 19, 30).toString(),
    }
    render(
      <TableWrapper>
        <Task task={TASK} />
      </TableWrapper>
    )
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('Pending')).toBeInTheDocument()
    expect(screen.getByText(/ago/)).toBeInTheDocument()
  })
  it('renders download button when task completed', () => {
    const TASK = {
      id: 1,
      name: 'String',
      status: 'COMPLETED' as TaskStatus,
      engine: 'TWITTER' as EngineTypes,
      createdAt: new Date(2022, 1, 5, 19, 30).toString(),
      result: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    }
    render(
      <TableWrapper>
        <Task task={TASK} />
      </TableWrapper>
    )
    expect(screen.getByLabelText('download-result')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', TASK.result)
  })
})
