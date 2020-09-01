const {
    MessageEmbed, Collection, Client, ClientUser
} = require("discord.js")
const defaults = require('../defaults.json')

module.exports = (client) => {
    client.on("message", async message => {
        require('./count')(client, message)
        let prefix = client.guildSettings.get(message.guild.id, "prefix")
        if (message.author.bot) return;
        if (!message.guild) return;
        client.guildSettings.ensure(message.guild.id, defaults)
        if (!message.content.startsWith(prefix)) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);

        let args = message.content.slice(prefix.length).split(" ")
        let cmd = args[0].toLowerCase()

        if (cmd.length <= 0) return;

        let command = client.commands.get(cmd)

        if (!command) {
            return message.channel.send('Sorry, I don\'t recognize that command')
        }

        if (command.permissions && !message.member.permissions.has(command.permissions)) {
            const formatter = new Intl.ListFormat('en', { style: 'short', type: 'disjunction' });
            return message.channel.send(`You must have one of \`${formatter.format(command.permissions)}\` permissions to run this command.`);
        }
        if (command.devOnly && message.author.id !== "429033088618594309") {
            return message.channel.send('Bruh thats dev-only! (you\'re not cool enough to use it)');
        }

        if (command) {
            if (!client.joinedSupportServer.get(message.author.id)) {
                let advertising = new MessageEmbed()
                    .setDescription('Join the support server!\n||https://discord.gg/uwTSdfR||')
                    .setFooter('Look there for current features list, all updates, and help! (so that my Dms dont get spammed every 2 seconds ;p)\nTip: To remove this message, join the support server')
                message.channel.send(advertising)
            }

            if (client.guildSettings.get(message.guild.id, "deleteCommands") === true) {
                message.delete()
            }
            command.run(client, message, args)
            if (!client.commandRunCount.get(message.guild.id)) {
                client.commandRunCount.set(message.guild.id, 0, command.name)
            }
            client.commandRunCount.ensure(message.guild.id, 0, command.name)
            client.commandRunCount.inc(message.guild.id, command.name)
        }
    })
}