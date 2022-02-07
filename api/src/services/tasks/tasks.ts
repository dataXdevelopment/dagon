import { db } from 'src/lib/db'
import { Prisma } from '@prisma/client'
import { mq } from 'src/lib/mq'

export const tasks = () => {
  return db.task.findMany()
}

export const createTask = async ({
  input,
}: {
  input: Prisma.TaskCreateInput
}) => {
  const task = db.task.create({
    data: input,
  })
  await mq.sendToChannel(input.data)
  return task
}
