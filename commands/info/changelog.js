const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    description: "shows the changelog",
    category: "info",
    run: async (client, message, args) => {
        let changelog = new MessageEmbed()
        .setDescription('SkyInfo Changelog')
        client.changelog.forEach((key, value) => {
            changelog.addField(value, key)
        });
        message.channel.send(changelog)
    }
}