const { MessageEmbed } = require("discord.js");
module.exports = {
    name:"slayerhelp",
    description:"shows all the commands related to slayer",
    execute(msg){
        slayerhelp = new MessageEmbed()
        .setColor('#25615d')
        .setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/0/0f/Maddox_the_Slayer.png/revision/latest/scale-to-width-down/340?cb=20191206025742')
        .addField('These are my slayer related commands:', '[s.slayer sven rewards] - Shows the rewards for each level in the Sven slayer \n \n [s.slayer tarantula rewards] - Shows the rewards for each level in the Tarantula slayer\n \n [s.slayer revenant rewards] - Shows the rewards for each level in Revenant Horror slayer \n \n [s.slayer sven level] - Shows the stats and abilities for each level of Sven boss\n \n [s.slayer tarantula level] - Shows the stats and abilities for each level of Tarantula boss\n \n [s.slayer revenant level] - Shows the stats and abilities for each level of Revenant boss')
        .setFooter('SkyInfo 2020')
    msg.channel.send(slayerhelp)
    }
}