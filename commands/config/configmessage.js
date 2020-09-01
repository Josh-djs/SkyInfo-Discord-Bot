module.exports = {
    name: "configmessage",
    description: "configures the message to send when a user joins the server",
    usage: "<message you would like to send> (If you want to mention the user, put {user} somewhere in the message)",
    category: "config",
    permissions: ["ADMINISTRATOR"],
    run: async (client, message, args) => {
        if(!client.guildSettings.get(message.guild.id, "welcomeMessages")) {
            return message.channel.send('You must configure the welcome channel first! (use configwelcome)')
        }
        let mes = args.slice(1).join(" ")
        let newmes = mes.replace("{user}",`<@person>`)

        client.guildSettings.set(message.guild.id, newmes, "welcomeMessage")
        return message.channel.send(`Set the welcome message to\n\n\`${args.slice(1).join(" ")}\``)
    }
}