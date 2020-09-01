const defaults = require('../defaults.json')
module.exports = (client) => {
    function serverJoined(guildid, object) {
        client.guildSettings.ensure(guildid, object)
    }
    client.on('guildCreate', (guild) => {
        serverJoined(guild.id, defaults)
        let channelID;
        let channels = guild.channels;
        channelLoop:
        for (let c of channels) {
            let channelType = c[1].type;
            if (channelType === "text") {
                channelID = c[0];
                break channelLoop;
            }
        }

        let channel = bot.channels.get(guild.systemChannelID || channelID);
        channel.send(`Thanks for inviting me to your server! All commands can be found in s.help, and (most) everything is configurable! Look in config section of help for more details`);
    })
}