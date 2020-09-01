const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch')
const NumAbbr = require('number-abbreviate')

var numAbbr = new NumAbbr()
module.exports = {
    name: "pitstats",
    description: "gets the stats of someone in pit",
    usage: "<member in pit>",
    category: "api",
    run: async (client, message, args) => {
        let pitPerson = args[1]
        const getPerson = async url => {
            let stats = await fetch(url)
            let json = await stats.json()

            try {
                let test = json.player.stats.Pit.profile
            } catch {
                return message.channel.send('That isn\'t a valid player on hypixel! (or they haven\'t played pit)')
            }
            const totalXPrequired = [65950, 138528, 217680, 303430, 395760, 494700, 610140, 742040, 906930, 1104780, 1368580, 1698330, 2094030, 2555680, 3083280, 3676830, 4336330, 5127730, 6051030, 7106230, 8293330, 9612330, 11195130, 13041730, 15152130, 17526330, 20164330, 23132080, 26429580, 31375830, 37970830, 44631780, 51292730, 57953680, 64614630, 71275580]
            const goldRequired = [10000,22000,24000,26000,8000,30000,70000,80000,100000,120000,160000,200000,240000,280000,320000,360000,400000,480000,560000,800000,900000,1000000,1200000,1400000,1600000,1800000,2400000,2700000,3000000,4500000,10000000,12120000,14240000,16360000,18480000,0]
            const levelNumerals = {0: '0',1:'I', 2:'II', 3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',11:'XI',12:'XII',13:'XIII',14:'XIV',15:'XV',16:'XVI',17:'XVII',18:'XVII',19:'XIX',20:'XX',21:'XXI',22:'XXII',23:'XXIII',24:'XXIV',25:'XXV',26:'XXVI',27:'XXVII',28:'XXVIII',29:'XXIX',30:'XXX',31:'XXXI',32:'XXXII',33:'XXXIII',34:'XXXIV',35:'XXXV'}
            const xpPerLevel = {0:17,1:17,2:18,3:20,4:21,5:23,6:27,7:30,8:38,9:45,10:60,11:75,12:90,13:105,14:120,15:135,16:150,17:180,18:210,19:240,20:270,21:300,22:360,23:420,24:480,25:540,26:600,27:675,28:750,29:1125,30:1500,31:1515,32:1515,33:1515,34:1515,35:1515}

            let rank = ''
            if (json.player.newPackageRank && json.player.newPackageRank === 'VIP') rank = '[VIP]'
            if (json.player.newPackageRank && json.player.newPackageRank === 'VIP_PLUS') rank = '[VIP+]'
            if (json.player.newPackageRank && json.player.newPackageRank === 'MVP') rank = '[MVP]'
            if (json.player.newPackageRank && json.player.newPackageRank === 'MVP_PLUS') rank = '[MVP+]'
            if (json.player.monthlyPackageRank) rank = '[MVP++]'
            let pitEmbed = new MessageEmbed()
            let prestige = { index: 0 }

            function getLevel(thing) {
                let prestigeMultiplier = {0:1,1:1.1,2:1.2,3:1.3,4:1.4,5:1.5,6:1.75,7:2,8:2.5,9:2,10:3,11:4,12:5,13:6,14:7,15:8,16:9,17:11,18:13,19:15,20:17,21:19,22:23,23:27,24:31,25:35,26:39,27:44,28:49,29:74,30:99,31:100,32:100,33:100,34:100,35:100}
                let currentXP = json.player.stats.Pit.profile.xp
                if(json.player.stats.Pit.profile.prestiges) {
                    json.player.stats.Pit.profile.prestiges.forEach(xp => {
                    currentXP -= xp.xp_on_prestige
                    })
                }
                for(var key in xpPerLevel) {
                    if(currentXP > 0) {
                        currentXP -= (key * prestigeMultiplier[thing])
                    } else {
                        return(key)
                    }
                }
                return('120')
            }

            if (json.player.stats.Pit.profile.prestiges) prestige = json.player.stats.Pit.profile.prestiges[json.player.stats.Pit.profile.prestiges.length - 1]
            pitEmbed.setDescription(`**Player** - ${rank} ${json.player.displayname}\n**Prestige** - [${levelNumerals[prestige.index]}]`)
            if (prestige.index === 0) {
                pitEmbed.addField('\u200b','**Prestige XP** - ' + numAbbr.abbreviate(json.player.stats.Pit.profile.xp, 2) + '/' + numAbbr.abbreviate(totalXPrequired[prestige.index], 2))
            } else {
                pitEmbed.addField('\u200b','**Prestige XP** - ' + numAbbr.abbreviate(json.player.stats.Pit.profile.xp - totalXPrequired[prestige.index - 1], 2) + '/' + numAbbr.abbreviate(totalXPrequired[prestige.index] - totalXPrequired[prestige.index - 1], 2))
            }
            pitEmbed.addField("\u200b", '**Prestige Gold** - '+numAbbr.abbreviate(json.player.stats.Pit.profile[`cash_during_prestige_${prestige.index}`], 2) + '/' + numAbbr.abbreviate(goldRequired[prestige.index], 2))
            pitEmbed.addField('\u200b','**Current Gold** - ' + numAbbr.abbreviate(json.player.stats.Pit.profile.cash, 2))
            if(json.player.stats.Pit.profile.renown) {
            pitEmbed.addField('\u200b','**Current Renown** - ' + json.player.stats.Pit.profile.renown)
            }
            message.channel.send(pitEmbed)
        }
        getPerson(`https://api.hypixel.net/player?key=e88a734d-1ead-4377-ac1d-221a6d441d38&name=${pitPerson}`)
    }
}