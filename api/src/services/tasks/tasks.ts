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
  const workerData = {
    id: (await task).id,
    ...(input.data as Record<string, string>),
  }
  await mq.sendToChannel(input.engine, workerData)
  return task
}
