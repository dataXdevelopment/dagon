import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from '@chakra-ui/react'
import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { CreateMetacriticTaskInput } from 'types/graphql'

const CREATE = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
    }
  }
`
const TaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateMetacriticTaskInput>()
  const [createTask, { loading }] = useMutation(CREATE, {
    onCompleted: (data) => {
      console.log(data)
      reset()
    },
    onError: (error) => {
      console.log(error)
    },
  })
  const onSubmit = async (data: CreateMetacriticTaskInput) => {
    createTask({
      variables: {
        input: { ...data },
      },
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel htmlFor="taskName" color="blue.800">
          Task name
        </FormLabel>
        <Input
          id="taskName"
          type="text"
          {...register('name', { required: true })}
        />
        {errors.name ? (
          <FormErrorMessage>Task name is required</FormErrorMessage>
        ) : (
          <FormHelperText>To help identify your task</FormHelperText>
        )}
      </FormControl>

      <FormControl as="fieldset" mt="4" isInvalid={errors.media ? true : false}>
        <FormLabel as="legend" color="blue.800">
          Task Media
        </FormLabel>
        <RadioGroup>
          <HStack spacing="6">
            <Radio
              value="GAME"
              colorScheme="blue"
              {...register('media', { required: true })}
            >
              Game
            </Radio>
            <Radio
              value="MOVIE"
              colorScheme="blue"
              {...register('media', { required: true })}
              isDisabled
            >
              Movie
            </Radio>
            <Radio
              value="TV"
              colorScheme="blue"
              {...register('media', { required: true })}
              isDisabled
            >
              TV Show
            </Radio>
          </HStack>
        </RadioGroup>
        {errors.media ? (
          <FormErrorMessage>Please select a medium</FormErrorMessage>
        ) : (
          <FormHelperText>Type of media being parsed</FormHelperText>
        )}
      </FormControl>
      <Button
        type="submit"
        mt="6"
        isLoading={loading}
        loadingText="Submitting"
        colorScheme="blue"
      >
        Start Parsing
      </Button>
    </form>
  )
}

export default TaskForm
