module.exports = {
    name: "mute",
    description: "mutes a member of the server",
    category: "moderation",
    permissions: ["MANAGE_MEMBERS"],
    run: async (client, message, args) => {
        if(!client.guildSettings.get(message.guild.id, "muteRole")) {
            return message.channel.send("Please configure the mute role! (using the configmute command)")
        }
        let mutePerson = message.guild.member(message.mentions.users.first())
        let muteReason = args.slice(2).join(" ")
        if(!muteReason) {
            return message.channel.send('Provide a reason for muting this user!')
        }
        if(!mutePerson || mutePerson === undefined) {
            return message.channel.send('Please mention a valid user!')
        }
        let muterole = message.guild.roles.cache.find(r => r.name === `${client.guildSettings.get(message.guild.id, "muteRole")}`)
        mutePerson.roles.add(muterole).then(() => {
            client.peopleMuted.ensure(message.guild.id, {})
            client.peopleMuted.ensure(message.guild.id, [], mutePerson.id)
            client.peopleMuted.push(message.guild.id, Date.now() + ' ' + muteReason, mutePerson.id, true)
            message.channel.send(`Muted <@${mutePerson.id}> for:\n\n ${muteReason}`)
        }).catch(e => {
            console.error(e)
            message.channel.send("Something terrible happened while muting <@" + mutePerson.id + "> !")
        })
    }
}