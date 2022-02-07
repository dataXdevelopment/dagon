import { AuthenticationError } from '@redwoodjs/graphql-server'

/**
 * Once you are ready to add authentication to your application
 * you'll build out requireAuth() with real functionality. For
 * now we just return `true` so that the calls in services
 * have something to check against, simulating a logged
 * in user that is allowed to access that service.
 *
 * See https://redwoodjs.com/docs/authentication for more info.
 */
export const isAuthenticated = () => {
  return true
}

export const hasRole = ({ roles }) => {
  return roles !== undefined
}

// This is used by the redwood directive
// in ./api/src/directives/requireAuth

// Roles are passed in by the requireAuth directive if you have auth setup
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const requireAuth = ({ roles }) => {
  return isAuthenticated()
}

export const isAuthenticatedWorker = ({ apiKey }) => {
  if (process.env.WORKER_API_KEY === undefined)
    throw new Error('WORKER_API_KEY is undefined')
  if (apiKey !== process.env.WORKER_API_KEY)
    throw new AuthenticationError("You don't have permission to do that.")
}
