const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "duration",
    description: "calculates the duration of potions at a certain alchemy level",
    usage: "<alchemy lvl>",
    category: "info",
    run: async (client, message, args) => {
        let alchLvl = parseInt(args[1], 10)
        if (alchLvl > 50 || alchLvl < 1) return message.reply('You can\'t have an alchemy level of under 1 or over 50!')
        let decimal = alchLvl / 100
        let godDur = (40.00 * decimal) + 40.00
        let XPDur = (36 * decimal) + 36
        let msgreply = new MessageEmbed()
            .addField('The duration of god potions should be:', `\`${godDur} minutes\``)
            .addField('The duration of XP boost potions should be:', `\`\`${XPDur} minutes\`\``)
        message.channel.send(msgreply)
    }
}