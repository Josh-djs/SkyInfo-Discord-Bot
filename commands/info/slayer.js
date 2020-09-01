module.exports = {
    name: "slayer",
    description: "gives info about a specified slayer",
    usage: "<slayer> <rewards/lvl>",
    category: "info",
    run: async (client, message, args) => {
        const send = require('quick.hook')
        const { MessageEmbed } = require('discord.js')
        switch (args[1]) {
            case 'tara':
            case 'tarantula':
                switch (args[2]) {
                    case 'lvl':
                    case 'level':
                        tarantulalvl = new MessageEmbed()
                            .setColor('#610dde')
                            .setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/7/79/Tarantula_broodfather.png/revision/latest?cb=20200425074841')
                            .addField('These are the Tarantula Bosses and Abilities', 'Tier I:\n <:heart:714983450293174332> Health: 750\n<:ironsword:714984816856137814> Damage: 35/s\n Combat Jump - The spider will often try to jump behind you.\n\n Tier II:\n<:heart:714983450293174332> Health: 30,000\n<:ironsword:714984816856137814> Damage: 110/s\n Combat Jump - The spider will often try to jump behind you.\n Noxious - Deals AOE dmg every second, reducing your healing by 50%\n\n Tier III\n<:heart:714983450293174332> Health: 900,000\n<:ironsword:714984816856137814> Damage: 525/s\n Combat Jump - The spider will often try to jump behind you.\n Noxious - Deals AOE dmg every second, reducing your healing by 50%\n\n Tier IV:\n<:heart:714983450293174332> Health: 2,400,000\n<:ironsword:714984816856137814> Damage: 1325/s\n Combat Jump - The spider will often try to jump behind you.\n Noxious - Deals AOE damage every second, reducing healing by 50%')
                            .setFooter('SkyInfo 2020')
                        send(message.channel, tarantulalvl, {
                            name: "SlayerHelp",
                            icon: "https://vignette.wikia.nocookie.net/hypixel-skyblock/images/0/0f/Maddox_the_Slayer.png/revision/latest/top-crop/width/360/height/450?cb=20191206025742"
                        })
                        break;
                    case 'rewards':
                        tarantularewards = new MessageEmbed()
                            .setColor('#610dde')
                            .setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/7/79/Tarantula_broodfather.png/revision/latest?cb=20200425074841')
                            .addField('Tarantula Leveling Rewards', 'Lvl 1: \n - +1% crit dmg \n - Spider Ring Recipe \n - Tarantula Web (guarunteed 100%),\n - Toxic Arrow Poison (occasional 20% t2+)\n - Bite Rune (rare 5% t2+) \n \n Lvl 2: \n - +1% Crit dmg \n - Recluse fang recipe\n - tarantula silk recipe\n - Spider Catalyst (extraordinary 1% t3+)\n \n Lvl 3: \n - +1% Crit Dmg\n - Scorpion Bow recipe\n\n Lvl 4:\n - +1% Crit Dmg\n - Tarantula Leggings recipe \n - Tarantula Boots recipe\n - Bane of Arthropods VI book (extraordinary 1% t3+)\n\n Lvl 5:\n - +2 Crit Dmg\n - +1x Tarantula Minion \n - Tarantula Minion recipe \n - Tarantula Helmet recipe\n - Tarantula Chestplate recipe \n - Fly Swatter (Pray RNGesus <1% t3+)\n\n Lvl 6:\n - +2% Crit Dmg\n - Slayer Veteran Bonus\n - Scorpion Foil recipe\n - Flycatcher recipe\n - Tarantula Talisman (Pray RNGesus <1% t3+)\n\n Lvl 7:\n - +2% Crit Dmg\n - +1x Survivor Cube\n - Spider Artifact Recipe\n - Mosquito Bow recipe\n - Digested Mosquito (Pray RNGesus <1% t4+)\n\n Lvl 8:\n - +2% Crit Dmg\n - Perk: +10% Alchemy xp\n\n Lvl 9:\n - +3% Crit Dmg')
                            .setFooter('SkyInfo 2020')
                        send(message.channel, tarantularewards, {
                            name: "SlayerHelp",
                            icon: "https://vignette.wikia.nocookie.net/hypixel-skyblock/images/0/0f/Maddox_the_Slayer.png/revision/latest/top-crop/width/360/height/450?cb=20191206025742"
                        })
                        break;
                }
                break;
            case 'sven':
                switch (args[2]) {
                    case 'lvl':
                    case 'level':
                        svenlvl = new MessageEmbed()
                            .setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/c/c8/Wolf.png/revision/latest/scale-to-width-down/310?cb=20190718171228')
                            .setColor('#ccc8c8')
                            .addField('These are the Sven Bosses and Abilities:', 'Tier I:\n<:heart:714983450293174332> Health: 2000\n<:ironsword:714984816856137814> Damage: 60/s\n Agile - The wolf is small and fast, making it hard to hit.\n\n Tier II:\n<:heart:714983450293174332> Health: 40,000\n<:ironsword:714984816856137814> Damage: 200/s + 10 True Damage/s\n Agile - The wolf is small and fast, making it hard to hit.\n True Damage - Ignores your defense. Very painful.\n\n Tier III:\n<:heart:714983450293174332> Health: 750,000 \n<:ironsword:714984816856137814> Damage: 450/s + 50 True Damage/s\nAgile - The wolf is small and fast, making it hard to hit.\n True Damage - Ignores your defense. Very painful.\n Call The Pups! - at 50% health, calls its deadly pack of pups.\n\n Tier IV:\n<:heart:714983450293174332> Health: 2,000,000\n<:ironsword:714984816856137814> Damage: 2000/s + 200 True Damage/s\n Agile - The wolf is small and fast, making it hard to hit.\n True Damage - Ignores your defense. Very painful.\n Call The Pups! - at 50% health, calls its deadly pack of pups.')
                            .setFooter('SkyInfo 2020')
                        send(message.channel, svenlvl, {
                            name: "SlayerHelp",
                            icon: "https://vignette.wikia.nocookie.net/hypixel-skyblock/images/0/0f/Maddox_the_Slayer.png/revision/latest/top-crop/width/360/height/450?cb=20191206025742"
                        })
                        break;
                    case 'rewards':
                        svenrewards = new MessageEmbed()
                            .setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/c/c8/Wolf.png/revision/latest/scale-to-width-down/310?cb=20190718171228')
                            .setColor('#ccc8c8')
                            .addField('These are the rewards for each level in Sven Slayer', 'Lvl 1:\n - +1 Speed\n - Red Claw Talisman Recipe\n - Wolf Tooth drop (guarunteed 100%)\n - Hamster Wheel (occasional 20% t2+)\n\nLvl 2:\n - +2 Health\n - Radiant Power Orb Recipe\n - Golden Tooth Recipe\n - Spirit Rune I drop (rare 5% t2+)\n\nLvl 3:\n - +1 Speed\n - +1x Maddox Batphone\n - Shaman Sword Recipe\n\n Lvl 4:\n - +2 Health\n - Mastiff Armor Recipe\n - Critical VI book drop (extraordinary 1% t3+)\n\nLvl 5:\n - +1% Crit Dmg\n - Red Claw Ring Recipe\n - Edible Mace Recipe\n - Weird Tuba Recipe\n - Red Claw Artifact Recipe\n - Red Claw Egg drop (Pray RNGesus <1% t3+)\n\n Lvl 6:\n - +3 Health\n - slayer veteran bonus\n - Mana Flux Power Orb Recipe\n - Pooch Sword Recipe\n - Pack Armor Recipe\n Couture Rune drop (Pray RNGesus <1% t4+)\n\n Lvl 7:\n - Hunter Talisman Recipe\n - Hunter Ring Recipe\n - OverFlux Power Orb Recipe\n - OverFlux Capacitor drop (Pray RNGesus <1% t4+)\n - Grizzly Bait drop (Pray RNGesus <1% t4+)\n\n Lvl 8:\n - +1% Speed\n - Perk: Lose 5% less coins on death\n\n Lvl 9:\n - +5 Health')
                            .setFooter('SkyInfo 2020')
                        send(message.channel, svenrewards, {
                            name: "SlayerHelp",
                            icon: "https://vignette.wikia.nocookie.net/hypixel-skyblock/images/0/0f/Maddox_the_Slayer.png/revision/latest/top-crop/width/360/height/450?cb=20191206025742"
                        })
                        break;
                }
                break;
            case 'rev':
            case 'revenant':
                switch (args[2]) {
                    case 'lvl':
                    case 'level':
                        revenantlvl = new MessageEmbed()
                            .setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/8/8e/Revenant_Horror.png/revision/latest/top-crop/width/360/height/450?cb=20200303152021')
                            .setColor('#1fbf82')
                            .addField('These are the Revenant Bosses and Abilities', 'Tier I:\n<:heart:714983450293174332> Health: 500\n<:ironsword:714984816856137814> Damage: 15/s\n Life Drain - Drains life every few seconds\n\n Tier II:\n<:heart:714983450293174332> Health: 20,000\n<:ironsword:714984816856137814> Damage: 50/s\n Life Drain - Drains health every few seconds.\n Pestilence - Deals AOE dmg every second, shredding armor by 25%.\n\nTier III:\n<:heart:714983450293174332> Health: 400,000\n<:ironsword:714984816856137814> Damage: 300/s\n Life Drain - Drains health every few seconds.\n Pestilence - Deals AOE dmg every second, shredding armor by 25%.\n Enrage - Gets real mad once in a while.\n\n Tier IV:\n<:heart:714983450293174332> Health: 1,500,000\n<:ironsword:714984816856137814> Damage: 1000/s\n Life Drain - Drains health every few seconds.\n Pestilence - Deals AOE dmg every second, shredding armor by 25%.\n Enrage - Gets real mad once in a while.')
                            .setFooter('SkyInfo 2020')
                        send(message.channel, revenantlvl, {
                            name: "SlayerHelp",
                            icon: "https://vignette.wikia.nocookie.net/hypixel-skyblock/images/0/0f/Maddox_the_Slayer.png/revision/latest/top-crop/width/360/height/450?cb=20191206025742"
                        })
                        break;
                    case 'rewards':
                        revenantrewards = new MessageEmbed()
                            .setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/8/8e/Revenant_Horror.png/revision/latest/top-crop/width/360/height/450?cb=20200303152021')
                            .setColor('#1fbf82')
                            .addField('Revenant Leveling Rewards:', 'Lvl 1:\n - +2 Health\n - Wand of Healing Recipe\n - Revenant Flesh drop (guarunteed 100%)\n - Foul Flesh drop (occasional 20% t2+)\n\nLvl 2:\n - +2 Health\n - Zombie Ring Recipe\n - Revenant Viscera Recipe\n - Pestilence Rune drop (rare 5% t2+)\n\n Lvl 3:\n - +3 Health\n - +1x Undead Catalyst\n - Revenant Falchion Recipe\n - Wand of Mending Recipe\n - Crystallized Heart Recipe\n - Undead Catalyst Drop (Extraordinary 1% t2+)\n\n Lvl 4:\n - +3 Health\n - Revenant Leggings Recipe\n - Revenant Boots Recipe\n - Smite VI book drop (extraordinary 1% t3+)\n\n Lvl 5:\n - +4 Health\n - +1x Revenant Minion\n - Revenant Minion Recipe\n - Revenant Chestplate Recipe\n - Voodoo Doll Recipe\n Devour Ring Recipe\n - Beheaded Horror (Pray RNGesus <1% t3+)\n\n Lvl 6:\n - +4 Health\n - +1x Revenant Catalyst\n - Slayer Veteran Bonus\n - Wand of Restoration Recipe\n - Revived Heart Recipe\n - Reaper Falchion Recipe\n - Revenant Catalyst Drop (Pray RNGesus <1% t2+)\n - Snake Rune drop (Pray RNGesus <1% t4+)\n')
                            .addField('Continued', ' Lvl 7:\n - +5 Health\n - Reaper Mask Recipe\n - Reaper Scythe Recipe\n - Zombie Artifact Recipe\n - Scythe Blade drop (Pray RNGesus <1% t4+)\n\n Lvl 8:\n - +5 Health\n - Perk: +50% Natural Health Regen\n\n Lvl 9:\n - +6 Health')
                            .setFooter('SkyInfo 2020')
                        send(message.channel, revenantrewards, {
                            name: "SlayerHelp",
                            icon: "https://vignette.wikia.nocookie.net/hypixel-skyblock/images/0/0f/Maddox_the_Slayer.png/revision/latest/top-crop/width/360/height/450?cb=20191206025742"
                        })
                        break;
                }
                break;
        }
    }
}