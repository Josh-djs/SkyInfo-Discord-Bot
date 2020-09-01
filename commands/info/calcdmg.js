module.exports = {
    name: "calcdmg",
    description: "calculates damage based on a few factors",
    usage: "<weapon damage> <total strength> <total crit damage> <combat level>",
    category: "info",
    run: async (client, message, args) => {
        async function calcdmg() {
            let colMessages = ["Do you have Giant killer?", 'Do you have Ender slayer?', 'Do you have first strike?']
            let weaponDMG = parseFloat(args[1])
            let str = parseFloat(args[2])
            let critDMG = parseFloat(args[3]) / 100
            let combatLvl = parseFloat(args[4])
            if (isNaN(weaponDMG) || isNaN(str) || isNaN(critDMG) || isNaN(combatLvl)) {
                return message.channel.send('Correct usage:\n\ns.calcdmg <weapon damage> <strength> <crit damage> <combat level>')
            } else if (!weaponDMG > 0 || !str > 0 || !critDMG > 0 || !combatLvl > 0) {
                return message.channel.send('All values must be above 0!')
            } else if (weaponDMG > 1000 || str > 1000 || critDMG > 1000 || combatLvl > 50) {
                return message.channel.send('All values must be less than 1000! (with the exception of combat, it can only be up to lvl 50)')
            }
            const enchantFilter = m => m.author.id === message.author.id
            const collectEnchants = message.channel.createMessageCollector(enchantFilter)
            let enchants = 0
            let numcol = 0
            message.channel.send('Do you have Sharpness? (respond with yes or no)')
            collectEnchants.on('collect', m => {
                if (m.content === 'yes') {
                    if (numcol === 0) {
                        enchants += 0.25
                    }
                    if (numcol === 1) {
                        enchants += 0.25
                    }
                    if (numcol === 2) {
                        enchants += 0.60
                    }
                    if (numcol === 3) {
                        enchants += 1
                    }
                }
                if (numcol === 3) {
                    return collectEnchants.stop()
                }
                message.channel.send(colMessages[numcol])
                numcol++
            })
            collectEnchants.on('end', m => {
                let baseDMG = (5 + weaponDMG + (str / 5)) * (1 + (str / 100))
                let DMGmultiplier = 1 + (combatLvl * 0.04) + enchants
                let finalDMG = baseDMG * DMGmultiplier * (1 + critDMG)
                message.channel.send(`Your damage to end mobs should be:\n${finalDMG}`)
            })
        }
        calcdmg()
    }
}