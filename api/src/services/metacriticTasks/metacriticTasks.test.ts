import { createMetacriticTask, metacriticTasks } from './metacriticTasks'
import type { StandardScenario } from './metacriticTasks.scenarios'

describe('metacriticTasks', () => {
  scenario(
    'returns all metacriticTasks',
    async (scenario: StandardScenario) => {
      const result = await metacriticTasks()

      expect(result.length).toEqual(Object.keys(scenario.metacriticTask).length)
    }
  )
  scenario('creates a new task', async () => {
    const result = await createMetacriticTask({
      input: {
        name: 'test',
        media: 'GAME',
      },
    })

    expect(result.name).toEqual('test')
    expect(result.media).toEqual('GAME')
  })
})
