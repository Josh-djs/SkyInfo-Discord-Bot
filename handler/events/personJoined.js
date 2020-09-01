module.exports = (client) => {
    client.on('guildMemberAdd', (member) => {
        if(client.guildSettings.get(member.guild.id, "welcomeMessages") !== false) {
            if (member.guild.id === '740568099996041246') {
                client.joinedSupportServer.set(member.id, true)
                let welcome = member.guild.channels.cache.find(ch => ch.name === client.guildSettings.get(member.guild.id, "welcomeMessages"))
                let welcomeMessage = `Welcome <@${member.id}>!`
                if(client.guildSettings.get(member.guild.id, "welcomeMessage") !== false) {
                    welcomeMessage = client.guildSettings.get(member.guild.id, "welcomeMessage")
                    welcomeMessage = welcomeMessage.replace("<@person>", `<@${member.id}>`)
                }
                welcome.send(welcomeMessage)
            }
        }
    })
    client.on('guildMemberRemove', (member) => {
        if(client.guildSettings.get(member.guild.id, "welcomeMessages") !== false) {
        if (member.guild.id === '740568099996041246') {
            if (client.joinedSupportServer.get(member.id)) {
                client.joinedSupportServer.delete(member.id)
            }
        }
        let bye = member.guild.channels.cache.find(ch => ch.name === client.guildSettings.get(member.guild.id, "welcomeMessages"))
        if(bye) {
            bye.send(`Oof <@${member.id}> left the server`)
        }
        }
    })
}