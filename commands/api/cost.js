const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "cost",
    description: "calculates the cost of getting from one alchemy level to another using specified ingredients",
    category: "api",
    run: async (client, message, args) => {
        let items = ["melon", "cane", "e_ferm_spider_eye", "spider_eye"];
        let itemXP = [900, 54000, 45000, 30];
        const xpPerLevel = [0, 50, 175, 375, 675, 1175, 1925, 2925, 4425, 6425, 9925, 14925, 22425, 32425, 47425, 67425, 97425, 147425, 222425, 322425, 522425, 822425, 1222425, 1722425, 2322425, 3022425, 3822425, 4722425, 5722425, 6822425, 8022425, 9322425, 10722425, 12222425, 13822425, 15522425, 17322425, 19222415, 21322425, 23322425, 25522425, 27822425, 30222425, 32722425, 38072425, 40972425, 44072425, 47472425, 51172425, 55172425];

        let helpEmbed = new MessageEmbed()
        .setDescription('Correct Usage:\n\ns.cost <alch lvl> <target lvl> <material>')
        .setFooter('Note: The valid items right now are:\n - cane\n - melon\n - spider_eye\n - e_ferm_spider_eye');
        if(!args[1] || !args[2] || !args[3]) return message.channel.send(helpEmbed)

        let item = args[3].toLowerCase();
        let lvl = parseFloat(args[1]);
        let endlvl = parseFloat(args[2]);
        let itemID = 0;
        if(!item) {
            return message.channel.send(helpEmbed)
        };
        if(lvl >= 50 || lvl <= 0 || endlvl > 50 || endlvl <= 1) {
            return message.channel.send("Level must be greater than 0 and less than 50, and end level must be greater than 1 and less than 50!")
        };
        for(let i = 0; i < items.length; i++) {
            if(item === items[i]) {
                itemID = i
            };
        };
        let xpneeded = xpPerLevel[endlvl - 1] - xpPerLevel[lvl - 1];
        let totalMaterials = xpneeded / itemXP[itemID];
        let totalCost = totalMaterials * client.alchPrices.get(items[itemID]);
        
        let priceEmbed = new MessageEmbed()
        .setDescription(`Getting to alchemy ${endlvl} from ${lvl}`)
        .addField(`Would use ${totalMaterials.toFixed(2)} ${items[itemID]}`, `Costing ${totalCost.toFixed(2)} coins\n and using ${xpneeded} alchemy xp`);
        message.channel.send(priceEmbed);
    }
};