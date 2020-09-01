module.exports = (client) => {
    client.on('guildDelete', (guild) => {
        client.guildSettings.delete(guild.id)
    })
}