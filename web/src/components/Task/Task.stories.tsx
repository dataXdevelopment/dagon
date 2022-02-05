import { Table, Tbody } from '@chakra-ui/react'
import { TaskStatus, TaskTypes } from 'types/graphql'
import Task from './Task'
const TASK = {
  id: 1,
  name: 'String',
  status: 'PENDING' as TaskStatus,
  type: 'TWITTER' as TaskTypes,
  createdAt: new Date(2022, 1, 5, 19, 30).toString(),
}
export const generated = () => {
  return (
    <Table variant="simple">
      <Tbody>
        <Task task={TASK} />
      </Tbody>
    </Table>
  )
}

export default { title: 'Components/Task' }
