const {
    MessageEmbed
} = require("discord.js");

module.exports = (client) => {
    client.on('messageReactionAdd', async (reaction, user) => {
        if (user.bot) return;
        if (reaction.message.partial) await reaction.message.fetch();
        try {
            if (client.tickets.get(reaction.message.channel.guild.id) && client.opentickets.get(reaction.message.channel.guild.id)) {
                if (client.tickets.get(reaction.message.guild.id, reaction.message.id)) {
                    if (reaction.emoji.name === client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).emoji) {
                        reaction.message.reactions.resolve(reaction.emoji.name).users.remove(user.id)
                        await reaction.message.guild.channels.create(`${client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).title}-ticket-${client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).ticketsMade}`, {
                            type: 'text',
                            permissionOverwrites: [{
                                id: user.id,
                                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                            },
                            {
                                id: reaction.message.channel.guild.id,
                                deny: ['VIEW_CHANNEL']
                            }
                            ],
                            topic: `${client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).description}`
                        }).then(async () => {
                            let ticketChannel = await reaction.message.channel.guild.channels.cache.find(ch => ch.name === `${client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).title.toLowerCase()}-ticket-${client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).ticketsMade}`)

                            client.guildSettings.get(reaction.message.channel.guild.id, "ticketRoles").forEach(async element => {
                                await ticketChannel.updateOverwrite(element, {
                                    'VIEW_CHANNEL': true
                                })
                            });

                            let ticketEmbed = new MessageEmbed()
                                .setDescription(`${client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).title}\n${client.tickets.get(reaction.message.channel.guild.id, reaction.message.id).description}`)

                            ticketChannel.send(ticketEmbed).then(async msg => {
                                client.opentickets.set(reaction.message.channel.guild.id, msg.id, ticketChannel)
                                await msg.react("🔒")
                            })
                            client.tickets.inc(reaction.message.channel.guild.id, `${reaction.message.id}.ticketsMade`)
                        })
                    }
                } else if (client.opentickets.get(reaction.message.channel.guild.id, reaction.message.channel.id, reaction.message.id)) {
                    if (reaction.emoji.name === '🔒') {
                        reaction.message.reactions.resolve(reaction.emoji.name).users.remove(user.id)
                        client.opentickets.delete(reaction.message.channel.guild.id, reaction.message.id)
                        reaction.message.channel.send('Ticket closing in 5s')
                        setTimeout(async () => {
                            await reaction.message.channel.delete()
                        }, 5000);
                    }
                }
            }
        } catch (e) {
            console.error(e)
        }
    })
}