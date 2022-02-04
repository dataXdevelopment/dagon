export const schema = gql`
  type Task {
    id: Int!
    name: String!
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
    name: String!
    status: TaskStatus!
    type: TaskTypes!
    data: JSON!
  }

  input UpdateTaskInput {
    name: String
    status: TaskStatus
    type: TaskTypes
    data: JSON
  }
  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
  }
`
