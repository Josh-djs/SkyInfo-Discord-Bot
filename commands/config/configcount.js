module.exports = {
    name: "configcount",
    usage: "<channel to count in>",
    category: "config",
    permissions: ["ADMINISTRATOR"],
    run: async (client, message, args) => {
        if(args[1].toLowerCase() === 'reset') {
            client.counts.set(message.guild.id, false)
            return message.channel.send('Set the count channel to none!')
        }
        try {
            var ch = message.guild.channels.cache.get(args[1])

            if (!ch) {
                return message.channel.send('Provide a channel to count in!')
            }
            client.counts.set(message.guild.id, { "count": 0 }, ch)
            return message.channel.send(`Set the count channel to <#${ch.id}> !`)
        } catch {
            return message.channel.send("Invalid channel!")
        }
    }
}