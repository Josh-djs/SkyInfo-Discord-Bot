const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "configmute",
    description: "configures which role to mute when using the mute command",
    usage: "<id or ping of the role>",
    category: "config",
    permissions: ["MANAGE_MEMBERS"],
    run: async (client, message, args) => {
        let muteRole = args[1]
        if(message.mentions.roles.first()) {
            muteRole = message.mentions.roles.first().id
        }
        let mutedguildrole = message.guild.roles.cache.get(muteRole)
        if(!mutedguildrole) {
            return message.channel.send("That isnt a valid role!")
        }
        client.guildSettings.set(message.guild.id, muteRole, "muteRole")
        message.channel.send("Set the Muterole to `" + client.guildSettings.get(message.guild.id, "muteRole") + '`')
        
        let permissionoverwrote = new MessageEmbed()
        .setTitle(`Edited permissions of \`${mutedguildrole.name}\` for:`)
        message.guild.channels.cache.forEach(channel => {
            channel.updateOverwrite(mutedguildrole, {"SEND_MESSAGES": false})
            permissionoverwrote.addField('\u200b', `<#${channel.id}>`)
        });
        message.author.send(permissionoverwrote).catch(e => {
            message.channel.send(permissionoverwrote)
        })
    }
}