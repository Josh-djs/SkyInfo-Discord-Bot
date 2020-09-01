// module.exports = {
//     name: "customitem",
//     description: "creates a custom item that can be spawned into survival worlds",
//     category: "fun",
//     run: async (client, message, args) => {
//         //defining the eventual code as a string so i can add to it after i collect the data
//         let itemCode = ''

//         //using message collectors to get all the info
//         await message.channel.send('What is the item id? (must be a valid minecraft item id - ex. diamond_sword)')
//         let itemID = await message.channel.awaitMessages(filter, { max: 1 })
//         itemID = itemID.first().content

//         await message.channel.send('What is the name of the item?')
//         let itemName = await message.channel.awaitMessages(filter, { max: 1 })
//         itemName = itemName.first().content

//         await message.channel.send('Does it have an enchantment glow?')
//         let enchantGlow = await message.channel.awaitMessages(filter, { max: 1 })
//         if (enchantGlow.first().content.toLowerCase() === 'yes') { // only give enchant glow if they say yes
//             enchantGlow = true
//         } else {
//             enchantGlow = false
//         }

//         let itemRarities = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic', 'special', 'very_special']
//         await message.channel.send(`What rarity is the item? (choose between ${itemRarities.join(', ')})`)
//         let itemRarity = await message.channel.awaitMessages(filter, { max: 1 })
//         itemRarity = itemRarity.first().content
//         let isValidRar = false
//         for (i = 0; i < itemRarities.length; i++) {
//             if (itemRarities[i] === itemRarity) {
//                 isValidRar = true
//             }
//         }
//         if (!isValidRar) return message.channel.send('Invalid rarity!')

//         let itemTypes = ['sword', 'bow', 'helmet', 'chestplate', 'leggings', 'boots', 'accessory', 'cosmetic', 'fishing_rod']
//         await message.channel.send(`What type of item is it? (choose from ${itemTypes.join(', ')}`)
//         let itemType = await message.channel.awaitMessages(filter, { max: 1 })
//         itemType = itemType.first().content
//         let isValidType = false
//         for (i = 0; i < itemTypes.length; i++) {//check if the rarity is valid - checks agains the array above
//             if (itemTypes[i] === itemType) {
//                 isValidRar = true
//             }
//         }
//         if (!isValidType) return message.channel.send('Invalid type!')

//         await message.channel.send(`Send a message with the damage, strength, crit chance, crit damage, and attack speed attributes of the item (leave at 0 if un-applicable)\n\nAlso make sure to separate all values with spaces`)
//         let damageValues = await message.channel.awaitMessages(filter, { max: 1 })
//         let damageArgs = damageValues.first().content.split(" ") // using multiple values so it doesnt flood channels with continous messages
//         let damage = damageArgs[0]
//         let strength = damageArgs[1]
//         let critChance = damageArgs[2]
//         let critDamage = damageArgs[3]
//         let attackSpeed = damageArgs[4]

//         await message.channel.send(`Send a message with the health, defense, intelligence, and speed attributes of the item (leave at 0 if un-applicable)\n\nAlso make sure to separate all values with spaces`)
//         let defenseValues = await message.channel.awaitMessages(filter, { max: 1 })
//         let defenseArgs = defenseValues.first().content.split(" ") // using multiple values so it doesnt flood channels with continous messages
//         let health = defenseArgs[0]
//         let defense = defenseArgs[1]
//         let intelligence = defenseArgs[2]
//         let speed = defenseArgs[3]

//         await message.channel.send('Should there be an ability?')
//         let ability = await message.channel.awaitMessages(filter, { max: 1 })
//         if (ability.first().content.toLowerCase() === 'yes') { // only give ability
//             ability = true
//         } else {
//             ability = false
//         }
//         let abilityName;
//         let abilityValue;
//         let abilityTrigger;
//         if (ability) { // if there is an ability, collect all the info about the ability
//             await message.channel.send('What is the ability name?')
//             let abilityCollect = await message.channel.awaitMessages(filter, { max: 1 })
//             abilityName = abilityCollect.first().content

//             await message.channel.send('What is the ability description?')
//             let abilityvalCollect = await message.channel.awaitMessages(filter, { max: 1 })
//             abilityValue = abilityvalCollect.first().content

//             await message.channel.send('Is the ability triggered by right click?')
//             let abilitytriggerCollect = await message.channel.awaitMessages(filter, { max: 1 })
//             abilityTrigger = abilitytriggerCollect.first().content
//             if (abilityTrigger.first().content.toLowerCase() === 'yes') {
//                 abilityTrigger = true
//             } else {
//                 abilityTrigger = false
//             }
//         }

//         // actually add it all to the string

//         itemCode += `/give @p ${itemID}{display:{Name:'{"text":"${itemName}","color}'}}`

//     }
// }