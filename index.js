const {
    MessageEmbed,
    Collection,
    Client,
    Constants
} = require("discord.js"),
    config = require('./configs/configs.json'), {
        readdirSync,
        readdir
    } = require("fs"),
    Enmap = require("enmap"),
    defaults = require("./handler/defaults.json"),
    fetch = require('node-fetch');

let partials = ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE']
const client = new Client({ partials: Object.values(Constants.PartialTypes) });

client.login(config.token);

client.categories = readdirSync("./commands/");
client.commands = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

require('./configs/enmaps.js')(client)

client.once("ready", async () => {
    client.user.setActivity(`${client.nerdwars.randomKey(1)}`, { type: 'WATCHING' })
    setInterval(() => {
        client.user.setActivity(`${client.nerdwars.randomKey(1)}`, { type: 'WATCHING' })
    }, 86400000)
    console.log(`${client.user.username} is online in ${client.guilds.cache.size} servers`)
    setInterval(() => {
        require('./handler/reload.js')(client)
    }, 360000);
    setInterval(() => {
        let joshsserver = client.guilds.cache.get('740568099996041246')
        let overseer = joshsserver.member('427247359437701121')
        var isNerd = 0
        for (i = 0; i < overseer.presence.activities.length; i++) {
            if (overseer.presence.activities[i].name === 'custom status') {
                isNerd = i
            }
        }
        if (overseer.presence.activities[isNerd]) {
            var overstatus = overseer.presence.activities[isNerd].state
            if (overstatus) {
                if (overstatus.split(":")[0] !== "Nerd Wars") return;
                if (!client.nerdwars.get(overstatus)) {
                    client.nerdwars.set(overstatus, 'Season ' + 5 + ' Episode ' + client.nerdwars.get('episode'))
                    client.nerdwars.inc("episode")
                }
            }
        } else {
            return;
        }
    }, 180000);
});

require('./handler/events/channelCreate')(client);
require('./handler/events/guildDelete')(client);
require('./handler/events/guildCreate')(client);
require('./handler/events/message')(client);
require('./handler/events/messageReaction')(client);
require('./handler/events/personJoined')(client)
