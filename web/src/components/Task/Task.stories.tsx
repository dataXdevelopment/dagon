import { Table, Tbody } from '@chakra-ui/react'
import { TaskStatus, EngineTypes } from 'types/graphql'
import Task from './Task'

export const pending = () => {
  const TASK = {
    id: 1,
    name: 'String',
    status: 'PENDING' as TaskStatus,
    engine: 'TWITTER' as EngineTypes,
    createdAt: new Date(2022, 1, 5, 19, 30).toString(),
  }
  return (
    <Table variant="simple">
      <Tbody>
        <Task task={TASK} />
      </Tbody>
    </Table>
  )
}
export const completed = () => {
  const TASK = {
    id: 1,
    name: 'String',
    status: 'COMPLETED' as TaskStatus,
    engine: 'TWITTER' as EngineTypes,
    createdAt: new Date(2022, 1, 5, 19, 30).toString(),
    result: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  }
  return (
    <Table variant="simple">
      <Tbody>
        <Task task={TASK} />
      </Tbody>
    </Table>
  )
}

export default { title: 'Components/Task' }
