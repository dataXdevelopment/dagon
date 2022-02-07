import { db } from 'src/lib/db'
import { Prisma } from '@prisma/client'
import { mq } from 'src/lib/mq'
import { UpdateTaskInput } from 'types/graphql'

export const tasks = () => {
  return db.task.findMany()
}

export const createTask = async ({
  input,
}: {
  input: Prisma.TaskCreateInput
}) => {
  const task = await db.task.create({
    data: input,
  })

  const workerData = {
    id: task.id,
    ...(input.data as Record<string, string>),
  }
  await mq.sendToChannel(input.engine, workerData)
  return task
}

export const updateTask = ({
  id,
  input,
}: {
  id: number
  input: UpdateTaskInput
}) => {
  return db.task.update({
    where: { id },
    data: input,
  })
}
