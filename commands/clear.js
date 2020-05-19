const message = require('discord.js')
module.exports = {
    name: "clear",
    description: "clears messages",
    execute(msg, args) {
        if (!args[1])
            return msg.channel.send('oof, pls specify a number of messages for me to delete.');
        msg.channel.bulkDelete(args[1]).then(() => {
            msg.channel.send(`Cleared ${args[1]} messages!`).then(msg => {
                return msg.delete(1000);
            });
        });
    }
}