module.exports = {
    name: "ban",
    description: "Bans a member",
    usage: "<member to ban> [reason]",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    run: async (client, message, args) => {
        let user = message.mentions.users.first()
        let reason = args.splice(0, 1).join(" ") || "You were banned from the server"

        if (!user) {
            return message.channel.send('Mention someone to kick!')
        } else {
            let person = message.guild.member(user)
            if (person) {
                person.ban(reason).then(() => {
                    message.channel.send(`Banned ${person.tag}`).then(m => m.delete({ timeout: 5000 }))
                }).catch(e => {
                    message.channel.send("Something bad happened while banning that person!").then(m => m.delete({ timeout: 5000 }))
                })
            } else {
                return message.channel.send("That person isn't in the server!")
            }
        }
    }
}