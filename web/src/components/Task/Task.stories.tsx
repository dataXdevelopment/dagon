import Task from './Task'
const TASK = {
  id: 1,
  name: 'String',
  status: 'PENDING',
  type: 'METACRITIC',
  data: { foo: 'bar' },
  createdAt: new Date(),
}
export const generated = () => {
  return <Task task={TASK} />
}

export default { title: 'Components/Task' }
