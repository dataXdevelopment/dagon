import { Container, Box, Heading, Text } from '@chakra-ui/react'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import TasksCell from 'src/components/TasksCell'

const TasksPage = () => {
  return (
    <MainLayout>
      <Container maxW="container.xl" pl="16" pt="8">
        <Box mt="4">
          <Heading color="blue.900" fontWeight="regular">
            Recent Tasks
          </Heading>
          <Box mt="8" maxW="2xl">
            <TasksCell />
          </Box>
        </Box>
      </Container>
    </MainLayout>
  )
}

export default TasksPage
