const ms = require('ms')
const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: "tempmute",
    description: "mutes a member of a server temporarily",
    usage: "<member to mute> <amount of time to mute> <reason>",
    permissions: ["MANAGE_MEMBERS"],
    category: "moderation",
    run: async (client, message, args) => {
        let personToMute = message.guild.member(message.mentions.users.first())
        let timeToMute = parseFloat(ms(args[2]))
        let muteReason = args.slice(3).join(" ")
        if (!personToMute || !timeToMute || !muteReason || Number.isNaN(timeToMute)) {
            return message.channel.send("Use help tempmute for proper usage")
        }
        let muterole = message.guild.roles.cache.find(r => r.name === `${client.guildSettings.get(message.guild.id, "muteRole")}`)
        personToMute.roles.add(muterole).then(() => {
            client.peopleMuted.ensure(message.guild.id, {})
            client.peopleMuted.ensure(message.guild.id, [], mutePerson.id)
            client.peopleMuted.push(message.guild.id, Date.now() + ' ' + muteReason, mutePerson.id, true)
            message.channel.send(`Muted <@${personToMute.id}> for:\n\n ${muteReason}\n\n they will be unmuted in ${ms(timeToMute)}`)
        }).catch(e => {
            console.error(e)
            message.channel.send("Something terrible happened while muting <@" + personToMute.id + "> !")
        })
        setTimeout(() => {
            personToMute.roles.remove(muterole).then(() => {
                message.channel.send(`unmuted <@${personToMute.id}>`)
            }).catch(e => {
                message.channel.send("Something terrible happened while unmuting <@" + personToMute.id + "> !")
            })
        }, timeToMute);
    }
}