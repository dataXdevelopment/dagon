import { Channel, connect, Connection } from 'amqplib'

class MessageQueue {
  private static connection: undefined | Connection = undefined
  private static channel: undefined | Channel
  private connected = () =>
    MessageQueue.connection !== undefined && MessageQueue.channel !== undefined

  constructor() {
    this.initConnection()
  }

  async close() {
    await MessageQueue.channel.close()
    await MessageQueue.connection.close()
  }

  private async initConnection() {
    if (this.connected()) {
      return
    }

    if (process.env.AMPQ_URL === undefined)
      throw new Error('AMPQ_URL is undefined')

    MessageQueue.connection = await connect(process.env.AMPQ_URL)
    MessageQueue.channel = await MessageQueue.connection.createChannel()
    return
  }

  async sendToChannel(queueName: string, data) {
    await this.initConnection()

    await MessageQueue.channel.assertQueue(queueName, { durable: true })
    MessageQueue.channel.sendToQueue(
      queueName,
      Buffer.from(`${JSON.stringify(data)}`),
      {
        deliveryMode: true,
      }
    )
    console.log(`Sent to ${queueName} ${JSON.stringify(data)}`)
  }
}

export const mq = new MessageQueue()
