const Discord = require('discord.js');
const bot = new Discord.Client();
const dotenv = require('dotenv').config()
const token = process.env.TOKEN;
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
            .addField('Item Ids:', ' BLAZE_ROD\nBONE\n BROWN_MUSHROOM\n CACTUS\n CARROT_ITEM\n CATALYST\n CLAY_BALL\n COAL\n COBBLESTONE\n COMPACTOR\n DIAMOND\n EMERALD\n ENCHANTED_ACACIA_LOG\n ENCHANTED_BAKED_POTATO\n ENCHANTED_BIRCH_LOG\n ENCHANTED_BLAZE_POWDER\n ENCHANTED_BLAZE_ROD\n ENCHANTED_BONE\n ENCHANTED_BREAD\n ENCHANTED_BROWN_MUSHROOM\n ENCHANTED_CACTUS_GREEN\n ENCHANTED_CACTUS\n ENCHANTED_CAKE\n ENCHANTED_CARROT_ON_A_STICK\n ENCHANTED_CARROT_STICK\n ENCHANTED_CARROT\n ENCHANTED_CHARCOAL\n ENCHANTED_CLAY_BALL\n ENCHANTED_CLOWNFISH\n ENCHANTED_COAL_BLOCK\n ENCHANTED_COAL\n ENCHANTED_COBBLESTONE\n ENCHANTED_COCOA\n ENCHANTED_COOKED_FISH\n ENCHANTED_COOKED_MUTTON\n ENCHANTED_COOKED_SALMON\n ENCHANTED_COOKIE\n ENCHANTED_DARK_OAK_LOG\n ENCHANTED_DIAMOND ENCHANTED_DIAMOND_BLOCK\n ENCHANTED_EGG\n ENCHANTED_EMERALD_BLOCK\n ENCHANTED_EMERALD\n ENCHANTED_ENDER_PEARL\n')
            .addField('continued', ' ENCHANTED_ENDSTONE\n ENCHANTED_EYE_OF_ENDER\n ENCHANTED_FEATHER\n ENCHANTED_FERMENTED_SPIDER_EYE\n ENCHANTED_FIREWORK_ROCKET\n ENCHANTED_FLINT\n ENCHANTED_GHAST_TEAR\n ENCHANTED_GLISTERING_MELON\n ENCHANTED_GLOWSTONE_DUST\n ENCHANTED_GLOWSTONE\n ENCHANTED_GOLD_BLOCK\n ENCHANTED_GOLD\n ENCHANTED_GOLDEN_CARROT\n ENCHANTED_GRILLED_PORK\n ENCHANTED_GUNPOWDER\n ENCHANTED_HAY_BLOCK\n ENCHANTED_HUGE_MUSHROOM_1\n ENCHANTED_HUGE_MUSHROOM_2\n ENCHANTED_ICE\n ENCHANTED_INK_SACK\n ENCHANTED_IRON_BLOCK\n ENCHANTED_IRON\n ENCHANTED_JUNGLE_LOG\n ENCHANTED_LAPIS_LAZULI_BLOCK\n ENCHANTED_LAPIS_LAZULI\n ENCHANTED_LAVA_BUCKET\n ENCHANTED_LEATHER\n ENCHANTED_MAGMA_CREAM\n ENCHANTED_MELON_BLOCK\n ENCHANTED_MELON\n ENCHANTED_MUTTON\n ENCHANTED_NETHER_STALK\n ENCHANTED_OAK_LOG\n ENCHANTED_OBSIDIAN\n ENCHANTED_PACKED_ICE\n ENCHANTED_PAPER\n ENCHANTED_PORK\n ENCHANTED_POTATO\n ENCHANTED_PRISMARINE_CRYSTALS\n ')
            .addField('continued', 'ENCHANTED_PRISMARINE_SHARD\n ENCHANTED_PUFFERFISH\n ENCHANTED_PUMPKIN\n ENCHANTED_QUARTZ_BLOCK\n ENCHANTED_QUARTZ\n ENCHANTED_RABBIT_FOOT\n ENCHANTED_RABBIT_HIDE\n ENCHANTED_RABBIT\n ENCHANTED_RAW_BEEF\n ENCHANTED_RAW_CHICKEN\n ENCHANTED_RAW_FISH\n ENCHANTED_RAW_SALMON\n ENCHANTED_RED_MUSHROOM\n ENCHANTED_REDSTONE_BLOCK\n ENCHANTED_REDSTONE_LAMP\n ENCHANTED_REDSTONE\n ENCHANTED_ROTTEN_FLESH\n ENCHANTED_SAND\n ENCHANTED_SEEDS\n ENCHANTED_SLIME_BALL\n ENCHANTED_SLIME_BLOCK\n ENCHANTED_SNOW_BLOCK\n ENCHANTED_SPIDER_EYE\n ENCHANTED_SPONGE\n ENCHANTED_SPRUCE_LOG\n ENCHANTED_STRING\n ENCHANTED_SUGAR_CANE\n ENCHANTED_SUGAR\n ENCHANTED_WATER_LILY\n ENCHANTED_WET_SPONGE\n ENDER_PEARL\n ENDER_STONE\n FEATHER\n FLINT\n FOUL_FLESH\n GHAST_TEAR\n GLOWSTONE_DUST\n GOLD_INGOT\n GOLDEN_TOOTH\n GRAVEL\n GREEN_CANDY\n GREEN_GIFT\n HAMSTER_WHEEL\n HAY_BLOCK\n HOT_POTATO_BOOK\n ')
            .addField('continued','HUGE_MUSHROOM_1\n HUGE_MUSHROOM_2\n ICE\n INK_SACK:3\n INK_SACK:4\n INK_SACK\n IRON_INGOT\n LEATHER\n LOG_2:1\n LOG_2\n LOG:1\n LOG:2\n LOG:3\n LOG\n MAGMA_CREAM\n MELON\n MUTTON\n NETHER_STALK\n NETHERRACK\n OBSIDIAN\n OLD_FRAGMENT\n PACKED_ICE\n PORK\n POTATO_ITEM\n PRISMARINE_CRYSTALS\n PRISMARINE_SHARD\n PROTECTOR_FRAGMENT\n PUMPKIN\n PURPLE_CANDY\n QUARTZ\n RABBIT_FOOT\n RABBIT_HIDE\n RABBIT\n RAW_BEEF\n RAW_CHICKEN\n RAW_FISH:1\n RAW_FISH:2\n RAW_FISH:3\n RAW_FISH\n RED_GIFT\n RED_MUSHROOM\n REDSTONE\n REVENANT_FLESH\n REVENANT_VISCERA\n ROTTEN_FLESH\n SAND\n SEEDS\n SLIME_BALL\n SNOW_BALL\n SNOW_BLOCK\n SPIDER_EYE\n SPONGE\n STOCK_OF_STONKS\n STRING\n STRONG_FRAGMENT\n SUGAR_CANE\n SULPHUR\n SUMMONING_EYE\n SUPER_COMPACTOR_3000\n SUPER_EGG\n SUPERIOR_FRAGMENT\n TARANTULA_SILK\n TARANTULA_WEB\n UNSTABLE_FRAGMENT\n WATER_LILY\n WHEAT\n WHITE_GIFT\n WISE_FRAGMENT\n WOLF_TOOTH\n YOUNG_FRAGMENT\n ')
            message.channel.send(ids)
            break;
        case 'price':

            if (!args[1]) {
                return message.channel.send('Please provide an item. You can see all valid ids with s.ids')
            }

            let bazaar_products = 'https://api.hypixel.net/skyblock/bazaar/products?key=e88a734d-1ead-4377-ac1d-221a6d441d38'
            snekfetch.get(bazaar_products).then(r => {
                let product_list = r.body.productIds

                args[1] = args[1].toUpperCase()
                for (i = 0; i < product_list.length; i++) {
                    if (args[1].localeCompare(product_list[i]) === 0) {
                        let bazaarapi = `https://api.hypixel.net/skyblock/bazaar/product?key=e88a734d-1ead-4377-ac1d-221a6d441d38&productId=${args[1]}`

                        snekfetch.get(bazaarapi).then(r => {
                            let buyPrice = r.body.product_info.quick_status.sellPrice;
                            let productId = r.body.product_info.quick_status.productId;
                            let buyOrders = r.body.product_info.quick_status.buyOrders;
                            let buyVolume = r.body.product_info.quick_status.buyVolume;


                            const bazaarprice = new Discord.MessageEmbed()
                                .setAuthor(productId)
                                .addField('Buy Price', buyPrice)
                                .addField('Buy Orders:', buyOrders)
                                .addField('Buy Volume:', buyVolume)
                            message.channel.send(bazaarprice)
                        })

                        return;
                    }
                }

                return message.channel.send("Please provide a __**valid**__ item. All valid items can be found with s.ids")
            })
    }

})

bot.login(token);