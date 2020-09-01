const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "infractions",
    description: "gets all the infractions of a user",
    usage: "user's infractions to check",
    permissions: ["MANAGE_MEMBERS"],
    run: async (client, message, args) => {
        let infractionUser = message.mentions.users.first()
        let infractionEmbed = new MessageEmbed()
        client.peopleMuted.get(message.guild.id, infractionUser.id).forEach(element => {
            infractionEmbed.addField(Date(element.split(" ")[0]), element.split(" ").slice(1).join(" "))
        });
        message.channel.send(infractionEmbed)
    }
}