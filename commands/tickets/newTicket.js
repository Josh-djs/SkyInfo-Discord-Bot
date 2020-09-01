module.exports = {
    name: "newticketapp",
    description: "creates a new ticket app that people can create tickets with",
    usage: "<the channel id where the ticket message is> <message id of the ticket that users will react to> <name> <description>",
    permissions: ["MANAGE_CHANNELS"],
    category: "tickets",
    run: async (client, message, args) => {
        let channelID = args[1]
        if (channelID && !message.guild.channels.cache.get(channelID)) {
            return message.channel.send('That isnt a valid channel!')
        }
        var ticketChannel = message.guild.channels.cache.get(channelID)
        let messageID = args[2]
        let title = args[3]
        let description = args.slice(4).join(" ")
        if (!title || !description) {
            return message.channel.send('Provide a title (no spaces) and a description!')
        }
        if (messageID) {
            try {
                await ticketChannel.messages.fetch(messageID)
            } catch {
                return message.channel.send('Invalid message!')
            }
            let ticketMessage = await ticketChannel.messages.fetch(messageID)
            const filter = mes => mes.author.id === message.author.id
            await message.channel.send('Please send the emoji you want people to make tickets with').then(m => {
                let emoji = message.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                    try {
                        ticketMessage.react(collected.first().content)
                    } catch {
                        message.channel.send('Invalid emoji!')
                    }
                    var emoji = collected.first().content
                    let ticketID = ticketMessage.id
                    client.tickets.set(message.guild.id, { description, title, emoji, "ticketsMade": 0 }, ticketID)
                    async function sendMessage() {
                        return message.channel.send(`Ticket channel set to:\n<#${channelID}>\n\n Message set to:\n\`${await ticketChannel.messages.fetch(messageID)}\`\n\nTitle set to:\n${title}\n\nDescription set to:\n${description}`)
                    }
                    return sendMessage()
                })
            })
        } else {
            return message.channel.send('Invalid message!')
        }

    }
}