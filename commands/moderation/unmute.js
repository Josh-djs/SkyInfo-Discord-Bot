module.exports = {
    name: "unmute",
    description: "unmutes a member",
    usage: "<member to unmute>",
    permissions: ["MANAGE_MEMBERS"],
    category: "moderation",
    run: async (client, message, args) => {
        if(!client.guildSettings.get(message.guild.id, "muteRole")) {
            return message.channel.send("Please configure the mute role! (using the configmute command)")
        }
        let unmutePerson = message.guild.member(message.mentions.users.first())
        if(!unmutePerson || unmutePerson === undefined) {
            return message.channel.send('Mention a valid person to unmute')
        }
        let muterole = message.guild.roles.cache.find(r => r.name === `${client.guildSettings.get(message.guild.id, "muteRole")}`)
        if(unmutePerson.roles.cache.find(r => r.name === "muted")) {
            unmutePerson.roles.remove(muterole).then(() => {
                message.channel.send(`Unmuted <@${unmutePerson.id}>`)
            }).catch(e => {
                return message.channel.send("Something bad happened while muting " + unmutePerson.tag)
            }) 
        }
    }
}