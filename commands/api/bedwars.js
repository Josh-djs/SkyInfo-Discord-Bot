const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "bedwarsstats",
    description: "gets bedwars stats about a player on hypixel",
    usage: "<player>",
    category: "api",
    run: async (client, message, args) => {
        const getPerson = async url => {
            let stats = await fetch(url)
            let json = await stats.json()
            try {
                let exp = json.player.networkExp
            } catch (err) {
                message.channel.send("Invalid player!")
            }
            let WinLoss = json.player.stats.Bedwars.wins_bedwars / json.player.stats.Bedwars.losses_bedwars
            let KillDeath = json.player.stats.Bedwars.kills_bedwars / json.player.stats.Bedwars.deaths_bedwars
            let FkillFdeath = json.player.stats.Bedwars.final_kills_bedwars / json.player.stats.Bedwars.final_deaths_bedwars
            let player_info = new MessageEmbed()
                .setDescription(`Stats for ${json.player.displayname}`)
            if (json.player.stats.Bedwars.wins_bedwars) {
                player_info.addField('Bedwars Wins', `${json.player.stats.Bedwars.wins_bedwars}\n**W/L Ratio**\n${WinLoss.toString().split('').splice(0, 4).join('')}`)
            }
            if (json.player.stats.Bedwars.activeVictoryDance) {
                player_info.addField('Victory Dance', `${json.player.stats.Bedwars.activeVictoryDance.split("_").splice(1).join(" ")}`)
            }
            if (json.player.stats.Bedwars.kills_bedwars) {
                player_info.addField('**Kills**', `${json.player.stats.Bedwars.kills_bedwars}\n**K/D Ratio**\n${KillDeath.toString().split('').splice(0, 4).join('')}\n**Final Kills**\n${json.player.stats.Bedwars.final_kills_bedwars}\n**FK/FD**\n${FkillFdeath.toString().split('').splice(0, 4).join('')}`)
            }
            if (json.player.stats.Bedwars.beds_broken_bedwars) {
                player_info.addField('Beds broken', `${json.player.stats.Bedwars.beds_broken_bedwars}`)
            }
            player_info.addField('Stars:', `${json.player.achievements.bedwars_level}`)
            message.channel.send(player_info)
        }
        getPerson(`https://api.hypixel.net/player?key=e88a734d-1ead-4377-ac1d-221a6d441d38&name=${args[1]}`)
    }
}