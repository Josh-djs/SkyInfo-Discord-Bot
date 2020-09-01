module.exports = (client, message) => {
    if(message.author.bot) return;
    var args = message.content.split(" ")
    if(client.counts.get(message.guild.id)) {
        if(client.counts.get(message.guild.id, message.channel.id)) {
            if(parseInt(args[0]) !== client.counts.get(message.guild.id, message.channel.id).count + 1) {
                message.delete()
                message.channel.send('That is the wrong number!').then(m => {m.delete({timeout:5000})})
            } else {
                client.counts.inc(message.guild.id, `${message.channel.id}.count`)
            }
        }
    }
}