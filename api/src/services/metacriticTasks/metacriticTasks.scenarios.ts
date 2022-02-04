import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MetacriticTaskCreateArgs>({
  metacriticTask: {
    one: { data: { name: 'String', media: 'MOVIE' } },
    two: { data: { name: 'String', media: 'MOVIE' } },
  },
})

export type StandardScenario = typeof standard
