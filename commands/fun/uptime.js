const ms = require("ms")
module.exports = {
    name: "uptime",
    description: "shows the uptime of the bot",
    run: async (client, message, args) => {
        let uptime = ms(bot.uptime)
        message.channel.send(`SkyInfo has been online for ${uptime} (${bot.uptime}ms)`)
    }
}