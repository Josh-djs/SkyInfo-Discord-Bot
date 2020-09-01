module.exports = {
    name: "open",
    description: "opens a crate",
    usage: "<rarity of the crate you want to open> (common, uncommon, rare, epic, legendary, mythic)",
    run: async (client, message, args) => {
        client.nerdwarsAPI.ensure(message.guild.id, {})
        let rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic']
        let rarityIDS = {'common':1,"uncommon":2,"rare":3,"epic":4,"legendary":5,"mythic":6}
        if(!client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Health`)) return message.channel.send("You must use s.start before playing!")
        let crateMoneys = {'common':1000, 'uncommon':3000, 'rare':7500, 'epic':12000, 'legendary':20000, 'mythic':0}
        function openCrate(rar) {
            let allItems = { 1:['Hunting Knife','Short Sword'], 2: ['Machete'], 3: ['Longbow'], 4: ['Barrett M82','0.50 Caliber Rifle'], 5: ['Daishō'], 6: ['Intetsu'] }
            let itemsToGet = 1
            let itemsFromCrate = []
            for (let i = 0; i < itemsToGet; i++) {
                let chance = Math.random()

                switch(rar) {
                    case 'common':
                        if(chance <= 0.80) {
                            itemsFromCrate.push(allItems[rarityIDS[rar]][Math.floor(Math.random() * allItems[rarityIDS[rar]].length)] + ` (${rarities[rarityIDS[rar] - 1]})`)
                        } else if (chance > 0.80 && chance <= 0.92) {
                            itemsFromCrate.push(allItems[rarityIDS[rar] + 1][Math.floor(Math.random() * allItems[rarityIDS[rar] + 1].length)] + ` (${rarities[rarityIDS[rar]]})`)
                        } else if (chance > 0.92 && chance <= 0.97) {
                            itemsFromCrate.push(allItems[rarityIDS[rar] + 2][Math.floor(Math.random() * allItems[rarityIDS[rar] + 2].length)] + ` (${rarities[rarityIDS[rar] + 1]})`)
                        } else if (chance > 0.97 && chance <= 0.998) {
                            itemsFromCrate.push(allItems[rarityIDS[rar] + 3][Math.floor(Math.random() * allItems[rarityIDS[rar] + 3].length)] + ` (${rarities[rarityIDS[rar] + 2]})`)
                        } else if (chance >= 0.999) {
                            itemsFromCrate.push(allItems[rarityIDS[rar] + 4][Math.floor(Math.random() * allItems[rarityIDS[rar] + 4].length)] + ` (${rarities[rarityIDS[rar] + 3]})`)
                        }
                        break;
                    case 'uncommon':
                        if(chance <= 0.80) {
                            itemsFromCrate.push(allItems[rarityIDS[rar]][Math.floor(Math.random() * allItems[rarityIDS[rar]].length)] + ` (${rarities[rarityIDS[rar] - 1]})`)
                        } else if (chance > 0.80 && chance <= 0.91) {
                            itemsFromCrate.push(allItems[rarityIDS[rar] + 1][Math.floor(Math.random() * allItems[rarityIDS[rar] + 1].length)] + ` (${rarities[rarityIDS[rar]]})`)
                        } else if (chance > 0.91 && chance <= 0.97) {
                            itemsFromCrate.push(allItems[rarityIDS[rar] + 2][Math.floor(Math.random() * allItems[rarityIDS[rar] + 2].length)] + ` (${rarities[rarityIDS[rar] + 1]})`)
                        } else if (chance > 0.97 && chance <= 0.999) {
                            itemsFromCrate.push(allItems[rarityIDS[rar] + 3][Math.floor(Math.random() * allItems[rarityIDS[rar] + 3].length)] + ` (${rarities[rarityIDS[rar] + 2]})`)
                        } else {
                            itemsFromCrate.push(allItems[rarityIDS[rar] - 1][Math.floor(Math.random() * allItems[rarityIDS[rar] - 1].length)] + ` (${rarities[rarityIDS[rar] - 2]})`)
                        }
                        break;
                    case 'rare':
                        
                }
                
            }
            return (itemsFromCrate)
        }
        let Level = getLevel(client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.XP`))
        if (Number.isNaN(Level)) Level = 0

        if (!args[1]) return message.channel.send('Specify a rarity!')
        let rarity = args[1].toLowerCase()
        for (let i = 0; i < rarities.length; i++) {
            if (rarity === rarities[i]) {
                let coinsFromCrate = Math.floor(crateMoneys[rarity] * (Math.random() * 15 / 100))
                if (!client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.Crates.${rarity}`)) return message.channel.send(`You have no ${rarity} crates!`)
                client.nerdwarsAPI.dec(message.guild.id, `${message.author.id}.Crates.${rarity}`)
                let allthingsGotten = openCrate(rarity)
                allthingsGotten.forEach(item => {
                    if(client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.inventory.${item}`)) {
                        client.nerdwarsAPI.inc(message.guild.id, `${message.author.id}.inventory.${item}`)
                    } else {
                        client.nerdwarsAPI.set(message.guild.id, 1 ,`${message.author.id}.inventory.${item}`)
                    }
                })
                let totalCoins = client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.Coins`) + coinsFromCrate
                client.nerdwarsAPI.set(message.guild.id, totalCoins,`${message.author.id}.stats.Coins`)
                let xpGotten;
                if(rarity === 'common') {
                    xpGotten = 5
                } else if(rarity === 'uncommon') {
                    xpGotten = 7
                } else if(rarity === 'rare') {
                    xpGotten = 10
                } else if(rarity === 'epic') {
                    xpGotten = 13
                } else if(rarity === 'legendary') {
                    xpGotten = 17
                } else if(rarity === 'mythic') {
                    xpGotten = 25
                }
                let totalXP = client.nerdwarsAPI.get(message.guild.id, `${message.author.id}.stats.XP`) + xpGotten
                client.nerdwarsAPI.set(message.guild.id, totalXP,`${message.author.id}.stats.XP`)
                return message.channel.send(`From your **${rarity} crate**, you got: \`\`\`diff
- ${coinsFromCrate} Coins\n- ${allthingsGotten.join(`(${rarity})\n- `)}

+ ${xpGotten} XP\`\`\`
                `)
            }
        }
    }
}
function getLevel(XP) {
    let BASE = 30
    let GROWTH = 10
    let REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH
    let REVERSE_CONST = REVERSE_PQ_PREFIX
    let GROWTH_DIVIDES_2 = 2 / GROWTH

    return (1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * XP)).toFixed(1)
}