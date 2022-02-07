import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { CreateTaskMutation, CreateTaskMutationVariables } from 'types/graphql'
const CREATE = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`
interface MetaCriticFormProps {
  name: string
  media: string
}

const MetacriticTaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MetaCriticFormProps>()
  const [createTask, { loading }] = useMutation<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >(CREATE, {
    onCompleted: (data) => {
      console.log(data)
      reset()
    },
    onError: (error) => {
      console.log(error)
    },
  })
  const onSubmit = async (data: MetaCriticFormProps) => {
    createTask({
      variables: {
        input: {
          status: 'PENDING',
          type: 'METACRITIC',
          data: {
            name: data.name,
            media: data.media,
          },
        },
      },
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel htmlFor="name" color="blue.800">
          Media Name
        </FormLabel>
        <Input
          id="name"
          type="text"
          {...register('name', { required: true })}
        />
        {errors.name ? (
          <FormErrorMessage>Media name is required</FormErrorMessage>
        ) : (
          <FormHelperText>What are we parsing for ?</FormHelperText>
        )}
      </FormControl>

      <FormControl as="fieldset" mt="4" isInvalid={errors.media ? true : false}>
        <FormLabel as="legend" color="blue.800">
          Media
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
          <FormHelperText>What kind of media is it ?</FormHelperText>
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

export default MetacriticTaskForm
