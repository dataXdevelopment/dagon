const Task = ({ task }) => {
  return (
    <div>
      <h2>{'Task'}</h2>
      {task.id}
      <p>{'Find me in ./web/src/components/Task/Task.tsx'}</p>
    </div>
  )
}

export default Task
