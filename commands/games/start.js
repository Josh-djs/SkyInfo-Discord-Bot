module.exports = {
    name: "start",
    description: "starts nerdwars (the game, not the series)",
    category: "games",
    run: async (client, message, args) => {
        client.nerdwarsAPI.ensure(message.guild.id, {})
        optIn(message.author.id)
        message.channel.send(`Joined nerdwars! Default stats are:
\`\`\`apache
Faction: None
Health: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Health`)}
Defense: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Defense`)}
Coins: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Coins`)}
XP: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.XP`)}
PVPenabled: false
\`\`\`
        `)
        function optIn(id) {
            let defaultFaction = {Faction: false, PVPEnabled: false, stats: {"Health": 100, "Current Health": 100, "Defense": 0, "Coins":0, "XP": 0}, inventory: {}, Crates: {}}
            client.nerdwarsAPI.set(message.guild.id, defaultFaction, id)
            return client.nerdwarsAPI.get(message.guild.id, id)
        }
    }
}