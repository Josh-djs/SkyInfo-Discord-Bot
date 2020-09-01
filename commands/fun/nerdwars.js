const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "nerdwars",
    description: "shows the series of nerd wars episodes",
    category: "fun",
    run: async (client, message, args) => {
        let nerdEmbed = new MessageEmbed()
        client.nerdwars.forEach((value, key) => {
            if(key !== 'episode')
            nerdEmbed.addField(value, key)
        })
        message.channel.send(nerdEmbed)
    }
}