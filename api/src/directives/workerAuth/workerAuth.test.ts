import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import workerAuth, { WorkerAuthDirectiveParams } from './workerAuth'

describe('workerAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(workerAuth.schema).toBeTruthy()
    expect(getDirectiveName(workerAuth.schema)).toBe('workerAuth')
  })

  it('has a workerAuth throws an error if API KEY is invalid', () => {
    const mockExecution = mockRedwoodDirective(workerAuth, {
      context: {
        event: {
          headers: {
            'x-api-key': '123',
          },
        },
      },
    } as WorkerAuthDirectiveParams)

    expect(mockExecution).toThrowError("You don't have permission to do that.")
  })
})
