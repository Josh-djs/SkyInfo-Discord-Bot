const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "suggest",
    description: "sends a formatted suggestion message to a channel that you can configure",
    usage: "<suggestion>",
    category: "other",
    run: async (client, message, args) => {
        let botsuggestion = args.slice(1).join(" ");
        if (!botsuggestion) {
            return message.channel.send('Please provide a suggestion!')
        }
        message.delete()

        botmessage = new MessageEmbed()
            .setColor('#eb1010')
            .setThumbnail('https://cdn.discordapp.com/attachments/702026877996367892/710521584233873478/Sug-Box.png')
            .setTitle(`📣 ${message.author.tag} Has suggested something!`)
            .addField('The suggestion is:', botsuggestion)
            .setTimestamp(``)
        if (client.guildSettings.get(message.guild.id, "suggestChannel")) {
            let suggestChannel = message.guild.channels.cache.get(client.guildSettings.get(message.guild.id, "suggestChannel"))
            if(suggestChannel === undefined || !suggestChannel) {
                message.channel.send(botmessage).then(botmessage => {
                    botmessage.react('👍')
                    botmessage.react('👎')
                })
                return;
            }
            suggestChannel.send(botmessage).then(botmessage => {
                botmessage.react('👍')
                botmessage.react('👎')
            })
        } else {
            message.channel.send(botmessage).then(botmessage => {
                botmessage.react('👍')
                botmessage.react('👎')
            })
        }
    }
}