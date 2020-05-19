const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "suggest",
    execute(msg, args) {

        let botsuggestion = args.slice(1).join(" ");
        msg.delete()

        let Owner = msg.guild.roles.cache.find(r => r.name == "Guild Owner")
        let CoOwner = msg.guild.roles.cache.find(r => r.name == "Co-Owner")

        msg.channel.send(`${CoOwner}`)
        msg.channel.send(`${Owner}`)

        botmessage = new MessageEmbed()
            .setColor('#eb1010')
            .setThumbnail('https://cdn.discordapp.com/attachments/702026877996367892/710521584233873478/Sug-Box.png')
            .setTitle(`📣 ${msg.author.tag} Has suggested something!`)
            .addField('The suggestion is:', botsuggestion)
            .setTimestamp(``)
        msg.channel.send(botmessage).then(botmessage => {
            botmessage.react('👍')
            botmessage.react('👎')
        })
    }
}