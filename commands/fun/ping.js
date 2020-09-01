const ms = require('ms')
module.exports = {
    name: "ping",
    description: "shows the ping for the bot",
    category: "fun",
    run: async (client, message, args) => {
        async function sendmessage() {
            var sentmessage = await message.channel.send('🏓Pinging...🏓')

            sentmessage.edit(`🏓Ping:🏓 \n${Math.floor(sentmessage.createdAt - message.createdAt)}ms\n\n🏓API Ping:🏓\n${Math.round(client.ws.ping)}ms`)
        }
        sendmessage()
    }
}