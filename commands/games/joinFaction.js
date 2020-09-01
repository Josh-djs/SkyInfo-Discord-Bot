const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "joinfaction",
    description: "Joins a faction (note: YOU MAY ONLY JOIN A FACTION ONCE, CHOOSE WISELY)",
    usage: "<faction to join>",
    category: "games",
    run: async (client, message, args) => {
        if(!args[1]) return message.channel.send('Define a faction to join!')
        if (!client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Health`)) return message.channel.send("You must use s.start before playing!")
        if(client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.Faction`)) return message.channel.send('You have already joined a faction!')
        let factions = ['nerds', 'casuals', 'scams']
        let factionBuffs = ['IDK', 'i dunno', 'bruh']

        for (i = 0; i < factions.length; i++) {
            if (args[1].toLowerCase() === factions[i]) {
                client.nerdwarsAPI.set(message.guild.id, factions[i], `${message.author.id}.Faction`)
                let factionEmbed = new MessageEmbed()
                    .setDescription(`Joined ${factions[i]}!\n\n${factions[i]} Faction gives:\n\n${factionBuffs[i]}`)
                return message.channel.send(factionEmbed)
            }
        }
        return message.channel.send('Invalid Faction!')
    }
}