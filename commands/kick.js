const msg = require('discord.js')
module.exports = {
    name: 'kick',
    description: "kicks a member",
    execute(msg, args) {
        if (!args[1]) msg.channel.send('Please mention a person to kick')
        var user = msg.mentions.users.first();

        if (user) {
            var member = msg.guild.member(user);

            if (member) {
                member.kick('you were kicked from the server').then(() => {
                    msg.reply(`Succesfully kicked ${user.tag}`);
                    if (msg.deletable) msg.delete(1000);
                    break;
                }).catch(err => {
                    msg.reply('I was unable to kick that member');
                    console.log(err);
                });
            } else {
                msg.reply("User isn\'t in the server")
            }
        } else {
            return;
        }
    }
}