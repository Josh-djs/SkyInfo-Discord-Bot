module.exports = {
    name: "configsuggestion",
    description: "configures the default channel that all suggestions will be sent to",
    usage: "<id of the channel to send it to>",
    category: "config",
    run: async (client, message, args) => {
        if(!args[1]) return message.channel.send('Provide a channel!')
        let suggestchannel = args[1]
        if(message.mentions.channels.first()) {
            suggestchannel = message.mentions.channels.first().id
        }
        client.guildSettings.set(message.guild.id, suggestchannel, "suggestChannel")
        message.channel.send('updated suggestion channel to <#' + suggestchannel + '>')
    }
}