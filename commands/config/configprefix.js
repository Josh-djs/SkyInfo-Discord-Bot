module.exports = {
    name: "configprefix",
    description: "Sets the prefix for the bot. Only for administrators",
    usage: "<new prefix>",
    permissions: ['ADMINISTRATOR'],
    category: "config", 
    run: async (client, message, args) => {
        let prefix = args[1]
        if(!prefix) return message.channel.send('Please define a prefix!')

        client.guildSettings.set(message.guild.id, prefix, "prefix")
        return message.channel.send(`Changed the prefix to \`${prefix}\``)
    }
}