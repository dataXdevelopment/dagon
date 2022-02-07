import { TaskStatus, EngineTypes } from 'types/graphql'

// Define your own mock data here:
const tasks = [
  {
    id: 1,
    name: 'String',
    status: 'PENDING' as TaskStatus,
    engine: 'TWITTER' as EngineTypes,
    createdAt: new Date(2022, 1, 5, 19, 30).toString(),
  },
  {
    id: 2,
    name: 'String',
    status: 'COMPLETED' as TaskStatus,
    engine: 'TWITTER' as EngineTypes,
    createdAt: new Date(2022, 1, 5, 9, 30).toString(),
  },
  {
    id: 3,
    name: 'String',
    status: 'FAILED' as TaskStatus,
    engine: 'METACRITIC' as EngineTypes,
    createdAt: new Date(2022, 1, 4, 16, 30).toString(),
  },
  {
    id: 4,
    name: 'String',
    status: 'RUNNING' as TaskStatus,
    engine: 'METACRITIC' as EngineTypes,
    createdAt: new Date().toString(),
  },
]

export const standard = (/* vars, { ctx, req } */) => ({
  tasks,
})
