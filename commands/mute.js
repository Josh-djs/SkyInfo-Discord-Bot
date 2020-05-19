module.exports = {
    name: 'mute',
    description: "mutes a member",
    execute(msg, args){
        var user = msg.mentions.users.first();

        if (!args[1]) msg.channel.send('Please mention a person to mute')

        if (user) {
            var member = msg.guild.member(user);

            if (member) {
                var muteRole = msg.guild.roles.cache.find(role => role.name === "muted");

                member.addRole(muteRole.id).then(() => {
                    msg.reply(`Succesfully muted ${user.tag}`);
                }).catch(err => {
                    msg.reply('i was unable to mute that member');
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