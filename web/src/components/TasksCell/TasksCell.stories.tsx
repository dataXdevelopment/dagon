import { Box } from '@chakra-ui/react'
import { Loading, Empty, Failure, Success } from './TasksCell'
import { standard } from './TasksCell.mock'

const WrapTable = ({ children }) => (
  <Box
    mt="8"
    maxW="2xl"
    borderColor="gray.200"
    borderStyle="solid"
    borderWidth="thin"
    borderRadius="md"
    padding="4"
  >
    {children}
  </Box>
)
export const loading = () => {
  return Loading ? (
    <WrapTable>
      <Loading />
    </WrapTable>
  ) : null
}

export const empty = () => {
  return Empty ? (
    <WrapTable>
      <Empty />
    </WrapTable>
  ) : null
}

export const failure = () => {
  return Failure ? (
    <WrapTable>
      <Failure error={new Error('Oh no')} />{' '}
    </WrapTable>
  ) : null
}

export const success = () => {
  return Success ? (
    <WrapTable>
      <Success {...standard()} />{' '}
    </WrapTable>
  ) : null
}

export default { title: 'Cells/TasksCell' }
