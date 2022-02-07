export const schema = gql`
  type Task {
    id: Int!
    status: TaskStatus!
    engine: EngineTypes!
    data: JSON!
    createdAt: DateTime!
  }

  enum TaskStatus {
    PENDING
    RUNNING
    COMPLETED
    FAILED
  }
  enum EngineTypes {
    METACRITIC
    TWITTER
  }

  type Query {
    tasks: [Task!]! @requireAuth
  }

  input CreateTaskInput {
    status: TaskStatus!
    engine: EngineTypes!
    data: JSON!
  }

  input UpdateTaskInput {
    status: TaskStatus
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @skipAuth
  }
`
