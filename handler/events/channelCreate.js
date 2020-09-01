module.exports = (client) => {
    client.on('channelCreate', (channel) => {
        async function updatePermissions() {
            let muteRole = client.guildSettings.get(channel.guild.id, "muteRole")
            let mutedguildrole = channel.guild.roles.cache.find(r => r.name === `${muteRole}`)
            if (mutedguildrole) {
                await channel.updateOverwrite(mutedguildrole, { "SEND_MESSAGES": false })
            }
        }
        if (channel.guild) {
            if (client.guildSettings.get(channel.guild.id, "muteRole")) {
                updatePermissions()
            }
        }
    })
}