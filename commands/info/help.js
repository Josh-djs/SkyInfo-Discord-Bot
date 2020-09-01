const {
    MessageEmbed 
} = require("discord.js"), {
    stripIndents
} = require("common-tags")

module.exports = {
    name: "help",
    category: "info",
    description: "Returns all commands, or info on a specific command.",
    usage: "[command name]",
    run: async (client, message, args) => {
        if (args[1]) {
            return getCommand(client, message, args[1])
        } else {
            return getAll(client, message)
        }
    }
}

function getAll(client, message) {
    const pages = {1: {name: "Moderation", value: "ban - Bans a member\nkick - kicks a member\nclear - Clears 2-100 messages in a channel\ninfractions - Checks how many infractions a user has(infractions are added when a member is muted)\nmute - Mutes a member\ntempmute - Mutes a member for a specified time\nunmute - Unmutes a member"}, 2:{name: "Info", value:"calcdmg - Calculates Skyblock damage based on certain factors\nchangelog - Shows the changelog\nduration - Shows how long potions will be depending on alchemy level\nhelp - Displays this message\ninfo - Shows basic info about this bot\npetxp - Calculates the needed xp to level a pet to a certain level\nserverinfo - Shows basic info about the server\nslayer - Lots of info about slayers and their bosses\nslayerhelp - Shows how to use slayer\nuserinfo - Shows basic info about a user"},3:{name: "Fun", value:"cndruncount - Shows how many times each command has been run\nnerdwars - Shows the seasons/episodes of nerdwars\nping - Shows the bot's ping\nuptime - Shows how long the bot has been online"}, 4:{name: "Config", value: "configcmds - Configures whether commands are to be deleted or not\nconfigcount - Configures the 'count' channel\nconfigmute - Configures the role to give to muted people\nconfigprefix - Configures the prefix\nconfigsplasher - Configures the splasher role\nconfigsuggestion - configures the channel where suggestions go\nconfigtickets - Configures the roles that can see tickets"},5:{name:"API", value: "price - Checks the price of an item on the bazaar\nbedwarsstats - Checks various stats about a bedwars player\nskywarsstats - Checks various stats about a skywars player\npitstats - Checks various stats about a pit player\nhypixel - Checks various stats about a player on hypixel\ncost - Calculates the cost of getting to alchemy 50\nids - Displays all item ids, sorted by their category"}, 6:{name: "Other", value: "auction - Creates a nice looking auction advertisement\nbotsuggest - Sends a DM to the creator of this bot with a suggestion for the bot\ninvite - Displays the invite for the bot\npoll - Creates a poll\nsuggest - Sends a nicely formatted suggestion to the suggestion channel (if none, sends it to the same channel)"}, 7:{name: "Tickets", value:"newticketapp - Creates a new ticket category with a message to react to that will create a ticket"}, 8: {name: "giveaways", value: "gcreate - Creates a new giveaway, interactive setup (choose channel, item, winners, and time)\ngstart - starts a giveaway in the same channel"}};
    let page = 1;

    let embed = new MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`${pages[page].name} \n\n ${pages[page].value}`)
        .setFooter(`Page ${page} of ${Object.keys(pages).length}`)

    message.channel.send(embed).then(async msg => {

        await msg.react('⬅️').then(async () => {
            await msg.react('➡️')
        })

        const backFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
        const forwardFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backFilter, { time: 60000 });
        const forwards = msg.createReactionCollector(forwardFilter, { time: 60000 });

        backwards.on('collect', r => {
            msg.reactions.resolve('⬅️').users.remove(message.author.id)
            if (page === 1) return;
            page--;
            embed.setDescription(`${pages[page].name}\n\n${pages[page].value}`)
            embed.setFooter(`Page ${page} of ${Object.keys(pages).length}`)
            msg.edit(embed)
        })

        forwards.on('collect', r => {
            msg.reactions.resolve('➡️').users.remove(message.author.id)
            if (page === Object.keys(pages).length) return;
            page++;
            embed.setDescription(`${pages[page].name}\n\n${pages[page].value}`)
            embed.setFooter(`Page ${page} of ${Object.keys(pages).length}`)
            msg.edit(embed)
        })
    });

}

function getCommand(client, message, input) {
    const embed = new MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()))
    let info = `No information discovered on the command **${input.toLowerCase()}**! Maybe a spelling error?`

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info))
    }

    if (cmd.name) info = `**Comand Name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`
    if (cmd.description) info += `\n**Description**: ${cmd.description}`
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`
        embed.setFooter("<> = Required, [] = Optional")
    }
    return message.channel.send(embed.setColor("GREEN").setDescription(info))
}