import { db } from 'src/lib/db'
import { Prisma } from '@prisma/client'

export const tasks = () => {
  return db.task.findMany()
}

export const createTask = ({ input }: { input: Prisma.TaskCreateInput }) => {
  return db.task.create({
    data: input,
  })
}
