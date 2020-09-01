const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "botsuggest",
    description: "sends a DM to Josh#5371 with a suggestion for the bot",
    usage: "<message to send>",
    category: "other",
    run: async (client, message, args) => {
        message.delete()
        if(message.author.id === '640001616807854090') {
            return message.channel.send('❌Sorry you have been blacklisted from this command❌\n\n\nP.S: To not get blacklisted, dont do stuff wrong')
        }
        if(message.guild === null) {
            return message.channel.send("Sorry, you can't do this in DMs")
        }
        if(message.guild.member('429033088618594309') === undefined) {
            return message.channel.send('Sorry, Josh#5371 has to be in this server to use that command')
        }
        let suggestmessage = message.content.split(" ").splice(1).join(" ")
        let suggestembed = new MessageEmbed()
        .setDescription(`${message.author.tag} has given a suggestion for the bot:`)
        .addField('It is:', `${suggestmessage}`)
        let josh = message.guild.member('429033088618594309')
        josh.send(suggestembed)
        let botmessage = await message.channel.send('Sent Josh#5371 a DM with the information!')
        await botmessage.delete({timeout:3000})
    }
}