export const schema = gql`
  type Task {
    id: Int!
    status: TaskStatus!
    type: TaskTypes!
    data: JSON!
    createdAt: DateTime!
  }

  enum TaskStatus {
    PENDING
    RUNNING
    COMPLETED
    FAILED
  }
  enum TaskTypes {
    METACRITIC
    TWITTER
  }

  type Query {
    tasks: [Task!]! @requireAuth
  }

  input CreateTaskInput {
    status: TaskStatus!
    type: TaskTypes!
    data: JSON!
  }

  input UpdateTaskInput {
    status: TaskStatus
    type: TaskTypes
    data: JSON
  }
  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
  }
`
