module.exports = {
    name: "price",
    description: "Gets the price of an item on the bazaar",
    usage: "<item>",
    category: "api",
    run: async (client, message, args) => {
        const fetch = require('node-fetch')
        const {
            MessageEmbed
        } = require("discord.js")

        let product = args[1].toUpperCase()

        const get_products = async url => {
            let allProducts = await fetch(url)
            let json = await allProducts.json()
            for (let i = 0; i < json.productIds.length; i++) {
                if (product === json.productIds[i]) {
                    let productQuery = await fetch(`https://api.hypixel.net/skyblock/bazaar/product?key=e88a734d-1ead-4377-ac1d-221a6d441d38&productId=${product}`)
                    let productInfo = await productQuery.json()
                    let itemPrice = new MessageEmbed()
                        .setTitle(`Price for ${productInfo.product_info.product_id.toLowerCase().split("_").join(" ")}`)
                        .addField('Buy Price:', productInfo.product_info.quick_status.sellPrice)
                        .addField('Sell Price:', productInfo.product_info.quick_status.buyPrice)
                        .addField('Sell Orders:', productInfo.product_info.quick_status.sellOrders)
                        .addField('Buy Orders:', productInfo.product_info.quick_status.buyOrders)
                    return message.channel.send(itemPrice);
                }
            }
            return message.channel.send('Please specify a valid product!');
        }
        get_products('https://api.hypixel.net/skyblock/bazaar/products?key=e88a734d-1ead-4377-ac1d-221a6d441d38');
    }
}