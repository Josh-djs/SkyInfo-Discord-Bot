const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "skywarsstats",
    description: "gets the skywars stats of a player",
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
            player_info.addField('Current Win streak:', `${json.player.stats.SkyWars.win_streak}`)
            if (json.player.stats.SkyWars.active_victorydance) {
                player_info.addField('Victory Dance:', `${json.player.stats.SkyWars.active_victorydance.split("_").splice(1).join(" ")}`)
            }
            if(json.player.stats.SkyWars.games_played_skywars){
            player_info.addField('Games Played:', `${json.player.stats.SkyWars.games_played_skywars}`)
            }else{
                player_info.addField('Games Played:', `${json.player.displayname} has never played SkyWars!`)
            }
            if(json.player.stats.SkyWars.wins) {
                player_info.addField('Total Wins', json.player.stats.SkyWars.wins)
            } else {
                player_info.addField('Total Wins', `${json.player.displayname} has never won in SkyWars 😢`)
            }
            if (json.player.stats.SkyWars.heads) {
                player_info.addField('Total Heads collected:', `${json.player.stats.SkyWars.heads}`)
            }
            if(json.player.stats.SkyWars.kills){
            player_info.addField('Total kills:', `${json.player.stats.SkyWars.kills}`)
            }
            player_info.addField('Active Kit:', `${json.player.stats.SkyWars.activeKit_TEAMS.split("_").splice(1).join(" ")}`)
            message.channel.send(player_info)
        }
        getPerson(`https://api.hypixel.net/player?key=e88a734d-1ead-4377-ac1d-221a6d441d38&name=${args[1]}`)
    }
}