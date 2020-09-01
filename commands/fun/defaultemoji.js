module.exports = {
    name: "defaultemoji",
    description: "returns the default non-discord version of an emoji",
    usage: "<emoji>",
    category: "fun",
    run: async (client, message, args) => {
        return message.channel.send(`\\${args[1]}`)
    }
}