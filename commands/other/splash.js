const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "splash",
    description: "does a splash embed and pings the splash role",
    usage: "<IGN> <number of pots> <price> <location> <anything else you want to note>",
    category: "other",
    run: async (client, message, args) => {
        message.delete()
        if (!message.member.roles.cache.get(client.guildSettings.get(message.guild.id, "splashRole"))) return message.channel.send('You are not a splasher!')
        if (!args[1] || !args[2] || !args[3] || !args[4]) return message.channel.send('Use s.help splash for correct usage')
        let IGN = args[1]
        let numPots = args[2]
        let price = args[3]
        let location = args[4]
        let other = false
        if (args[5]) {
            other = args.slice(4).join(" ")
        }
        let splashEmbed = new MessageEmbed()
            .setDescription(`${IGN} is hosting a splash`)
            .addField('Number of potions', numPots)
            .addField('Price', price)
            .addField('Location', location)
        if (other) {
            splashEmbed.addField('Notes', other)
        }
        if (client.guildSettings.get(message.guild.id, "splashPing")) {
            message.channel.send(`<@${client.guildSettings.get(message.guild.id, "splashPing")}>`)
        }
        message.channel.send(splashEmbed)
    }
}