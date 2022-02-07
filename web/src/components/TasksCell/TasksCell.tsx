import type { TasksQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import {
  Box,
  Skeleton,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Task from 'src/components/Task/Task'
export const QUERY = gql`
  query TasksQuery {
    tasks {
      id
      status
      engine
      createdAt
    }
  }
`

export const Loading = () => (
  <Stack>
    <Skeleton height="10" />
    <Skeleton height="10" />
    <Skeleton height="10" />
    <Skeleton height="10" />
  </Stack>
)

export const Empty = () => (
  <Box>
    <Text textAlign="center" py="8" fontSize="24" color="gray.600">
      No Recent Tasks
    </Text>
  </Box>
)

export const Failure = ({ error }: CellFailureProps) => (
  <Box>
    <Text textAlign="center" py="8" fontSize="24" color="red.500">
      Error: {error.message}
    </Text>
  </Box>
)

export const Success = ({ tasks }: CellSuccessProps<TasksQuery>) => {
  return (
    <Table variant="simple" colorScheme="gray">
      <TableCaption>View more</TableCaption>
      <Thead>
        <Tr>
          <Th>Engine</Th>
          <Th>Status</Th>
          <Th>Submitted</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {tasks.map((task, key) => (
          <Task key={key} task={task} />
        ))}
      </Tbody>
    </Table>
  )
}
