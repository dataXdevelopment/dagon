import { createTask, tasks } from './tasks'
import type { StandardScenario } from './tasks.scenarios'

describe('tasks', () => {
  scenario('returns all tasks', async (scenario: StandardScenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })
  scenario('creates a task', async () => {
    const task = await createTask({
      input: {
        data: { test: 'test' },
        status: 'PENDING',
        type: 'METACRITIC',
      },
    })

    expect(task.data).toEqual({ test: 'test' })
    expect(task.status).toEqual('PENDING')
    expect(task.type).toEqual('METACRITIC')
    expect(task.createdAt).toBeDefined()
    expect(task.id).toBeDefined()
  })
})
