import { DownloadIcon } from '@chakra-ui/icons'
import { Tr, Td, Badge, IconButton, Link } from '@chakra-ui/react'
import { toSentenceCase } from 'js-convert-case'
import { format as convertDate } from 'timeago.js'
import { Task as TaskType, TaskStatus } from 'types/graphql'

const convertCase = (text: string) => toSentenceCase(text)
const TaskStatusBadge = ({ taskStatus }: { taskStatus: TaskStatus }) => {
  const colorMap = {
    COMPLETED: 'green',
    PENDING: 'grey',
    FAILED: 'red',
    RUNNING: 'blue',
  }
  return (
    <Badge colorScheme={colorMap[taskStatus]}>{convertCase(taskStatus)}</Badge>
  )
}
const Task = ({
  task,
}: {
  task: Pick<TaskType, 'engine' | 'createdAt' | 'status' | 'result'>
}) => {
  return (
    <Tr>
      <Td py="6"> {convertCase(task.engine)}</Td>
      <Td>
        <TaskStatusBadge taskStatus={task.status} />
      </Td>
      <Td> {convertDate(new Date(task.createdAt))}</Td>
      <Td isNumeric>
        {task.status === 'COMPLETED' && (
          <Link href={task.result} isExternal>
            <IconButton
              aria-label="download-result"
              size="sm"
              colorScheme="gray"
              variant="ghost"
              icon={<DownloadIcon />}
            />
          </Link>
        )}
      </Td>
    </Tr>
  )
}

export default Task
