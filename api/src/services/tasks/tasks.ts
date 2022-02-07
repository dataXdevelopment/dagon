import { db } from 'src/lib/db'
import { Prisma } from '@prisma/client'
import { mq } from 'src/lib/mq'

export const tasks = () => {
  return db.task.findMany()
}

export const createTask = ({ input }: { input: Prisma.TaskCreateInput }) => {
  const task = db.task.create({
    data: input,
  })
  mq.sendToChannel(input.data)
  return task
}
