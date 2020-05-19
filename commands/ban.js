module.exports = {
    name: 'ban',
    description: "bans a member",
    execute(msg, args){
        if (!args[1]) msg.channel.send('Please mention a person to ban')
        let user = msg.mentions.users.first();

        if (user) {
            var member = msg.guild.member(user);

            if (member) {
                member.ban('you were banned from the server').then(() => {
                    msg.reply(`Succesfully banned ${user.tag}`);
                    break;
                }).catch(err => {
                    msg.reply('i was unable to ban that member');
                    console.log(err);
                });
            } else {
                msg.reply("User isn\'t in the server")
            }
        } else {
            msg.reply('that user isn\'t in the guild');
        }
    }
}