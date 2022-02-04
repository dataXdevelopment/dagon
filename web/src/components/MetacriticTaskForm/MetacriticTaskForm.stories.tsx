import { Box } from '@chakra-ui/react'
import MetacriticTaskForm from './MetacriticTaskForm'

export const generated = () => {
  mockGraphQLMutation('CreateMetacriticTaskMutation', (variables, { ctx }) => {
    const id = Math.floor(Math.random() * 1000)
    ctx.delay(1000)
    return {
      createMetacriticTask: {
        id,
        name: variables.input.name,
        media: variables.input.media,
      },
    }
  })
  return (
    <Box m="4">
      <MetacriticTaskForm />
    </Box>
  )
}

export default { title: 'Components/MetacriticTaskForm' }
