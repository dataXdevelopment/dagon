import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup,
  Button,
} from '@chakra-ui/react'
import { useForm } from '@redwoodjs/forms'

enum TaskMedia {
  MOVIE = 'movie',
  TV_SHOW = 'tv_show',
  GAME = 'game',
}
interface FormInput {
  taskName: string
  taskMedia: TaskMedia
}

const MetacriticTaskForm = () => {
  const { register, handleSubmit } = useForm<FormInput>()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="taskName">Task name</FormLabel>
        <Input id="taskName" type="text" {...register('taskName')} />
        <FormHelperText>To help identify your task</FormHelperText>
      </FormControl>
      <FormControl as="fieldset" mt="4">
        <FormLabel as="legend">Task Media</FormLabel>
        <RadioGroup>
          <HStack spacing="24px">
            <Radio value="game" {...register('taskMedia')}>
              Game
            </Radio>
            <Radio value="movie" {...register('taskMedia')} isDisabled>
              Movie
            </Radio>
            <Radio value="tv_show" {...register('taskMedia')} isDisabled>
              TV Show
            </Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Type of media being parsed</FormHelperText>
      </FormControl>
      <Button type="submit" mt="6">
        Submit
      </Button>
    </form>
  )
}

export default MetacriticTaskForm
