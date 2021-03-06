import { mq } from 'src/lib/mq'
import { createTask, tasks, updateTask } from './tasks'
import type { StandardScenario } from './tasks.scenarios'

describe('tasks', () => {
  afterAll(async () => {
    await mq.close()
  })
  scenario('returns all tasks', async (scenario: StandardScenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })
  scenario('creates a task', async () => {
    const task = await createTask({
      input: {
        data: { test: 'test' },
        status: 'PENDING',
        engine: 'METACRITIC',
      },
    })

    expect(task.data).toEqual({ test: 'test' })
    expect(task.status).toEqual('PENDING')
    expect(task.engine).toEqual('METACRITIC')
    expect(task.result).toBeNull()
    expect(task.createdAt).toBeDefined()
    expect(task.id).toBeDefined()
  })
  scenario('updates a task', async (scenario: StandardScenario) => {
    const task = await updateTask({
      id: scenario.task.one.id,
      input: {
        status: 'COMPLETED',
        result: 'test.com',
      },
    })
    expect(task.status).toEqual('COMPLETED')
    expect(task.result).toEqual('test.com')
  })
})
