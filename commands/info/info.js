const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "info",
    description: "shows basic info about the bot",
    category: "info",
    run: async (client, message, args) => {
        let infoEmbed = new MessageEmbed()
        .setTitle('SkyInfo')
        .setAuthor('Josh#5371', 'https://cdn.discordapp.com/attachments/700707829580955719/717755927176151081/pngfind.com-skyblock-png-5427416.png')
        .setDescription('This bot has been developed by Josh#5371, and this is the rewrite of the original bot')
        .addField('Version', 'Release 2.0')
        .setFooter('This bot took a lot of time and effort, so all suggestions are appreciated!')
        message.channel.send(infoEmbed)
    }
}