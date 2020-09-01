const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "cmdruncount",
    description: "Gets the amount of times a command has been run",
    usage: "[command]",
    category: "fun",
    run: async (client, message, args) => {

        if(args[1]) {
            let cmd = args[1].toLowerCase()
            let runCount = client.commandRunCount.get(message.guild.id, cmd)
            if(!runCount) {
                return message.channel.send("That isn't a valid command!")
            }
            let runEmbed = new MessageEmbed()
            .setDescription(`${cmd} command has been run ${runCount} times`)
            .setColor("BLUE")
            return message.channel.send(runEmbed)
        } else {
            let allCounts = new MessageEmbed()
            .setColor('BLUE')
            for(var key in client.commandRunCount.get(message.guild.id)) {
                allCounts.addField(key, `Has been run ${client.commandRunCount.get(message.guild.id, key)} times`)
            }
            message.channel.send(allCounts)
        }
    }
}