module.exports = {
    name: "configtickets",
    description: "configures the roles that can view all tickets",
    usage: "<role id or roles ids>",
    category: "config",
    permissions: ["MANAGE_CHANNELS"],
    run: async (client, message, args) => {
        let roles = args.slice(1)
        if(!roles) return message.channel.send("Please put role ids!")
        let ticketStaff = []
        roles.forEach(role => {
            let isValid = true
            try {
                message.guild.roles.cache.get(role)
            } catch {
                message.channel.send(`${role} isn't a valid role id!`)
                isValid = false
            }
            if(isValid) {
                ticketStaff.push(role)
            }
        });
        client.guildSettings.set(message.guild.id, ticketStaff, "ticketRoles")
        message.channel.send(`Set the ticket roles to: <@&${ticketStaff.join(">, <@&")}>`)
    }
}