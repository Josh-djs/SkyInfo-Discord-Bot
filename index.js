const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzAyOTg2Nzg0NzE1MzA5MDk3.XqIC9w.KCv3aBiUO_3DuwTTdwyprS9kcx4';
const PREFIX = 's.';


const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}
bot.on('ready', () => {
    console.log('this bot is online');
    bot.user.setActivity('SkyBlock nerds', { type: "WATCHING" });
})


const snekfetch = require('snekfetch')


bot.on('message', message => {
    if (!message.content.toLowerCase().startsWith(PREFIX)) return;
    const args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'info':
            let version = 'Beta V1.0'
            let info = new Discord.MessageEmbed()
                .setAuthor('SkyInfo', 'https://images.discordapp.net/avatars/584547343995633730/7007012dfe47b5b078940e98a6357d2c.png?size=512')
                .setTitle('Info')
                .setDescription('A bot created by Josh#5371')
                .addFields(
                    { name: 'Version:', value: version },
                    { name: 'Please Note:', value: 'This bot is still under heavy development, so all suggestions are apreciated!' },
                )
                .setTimestamp()
                .setFooter('SkyInfo')
            message.channel.send(info)
            break;
        case 'kick':
            if (!message.member.roles.cache.find(r => r.name === "Staff Team"))
                return message.channel.send("You do not have permission to do that!")
            else
                bot.commands.get('kick').execute(message, args);
            break;
        case 'ban':
            if (!message.member.roles.cache.find(r => r.name === "Staff Team"))
                return message.channel.send("You do not have permission to do that!")
            else
                bot.commands.get('ban').execute(message, args);
            break;
        case 'easter':
            bot.commands.get('easter').execute(message)
            break;
        case 'mute':
            bot.commands.get('mute').execute(message, args)
            break;
        case 'slayer':
            bot.commands.get('slayer').execute(message, args)
            break;
        case 'help':
            bot.commands.get('help').execute(message)
            break;
        case 'slayerhelp':
            bot.commands.get('slayerhelp').execute(message)
            break;
        case 'clear':
            if (!message.member.roles.cache.find(r => r.name === "Staff Team"))
                return message.channel.send("You do not have permission to do that!")
            else
                bot.commands.get('clear').execute(message, args);
            break;
        case 'play':
            bot.commands.get('play').execute(message, args)
            break;
        case 'suggest':
            bot.commands.get('suggest').execute(message, args)
            break;
        //in progress
        case 'list':
            bot.commands.get('list').execute(message, args)
            break;
        case 'ids':
            const ids = new Discord.MessageEmbed()
            .addField('Item Ids:', 'BROWN_MUSHROOM\nINK_SACK:3\nINK_SACK:4\nTARANTULA_WEB\nCARROT_ITEM\nENCHANTED_POTATO\nENCHANTED_SLIME_BALL\nENCHANTED_GOLDEN_CARROT\nENCHANTED_RED_MUSHROOM\nENCHANTED_RABBIT_HIDE\nENCHANTED_BIRCH_LOG\nENCHANTED_GUNPOWDER\nENCHANTED_MELON\nENCHANTED_SUGAR\nCACTUS\nENCHANTED_BLAZE_ROD\nENCHANTED_CAKE\nPUMPKIN\nENCHANTED_BROWN_MUSHROOM\nWHEAT\nENCHANTED_RAW_SALMON\nENCHANTED_GLISTERING_MELON\nPRISMARINE_SHARD\nENCHANTED_EMERALD\nPROTECTOR_FRAGMENT\nENCHANTED_SPIDER_EYE\nRED_MUSHROOM\nENCHANTED_MELON_BLOCK\nMUTTON\nDIAMOND\nWISE_FRAGMENT\nCOBBLESTONE\nRAW_FISH\nSPIDER_EYE\nENCHANTED_PUFFERFISH\nPOTATO_ITEM\nENCHANTED_HUGE_MUSHROOM_1\nENCHANTED_COBBLESTONE\nENCHANTED_HUGE_MUSHROOM_2\nPORK\nPRISMARINE_CRYSTALS\nICE\nHUGE_MUSHROOM_1\nHUGE_MUSHROOM_2\nLOG_2:1\nENCHANTED_SNOW_BLOCK\nSTRING\nGOLDEN_TOOTH\nRABBIT_FOOT\nREDSTONE\nENCHANTED_CACTUS_GREEN\nENCHANTED_CARROT_ON_A_STICK\nENCHANTED_LAPIS_LAZULI_BLOCK\nENCHANTED_COOKIE\nENCHANTED_ENDSTONE\nENCHANTED_SAND\nENCHANTED_STRING\n')
            .addField('continued', 'STRONG_FRAGMENT\nSLIME_BALL\nENCHANTED_ACACIA_LOG\nSNOW_BALL\nENCHANTED_EGG\nSAND\nRAW_CHICKEN\nENCHANTED_LAPIS_LAZULI\nENCHANTED_GHAST_TEAR\nENCHANTED_COCOA\nSEEDS\nENCHANTED_LEATHER\nENCHANTED_SPONGE\nHAY_BLOCK\nINK_SACK\nFLINT\nENCHANTED_SPRUCE_LOG\nWOLF_TOOTH\nENCHANTED_ROTTEN_FLESH\nENCHANTED_GRILLED_PORK\nENCHANTED_NETHER_STALK\nENCHANTED_REDSTONE_BLOCK\nENCHANTED_QUARTZ_BLOCK\nGREEN_CANDY\nENCHANTED_REDSTONE\nENCHANTED_REDSTONE_LAMP\nGRAVEL\nMELON\nENCHANTED_LAVA_BUCKET\nENCHANTED_PACKED_ICE\nRAW_FISH:3\nENCHANTED_PRISMARINE_SHARD\nENCHANTED_IRON_BLOCK\nENCHANTED_CARROT_STICK\nBONE\nRAW_FISH:2\nRAW_FISH:1\nREVENANT_FLESH\nENCHANTED_PORK\nENCHANTED_GLOWSTONE\nFEATHER\nNETHERRACK\nSPONGE\nBLAZE_ROD\nENCHANTED_DARK_OAK_LOG\nYOUNG_FRAGMENT\nENCHANTED_CLOWNFISH\nENCHANTED_GOLD\nENCHANTED_RAW_CHICKEN\nENCHANTED_WATER_LILY\nLOG:1\nCATALYST\nLOG:3\nLOG:2\nENCHANTED_GLOWSTONE_DUST\nENCHANTED_INK_SACK\nENCHANTED_CACTUS\nENCHANTED_SUGAR_CANE\nENCHANTED_COOKED_SALMON\nENCHANTED_SEEDS\nLOG\nGHAST_TEAR')
            .addField('continued', '\nENCHANTED_ENDER_PEARL\nUNSTABLE_FRAGMENT\nPURPLE_CANDY\nENCHANTED_FERMENTED_SPIDER_EYE\nENCHANTED_GOLD_BLOCK\nENCHANTED_JUNGLE_LOG\nENCHANTED_FLINT\nIRON_INGOT\nENCHANTED_EMERALD_BLOCK\nENCHANTED_CLAY_BALL\nGLOWSTONE_DUST\nGOLD_INGOT\nREVENANT_VISCERA\nTARANTULA_SILK\nENCHANTED_MUTTON\nSUPER_EGG\nSUPER_COMPACTOR_3000\nENCHANTED_IRON\nSTOCK_OF_STONKS\nENCHANTED_HAY_BLOCK\nENCHANTED_BONE\nENCHANTED_PAPER\nENCHANTED_DIAMOND_BLOCK\nSUPERIOR_FRAGMENT\nEMERALD\nENCHANTED_RABBIT_FOOT\nHOT_POTATO_BOOK\nENCHANTED_ICE\nCLAY_BALL\nOLD_FRAGMENT\nGREEN_GIFT\nPACKED_ICE\nWATER_LILY\nHAMSTER_WHEEL\nLOG_2\nENCHANTED_OBSIDIAN\nENCHANTED_COAL\nCOAL\nENCHANTED_QUARTZ\nENCHANTED_COAL_BLOCK\nENDER_PEARL\nENCHANTED_PRISMARINE_CRYSTALS\nENCHANTED_WET_SPONGE\nENCHANTED_RAW_FISH\nENDER_STONE\nQUARTZ\nFOUL_FLESH\nRAW_BEEF\nENCHANTED_EYE_OF_ENDER\nSUGAR_CANE\nMAGMA_CREAM\nRED_GIFT\nENCHANTED_RAW_BEEF\nENCHANTED_SLIME_BLOCK\nENCHANTED_FEATHER\nENCHANTED_OAK_LOG\nRABBIT_HIDE\nWHITE_GIFT\nNETHER_STALK\nRABBIT\nSULPHUR')
            .addField('continued','ENCHANTED_CARROT\nENCHANTED_PUMPKIN\nROTTEN_FLESH\nENCHANTED_COOKED_FISH\nOBSIDIAN\nENCHANTED_MAGMA_CREAM\nENCHANTED_FIREWORK_ROCKET\nLEATHER\nENCHANTED_COOKED_MUTTON\nENCHANTED_RABBIT\nENCHANTED_BREAD\nENCHANTED_CHARCOAL\nENCHANTED_BLAZE_POWDER\nSUMMONING_EYE\nSNOW_BLOCK\nENCHANTED_BAKED_POTATO\nCOMPACTOR\nENCHANTED_DIAMOND')
            message.channel.send(ids)
            break;
        case 'price':
            let Item = args[1].toUpperCase();

            Item()
                let bazaarapi = `https://api.hypixel.net/skyblock/bazaar/product?key=e88a734d-1ead-4377-ac1d-221a6d441d38&productId=${args[1]}`
                snekfetch.get(bazaarapi).then(r => {
                    if (!bazaarapi === 'true') return message.channel.send('Please provide a VALID item! You can see all the valid ids with s.ids')
                let buyPrice = r.body.product_info.quick_status.sellPrice;
                let productId = r.body.product_info.quick_status.productId;
                let buyOrders = r.body.product_info.quick_status.buyOrders;
                let buyVolume = r.body.product_info.quick_status.buyVolume;
                // console.log(productinfo)
                if (!Item) return message.channel.send('Please provide an item!')


                const bazaarprice = new Discord.MessageEmbed()
                .setAuthor(productId)
                .addField('Buy Price', buyPrice)
                .addField('Buy Orders:', buyOrders)
                .addField('Buy Volume:', buyVolume)
                message.channel.send(bazaarprice)
            })
    }

})

bot.login(token);