import { Channel, connect, Connection } from 'amqplib'

class MessageQueue {
  private static connection: undefined | Connection = undefined
  private static channel: undefined | Channel
  private connected = () => MessageQueue.connection !== undefined

  constructor() {
    this.initConnection()
  }

  async close() {
    await MessageQueue.channel.close()
    await MessageQueue.connection.close()
  }

  private async initConnection() {
    if (this.connected()) {
      return true
    }
    MessageQueue.connection = await connect(process.env.AMPQ_URL)
    MessageQueue.channel = await MessageQueue.connection.createChannel()
    return true
  }

  async sendToChannel(data) {
    const queueName = 'metacritic'
    await MessageQueue.channel.assertQueue(queueName, { durable: true })
    MessageQueue.channel.sendToQueue(
      queueName,
      Buffer.from(`Hello World! ${JSON.stringify(data)}`),
      {
        deliveryMode: true,
      }
    )
    console.log(`Sent 'Hello World!' to ${queueName} ${JSON.stringify(data)}`)
  }
}

export const mq = new MessageQueue()
