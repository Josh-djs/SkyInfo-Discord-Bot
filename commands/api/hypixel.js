const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "hypixel",
    description: "shows basic info about a user in hypixel",
    usage: "<player>",
    category: "api",
    run: async (client, message, args) => {
        let person = args[1]
        let BASE = 10_000
        let GROWTH = 2_500
        let REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH
        let REVERSE_CONST = REVERSE_PQ_PREFIX
        let GROWTH_DIVIDES_2 = 2 / GROWTH

        const getPerson = async url => {
            let stats = await fetch(url)
            let json = await stats.json()
            try {
                let test = json.player.networkExp
            } catch {
                return message.channel.send('That isn\'t a valid hypixel player!')
            }
            let exp = json.player.networkExp
            let player_info = new MessageEmbed()
                .setDescription(`Player: ${json.player.displayname}`)
                .addField(`Last Game: ${json.player.mostRecentGameType}`, `Hypixel Level: ${Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp))}`)
                .addField(`Karma:`, `${json.player.karma}`)
                .addField(`Achievement Points:`, `${json.player.achievementPoints}`)
            message.channel.send(player_info)
        }

        getPerson(`https://api.hypixel.net/player?key=e88a734d-1ead-4377-ac1d-221a6d441d38&name=${person}`)
    }
}