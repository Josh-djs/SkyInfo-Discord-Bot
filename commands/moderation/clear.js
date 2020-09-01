module.exports = {
    name: "clear",
    description: "clears a certain number of messages in a channel",
    category: "moderation",
    usage: "<amount of messages to clear>",
    permissions: ['MANAGE_MESSAGES'],
    run: async (client, message, args) => {
        if(client.guildSettings.get(message.guild.id, "deleteCommands") !== true) {
            message.delete()
        }
        let numtoDelete = parseInt(args[1])

        if (numtoDelete <= 1 || numtoDelete > 100) {
            return message.channel.send('You can only delete 2-100 messages!').then(m => m.delete({ timeout: 5000 })).catch(e => {return})
        }

        await message.channel.bulkDelete(numtoDelete).then(() => {
            message.channel.send(`Cleared ${numtoDelete} messages`).then(m => m.delete({ timeout: 5000 })).catch(e => {return})
        }).catch(e => {
            message.channel.send("Something terrible happened while running that command!")
        })
    }
}