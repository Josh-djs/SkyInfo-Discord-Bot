module.exports = {
    name: "userinfo",
    description: "gets info about a user in a server",
    usage: "<user>",
    category: "info",
    run: async (client, message, args) => {
        let person = message.mentions.users.first() || message.author
        let userinfo = {}
        userinfo.avatar = person.displayAvatarURL()
        userinfo.name = person.username
        userinfo.id = person.id
        userinfo.discrim = `#${person.discriminator}`
        userinfo.registered = moment.utc(message.guild.members.cache.get(person.id).user.createdAt).format('dddd, MMMM Do, YYYY')
        userinfo.joined = moment.utc(message.guild.members.cache.get(person.id).joinedAt).format('dddd, MMMM Do, YYYY')
        userinfo.status = person.presence.status
        let activity = []
        for (i = 0; i < person.presence.activities.length; i++) {
            activity[i] = person.presence.activities[i].name
        }

        let info_embed = new Discord.MessageEmbed()
            .setAuthor(person.tag, userinfo.avatar)
            .setThumbnail(userinfo.avatar)
            .addField('Username', userinfo.name, true)
            .addField('Discriminator', userinfo.discrim, true)
            .addField('ID', userinfo.id, true)
            .addField('Status', userinfo.status, true)
        info_embed.addField('Registered at', userinfo.registered, true)
        info_embed.addField('Joined Server at', userinfo.joined, true)
        if (activity) {
            for (i = 0; i < activity.length; i++) {
                info_embed.addField('Activity', activity[i], true)
            }
        }
        message.channel.send(info_embed)
    }
}