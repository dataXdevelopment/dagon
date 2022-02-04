// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  tasks: [
    {
      id: 1,
      name: 'String',
      status: 'PENDING',
      type: 'TWITTER',
      data: { foo: 'bar' },
      createdAt: new Date().toString(),
    },
    {
      id: 2,
      name: 'String',
      status: 'COMPLETED',
      type: 'METACRITIC',
      data: { foo: 'bar' },
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'String',
      status: 'PENDING',
      type: 'METACRITIC',
      data: { foo: 'bar' },
      createdAt: new Date(),
    },
  ],
})
