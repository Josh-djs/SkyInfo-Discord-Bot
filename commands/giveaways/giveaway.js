const ms = require('ms')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "gcreate",
    description: "Starts a giveaway",
    usage: "interactive setup",
    category: "giveaways",
    run: async (client, message, args) => {
        message.channel.send('What would you like to give away?')
        const filter = (user) => {
            return user.author.id === message.author.id
        }
        let prize = await message.channel.awaitMessages(filter, {max:1})
        prize = prize.first().content
        message.channel.send('How long is the giveaway?')
        let time = await message.channel.awaitMessages(filter, {max:1})
        time = time.first().content
        if(ms(time)) {
        time = ms(time)
        } else {
            return message.channel.send('Invalid time! (Syntax: 1s - 1 second, 1h - 1 hour, 1d - 1 day, 1w - 1 week)')
        }
        message.channel.send('Where do you want to send the giveaway message?')
        let ch = await message.channel.awaitMessages(filter, {max:1})
        ch = ch.first()
        if(ch.mentions.channels.first()) {
            ch = ch.mentions.channels.first().id
            ch = await message.guild.channels.cache.get(ch)
        } else {
            ch = await message.guild.channels.cache.get(ch.content)
            if(ch === undefined) return message.channel.send('Invalid Channel!')
        }
        
        if(ch === undefined) return message.channel.send('Invalid Channel!')
        message.channel.send('How many winners are there?')
        let winners = await message.channel.awaitMessages(filter, {max:1})
        winners = winners.first().content
        winners = parseFloat(winners)
        if(Number.isNaN(winners))return message.channel.send('Invalid number of winners!')
        let giveawayEmbed = new MessageEmbed()
        .setTitle(prize)
        .setDescription(`${message.author.tag} is giving away ${prize}!\n\n Status: Ends in ${ms(time)}\nWinners: ${winners}`)
        .setColor('RANDOM')

        message.channel.send('Giveaway Created!')

        var msg = await ch.send(giveawayEmbed)
        msg.react('🎉')
        

        var timeleft = 600000

        var time_intervals = setInterval(() => {
            let receivedEmbed = message.embeds[0];
            let new_embed = new MessageEmbed(receivedEmbed)
                .setTitle(`${prize}`)
                .setColor('RANDOM')
                .setDescription(`${message.author.id} is giving away ${prize}!\n\n Status: Ends in ${ms(time - timeleft)}\nWinners: ${winners}`)
            msg.edit(new_embed)
            timeleft += 600000
        }, 600000);


        setTimeout(() => {
            let wins = []
            msg.reactions.resolve('🎉').users.remove('702986784715309097')
            for(var i = 0; i < winners; i++) {
                let win = msg.reactions.cache.get('🎉').users.cache.random()
                if(!win.bot) {
                    wins.push(win.id)
                }
            }
            ch.send(`🎉🎉The winner of ${prize} is: <@${wins.join('> @<')}>!🎉🎉\nhttps://discordapp.com/channels/${message.guild.id}/${ch.id}/${msg.id}`)
            let receivedEmbed = message.embeds[0];
            let new_embed = new MessageEmbed(receivedEmbed)
                .setTitle(`${prize}`)
                .setColor('RANDOM')
                .setDescription(`Winner(s): <@${wins.join("> <@")}>\n\n Status: Ended`)
            msg.edit(new_embed)
            clearInterval(time_intervals)
        }, time);
    }
}