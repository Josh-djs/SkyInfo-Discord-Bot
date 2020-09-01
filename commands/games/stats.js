module.exports = {
    name: "profile",
    description: "Gets the nerdwars stats of a player",
    usage: "<member to check stats of>",
    run: async (client, message, args) => {
        client.nerdwarsAPI.ensure(message.guild.id, {})
        let person = message.mentions.members.first()
        if(!message.mentions.members.first()) person = message.author
        const NumAbbr = require('number-abbreviate');
        const numAbbr = new NumAbbr();
        if (!client.nerdwarsAPI.get(message.guild.id, person.id)) return message.channel.send(`${person} has never player nerdwars!`)
        // get all of the players stats and calculate their level
        let faction = client.nerdwarsAPI.get(message.guild.id, `${person.id}.Faction`)
        let coins = client.nerdwarsAPI.get(message.guild.id, `${person.id}.stats.Coins`)
        let Level = getLevel(client.nerdwarsAPI.get(message.guild.id, `${person.id}.stats.XP`))
        if(Number.isNaN(Level)) Level = 0
        let totalXP = client.nerdwarsAPI.get(message.guild.id, `${person.id}.stats.XP`)
        let health = client.nerdwarsAPI.get(message.guild.id, `${person.id}.stats.Current Health`)
        let totalHealth = client.nerdwarsAPI.get(message.guild.id, `${person.id}.stats.Health`)
        let defense = client.nerdwarsAPI.get(message.guild.id, `${person.id}.stats.Defense`)
        let OptedIn;
        if(client.nerdwarsAPI.get(message.guild.id, `${person.id}.PVPEnabled`)) {
            OptedIn = 'Yes'
        } else {
            OptedIn = 'No'
        }

        //format and send message with profile info
        message.channel.send(`
        **${person.username}**'s Profile\`\`\`apache
Faction: ${faction}
OptedIn: ${OptedIn}

Level: ${Level}
Total XP: ${numAbbr.abbreviate(totalXP, 2)}
Coins: ${numAbbr.abbreviate(coins, 2)}

Health: ${health}/${totalHealth}
Defense: ${defense}\`\`\`
        `)
    }
}

//get level function
function getLevel(XP) {
    let BASE = 30
    let GROWTH = 10
    let REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH
    let REVERSE_CONST = REVERSE_PQ_PREFIX
    let GROWTH_DIVIDES_2 = 2 / GROWTH

    return (1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * XP))
}