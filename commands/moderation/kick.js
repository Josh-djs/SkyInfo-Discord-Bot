module.exports = {
    name: "kick",
    description: "kicks a member",
    usage: "<member to kick> [reason]",
    category: "moderation",
    permissions: ["KICK_MEMBERS"],
    run: async (client, message, args) => {
        let memberToKick = message.mentions.users.first()
        let reason = args.splice(0, 1).join(" ") || "You were kicked from the server"

        if(memberToKick) {
            let personKick = message.guild.member(memberToKick)
            if(!personKick || personKick === undefined) {
                return message.channel.send('User isn\'t in this server!')
            } else {
                personKick.kick(reason).then(() => {
                    message.reply(`Kicked ${personKick.tag}`);
                    message.delete({timeout: 5000})
                }).catch(e => {
                    message.channel.send("Something bad happened while kicking that member!").then(m => m.delete({timeout:5000}))
                })
            }
        } else {
            return message.channel.send("Provide a user to kick!")
        }
    }
}