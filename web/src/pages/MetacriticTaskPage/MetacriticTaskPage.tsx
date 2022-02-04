import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import MetacriticTaskForm from 'src/components/MetacriticTaskForm/MetacriticTaskForm'

const MetacriticTaskPage = () => {
  return (
    <Container maxW="container.xl">
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
  )
}

export default MetacriticTaskPage
