import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        status: 'PENDING',
        engine: 'METACRITIC',
        data: { foo: 'bar' },
      },
    },
    two: {
      data: {
        status: 'COMPLETED',
        engine: 'METACRITIC',
        data: { foo: 'bar' },
        result: 'http://test.com',
      },
    },
  },
})

export type StandardScenario = typeof standard
