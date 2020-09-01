module.exports = {
    name: "givecrate",
    run: async (client, message, args) => {
        let amtOfCrates = parseInt(args[1])
        let rarity = args[2]
        let person = message.mentions.users.first()
        if(person === undefined || !person) {
            person = message.author
        }
        if(Number.isNaN(amtOfCrates)) return message.channel.send('Number of crates must be a number! (s.givecrate <amount> <rarity> [optional person])')
        if(message.author.id !== '427247359437701121' && message.author.id !== '429033088618594309') return;
        if(rarity !== 'common' &&rarity !== 'uncommon' &&rarity !== 'rare' &&rarity !== 'epic' && rarity !== 'legendary') return message.channel.send('invalid rarity!')
        

        client.nerdwarsAPI.ensure(message.guild.id, 0,`${person.id}.Crates.${rarity}`)
        client.nerdwarsAPI.set(message.guild.id, amtOfCrates + client.nerdwarsAPI.get(message.guild.id, `${person.id}.Crates.${rarity}`) ,`${person.id}.Crates.${rarity}`)
        message.channel.send(`Gave ${amtOfCrates} ${rarity} crates to <@${person.id}>`)
    }
}