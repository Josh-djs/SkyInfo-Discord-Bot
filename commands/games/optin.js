module.exports = {
    name: "optin",
    description: "opts into nerdwars (the game, not the series)",
    category: "games",
    run: async (client, message, args) => {
        client.nerdwarsAPI.ensure(message.guild.id, {})
        if(!client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Health`)) return message.channel.send("You must use s.start before playing!")
        message.channel.send(`Opted in! Default stats are:
\`\`\`apache
Faction: None
Health: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Health`)}
Defense: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Defense`)}
Coins: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Coins`)}
XP: ${client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.XP`)}
PVPenabled: true
\`\`\`
        `)
        function optIn(id) {
            client.nerdwarsAPI.set(message.guild.id, true, `${id}.PVPEnabled`)
            return client.nerdwarsAPI.get(message.guild.id, id)
        }
    }
}