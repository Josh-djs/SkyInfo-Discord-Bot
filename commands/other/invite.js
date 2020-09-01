module.exports = {
    name: "invite",
    description: "Sends the invite for the bot",
    category: "other",
    run: async (client, message, args) => {
        let isError = 0
        message.author.send('https://discord.com/api/oauth2/authorize?client_id=702986784715309097&permissions=8&scope=bot').catch(err => {
            if (err) {
                isError += 1
                message.channel.send('Failed to send you a DM! Please open your direct messages')
            }
        })
        if (isError === 0) {
            return message.channel.send('Sent you a DM!')
        }
    }
}