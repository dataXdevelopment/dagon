import type { TasksQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Box, Button, Flex, Grid, HStack, Spacer, Text } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
export const QUERY = gql`
  query TasksQuery {
    tasks {
      id
      name
      status
      type
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <Box>
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      minW="full"
      bg="blue.100"
      py="4"
      px="6"
    >
      <Text fontWeight="semibold" fontSize="18" color="blue.700">
        Engine
      </Text>
      <Text fontWeight="semibold" fontSize="18" color="blue.700">
        Status
      </Text>
      <Text fontWeight="semibold" fontSize="18" color="blue.700">
        Task Name
      </Text>
      <Text fontWeight="semibold" fontSize="18" color="blue.700">
        Date
      </Text>
    </Grid>
    <Text textAlign="center" py="8" fontSize="24" color="blue.700">
      No Recent Tasks
    </Text>
  </Box>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ tasks }: CellSuccessProps<TasksQuery>) => {
  return (
    <Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        minW="full"
        bg="blue.100"
        py="4"
        px="6"
      >
        <Text fontWeight="semibold" fontSize="18" color="blue.700">
          Engine
        </Text>
        <Text fontWeight="semibold" fontSize="18" color="blue.700">
          Task Name
        </Text>
        <Text fontWeight="semibold" fontSize="18" color="blue.700">
          Status
        </Text>
        <Text fontWeight="semibold" fontSize="18" color="blue.700">
          Date
        </Text>
      </Grid>

      {tasks.map((item) => {
        return (
          <Grid
            key={item.id}
            minW="full"
            templateColumns="repeat(4, 1fr)"
            gap={4}
            justify="space-between"
            py="6"
            px="6"
            borderBottom="1px solid"
            borderBottomColor="blue.100"
            borderRight="1px solid"
            borderRightColor="blue.100"
            borderLeft="1px solid"
            borderLeftColor="blue.100"
          >
            <Text>{item.type}</Text>
            <Text>{item.name}</Text>
            <HStack>
              {item.status === 'COMPLETED' ? (
                <Button
                  leftIcon={<DownloadIcon />}
                  size="xs"
                  colorScheme="blue"
                  borderRadius="full"
                >
                  {item.status}
                </Button>
              ) : (
                <Text>{item.status}</Text>
              )}
            </HStack>
            <Text>{new Date(item.createdAt).toUTCString()}</Text>
          </Grid>
        )
      })}
    </Box>

    // <ul>
    // </ul>
  )
}
