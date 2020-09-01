const ms = require('ms')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "gstart",
    description: "Starts a new giveaway in the same channel",
    usage: "<time> <winners> <item to giveaway>",
    category: "giveaways",
    run: async (client, message, args) => {
        if(client.guildSettings.get(message.guild.id, "deleteCmds") !== true) message.delete()
        let time = ms(args[1])
        let winners = parseInt(args[2])
        if(Number.isNaN(winners)) return message.channel.send('Winners must be a number!')
        let prize = args.slice(3).join(" ")

        let giveawayEmbed = new MessageEmbed()
        .setTitle(prize)
        .setDescription(`<@${message.author.id}> is giving away ${prize}!\n\n Ends in: ${ms(time)}\nWinners: ${winners}`)
        .setColor('RANDOM')

        var msg = await message.channel.send(giveawayEmbed)
        msg.react('🎉')
        

        var timeleft = 600000

        var time_intervals = setInterval(() => {
            let receivedEmbed = message.embeds[0];
            let new_embed = new MessageEmbed(receivedEmbed)
                .setTitle(`${prize}`)
                .setColor('RANDOM')
                .setDescription(`<@${message.author.id}> is giving away ${prize}!\n\n Ends in: ${ms(time - timeleft)}`)
            msg.edit(new_embed)
            timeleft += 600000
        }, 600000);


        setTimeout(() => {
            let wins = []
            for(var i = 0; i < winners; i++) {
                let win = msg.reactions.cache.get('🎉').users.cache.random()
                if(!win.bot) {
                    wins.push(win.id)
                } else {
                    i--
                }
            }
            message.channel.send(`🎉🎉The winner of ${prize} is: <@${wins.join('> @<')}>!🎉🎉`)
            let receivedEmbed = message.embeds[0];
            let new_embed = new MessageEmbed(receivedEmbed)
                .setTitle(`${prize}`)
                .setColor('RANDOM')
                .setDescription(`Winner(s): <@${wins.join("> <@")}>\n\n Ends in: Ended`)
            msg.edit(new_embed)
            clearInterval(time_intervals)
        }, time);
    }
}