const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
    name: "serverinfo",
    description: "gets info about a server",
    category: "info",
    run: async (client, message, args) => {
        let server_info = new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setThumbnail(message.guild.iconURL())
            .addField('Owner', `<@${message.guild.owner.user.id}>`, true)
            .addField('ID', message.guild.id, true)
            .addField('Members', message.guild.memberCount)
            .addField('Bots', message.guild.members.cache.filter(mem => mem.user.bot === true).size, true)
            .addField('Online Members', message.guild.members.cache.filter(mem => mem.presence.status != 'offline').size)
            .addField('Roles', message.guild.roles.cache.size, true)
            .addField('Emojis', message.guild.emojis.cache.size, true)
            .addField('Security', message.guild.verificationLevel.split('_').join(' ').toLowerCase(), true)
            .addField('Creation Date', moment.utc(message.guild.createdAt).format('dddd, MMMM Do, YYYY'), true)
        message.channel.send(server_info)
    }
}