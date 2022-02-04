export const schema = gql`
  type MetacriticTask {
    id: Int!
    name: String!
    media: MetacriticTaskMedia!
  }

  enum MetacriticTaskMedia {
    MOVIE
    TV
    GAME
  }

  type Query {
    metacriticTasks: [MetacriticTask!]! @requireAuth
  }

  input CreateMetacriticTaskInput {
    name: String!
    media: MetacriticTaskMedia!
  }

  input UpdateMetacriticTaskInput {
    name: String
    media: MetacriticTaskMedia
  }

  type Mutation {
    createMetacriticTask(input: CreateMetacriticTaskInput!): MetacriticTask!
      @requireAuth
  }
`
