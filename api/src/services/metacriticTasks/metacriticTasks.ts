import { db } from 'src/lib/db'

export const metacriticTasks = () => {
  return db.metacriticTask.findMany()
}

export const createMetacriticTask = ({ input }) => {
  return db.metacriticTask.create({ data: input })
}
