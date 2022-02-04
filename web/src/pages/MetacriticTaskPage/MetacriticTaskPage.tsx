import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import MetacriticTaskForm from 'src/components/MetacriticTaskForm/MetacriticTaskForm'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const MetacriticTaskPage = () => {
  return (
    <MainLayout>
      <Container maxW="container.xl" pl="16" pt="8">
        <Box mt="4">
          <Heading color="blue.900" fontWeight="regular">
            Metacritic
          </Heading>
          <Text fontWeight="light" color="blue.900">
            Parse user reviews across video games
          </Text>
          <Box mt="8" maxW="sm">
            <MetacriticTaskForm />
          </Box>
        </Box>
      </Container>
    </MainLayout>
  )
}

export default MetacriticTaskPage
