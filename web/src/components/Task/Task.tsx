import { Tr, Td } from '@chakra-ui/react'
import { toSentenceCase } from 'js-convert-case'
import { format as convertDate } from 'timeago.js'
import { Task as TaskType } from 'types/graphql'

const convertCase = (text: string) => toSentenceCase(text)
const Task = ({
  task,
}: {
  task: Pick<TaskType, 'type' | 'createdAt' | 'status'>
}) => {
  return (
    <Tr>
      <Td> {convertCase(task.type)}</Td>
      <Td> {convertCase(task.status)}</Td>
      <Td> {convertDate(new Date(task.createdAt))}</Td>
    </Tr>
  )
}

export default Task
