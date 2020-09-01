module.exports = {
    name: "auction",
    description: "creates an embed for an auction",
    usage: "<item> <BIN or Auction> <price> <time left>",
    category: "other",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js')
        const send = require('quick.hook')
        let advertisement = message.content
        message.delete()
        let auction_details = advertisement.split(':')
        if (auction_details[2] !== ' BIN ' && auction_details[2] !== ' Auction ') return send(message.channel, 'Please specify a **valid** type of auction! (check capitolization, bin must be BIN, and auction must be Auction)', {
            name:"AuctionManager",
            icon:"https://i.ytimg.com/vi/33UDzDshAgQ/maxresdefault.jpg"
        })
        let auction_embed = new MessageEmbed()
        .setDescription(`${message.author.username} has a ${auction_details[1]} on their AH!`)
        .addField('Item:', `${auction_details[1]}`)
        .addField('Type:', `${auction_details[2]}`)
        .addField('Price:', `${auction_details[3]}`)
        .addField('Time Left:', `${auction_details[4]}`)
        .setTimestamp(`${message.createdAt}`)
        send(message.channel, auction_embed, {
            name:"AuctionManager",
            icon:"https://i.ytimg.com/vi/33UDzDshAgQ/maxresdefault.jpg",
        })
    }
}