module.exports = {
    name: "configwelcome",
    description: "configures the channel where to send welcome messages",
    usage: "<name of the channel to send messages to>",
    permissions: ["ADMINISTRATOR"],
    run: async (client, message, args) => {
        let welcomeChannel = args[1]

        let isValidChannel = message.guild.channels.cache.find(ch => ch.name === welcomeChannel)

        if(isValidChannel) {
            client.guildSettings.set(message.guild.id, welcomeChannel, "welcomeMessages")
            return message.channel.send(`Set the welcome channel to ${isValidChannel}!`)
        } else {
            return message.channel.send("Invalid channel name!")
        }
    }
}