const { category } = require("./configmute");

module.exports = {
    name: "configsplasher",
    description: "Configures the role of splasher",
    usage: "<role for splashers>",
    category: "config",
    run: async (client, message, args) => {
        let splashRole = args[1]
        let splashguildrole = message.guild.roles.cache.get(splashRole)
        if(message.mentions.roles.first()) {
            splashguildrole =  message.mentions.roles.first().id
        }
        if(!splashguildrole) {
            return message.channel.send("That isnt a valid role!")
        }
        client.guildSettings.set(message.guild.id, splashRole, "splashRole")

        message.channel.send(`Set the splasher role to \`${splashguildrole}\``)
    }
}