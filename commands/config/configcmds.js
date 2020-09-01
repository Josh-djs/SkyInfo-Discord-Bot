module.exports = {
    name: "configcmds",
    description: "Sets the bot to either delete trigger commands or not delete trigger commands",
    usage: "<true or false>",
    permissions: ["MANAGE_MESSAGES"],
    category: "config",
    run: async (client, message, args) => {
        if(!args[1]) return message.channel.send('Specify whether or not to delete messages!')
        if(args[1].toLowerCase() !== 'true' && args[1].toLowerCase() !== 'false') {
            return message.channel.send('Must be true or false!')
        }
        if(args[1].toLowerCase() === 'true') {
            client.guildSettings.set("deleteCommands", true)
            return message.channel.send("Delete commands set to \`true\`")
        } else {
            client.guildSettings.set(message.guild.id, false, "deleteCommands")
            return message.channel.send("Delete commands set to \`false\`")
        }
    }
}