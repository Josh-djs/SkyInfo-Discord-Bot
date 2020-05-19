const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "help",
    execute(msg) {
        var help = new MessageEmbed()
            .setThumbnail('https://images.discordapp.net/avatars/584547343995633730/7007012dfe47b5b078940e98a6357d2c.png?size=512')
            .setTitle('Help')
            .addField('Help command', 's.help - Displays this message')
            .addField('Potion Commands', 's.potlist - Displays a list of potions that should be included in a splash \n s.brews - Displays a list of applicable brews \n s.potupgradelist - Displays the order of which items to use that upgrade potions')
            .addField('Slayer', 's.slayerhelp - Shows a menu of what i know about slayers')
            .setFooter('SkyInfo 2020')
        msg.channel.send(help)
    }
}