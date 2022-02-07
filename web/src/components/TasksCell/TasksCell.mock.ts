import { TaskStatus, TaskTypes } from 'types/graphql'

// Define your own mock data here:
const tasks = [
  {
    id: 1,
    name: 'String',
    status: 'PENDING' as TaskStatus,
    type: 'TWITTER' as TaskTypes,
    createdAt: new Date(2022, 1, 5, 19, 30).toString(),
  },
  {
    id: 2,
    name: 'String',
    status: 'COMPLETED' as TaskStatus,
    type: 'TWITTER' as TaskTypes,
    createdAt: new Date(2022, 1, 5, 9, 30).toString(),
  },
  {
    id: 3,
    name: 'String',
    status: 'FAILED' as TaskStatus,
    type: 'METACRITIC' as TaskTypes,
    createdAt: new Date(2022, 1, 4, 16, 30).toString(),
  },
  {
    id: 4,
    name: 'String',
    status: 'RUNNING' as TaskStatus,
    type: 'METACRITIC' as TaskTypes,
    createdAt: new Date().toString(),
  },
]

export const standard = (/* vars, { ctx, req } */) => ({
  tasks,
})
