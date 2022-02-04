import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        name: 'String',
        status: 'PENDING',
        type: 'METACRITIC',
        data: { foo: 'bar' },
      },
    },
    two: {
      data: {
        name: 'String',
        status: 'PENDING',
        type: 'METACRITIC',
        data: { foo: 'bar' },
      },
    },
  },
})

export type StandardScenario = typeof standard
