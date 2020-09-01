const fetch = require('node-fetch')
module.exports = async (client) => {
    let enchFermentedSpiderEyes = await fetch('https://api.hypixel.net/skyblock/bazaar/product?key=e88a734d-1ead-4377-ac1d-221a6d441d38&productId=ENCHANTED_FERMENTED_SPIDER_EYE').catch(e => console.error(e))
    let fermEyesRes = await enchFermentedSpiderEyes.json()
    client.alchPrices.set("e_ferm_spider_eye", fermEyesRes.product_info.quick_status.sellPrice)

    let melons = await fetch('https://api.hypixel.net/skyblock/bazaar/product?key=e88a734d-1ead-4377-ac1d-221a6d441d38&productId=ENCHANTED_MELON').catch(e => {return})
    let melonsRes = await melons.json()
    client.alchPrices.set("melon", melonsRes.product_info.quick_status.sellPrice)

    let spiderEyes = await fetch('https://api.hypixel.net/skyblock/bazaar/product?key=e88a734d-1ead-4377-ac1d-221a6d441d38&productId=SPIDER_EYE').catch(e => {return})
    let spiderEyesRes = await spiderEyes.json()
    client.alchPrices.set("spider_eye", spiderEyesRes.product_info.quick_status.sellPrice)

    let cane = await fetch('https://api.hypixel.net/skyblock/bazaar/product?key=e88a734d-1ead-4377-ac1d-221a6d441d38&productId=ENCHANTED_SUGAR_CANE').catch(e => {return})
    let caneRes = await cane.json()
    client.alchPrices.set("cane", caneRes.product_info.quick_status.sellPrice)
}