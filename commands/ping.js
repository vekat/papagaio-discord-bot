exports.run = async (client, message) => {
  const reply = await message.channel.send(':bird:')
  reply.edit(`pong ! bot latency : ${reply.createdTimestamp - message.createdTimestamp}ms. API latency : ${Math.round(client.ping)}ms`)
}

exports.meta = {
  name: 'ping',
  category: 'miscelaneous',
  description: "shows bot and API's latency",
  usage: '',
  aliases: [],
  level: 0
}
