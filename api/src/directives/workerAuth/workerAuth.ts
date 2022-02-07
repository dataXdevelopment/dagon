import {
  createValidatorDirective,
  DirectiveParams,
  ValidatorDirectiveFunc,
} from '@redwoodjs/graphql-server'
import { isAuthenticatedWorker } from 'src/lib/auth'
export const schema = gql`
  """
  Use @workerAuth to validate access to a field, query or mutation.
  """
  directive @workerAuth on FIELD_DEFINITION
`
export type WorkerAuthDirectiveParams = Omit<
  DirectiveParams,
  'resolvedValue'
> & {
  context: {
    event: {
      headers: {
        'x-api-key': string
      }
    }
  }
}

const validate: ValidatorDirectiveFunc = ({
  context,
}: WorkerAuthDirectiveParams) => {
  const apiKey = context.event.headers['x-api-key']
  isAuthenticatedWorker({ apiKey })

  // throw new Error('Implementation missing for workerAuth')
}

const workerAuth = createValidatorDirective(schema, validate)

export default workerAuth
