const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "price",
    description: "gets the price of any item on the bazaar using bazaar api",
    execute(message, args) {
        const { GoogleSpreadsheet } = require('google-spreadsheet');
        const creds = require('./client_secret.json')

        function printItem(item) {
            console.log(`Item: ${item.Item}`)
            console.log(`Price: ${item.Price}`)
            console.log('-------------------')
        }

        async function accessSpreadsheet() {
            const doc = new GoogleSpreadsheet('1dCAliKaJfNhUpzxU7QMf17XGTNJ1vLk2QPFNXxt91a0');
            await doc.useServiceAccountAuth({
                client_email: creds.client_email,
                private_key: creds.private_key,
            });

            await doc.loadInfo(); // loads document properties and worksheets


            const sheet = doc.sheetsByIndex[0];
            let rows = await (sheet.getRows)()
            switch (args[1]) {
                case 'cocoa_beans':
                    let cocoabean = new MessageEmbed()
                        .setColor('#F5BD1F')
                        .addField(`Item: ${rows[0].Item}`, `Price: ${rows[0].Price}`)
                    message.channel.send(cocoabean)
                    break;
                case 'brown_mushroom':
                    let brownmushroom = new MessageEmbed()
                        .setColor('#F5BD1F')
                        .addField(`Item: ${rows[1].Item}`, `Price: ${rows[1].Price}`)
                    message.channel.send(brownmushroom)
                    break;
                case 'lapis_lazuli':
                    let lapis = new MessageEmbed()
                        .setColor('#F5BD1F')
                        .addField(`Item: ${rows[2].Item}`, `Price: ${rows[3].Price}`)
                    message.channel.send(lapis)
                    break;
                case 'tarantula_web':
                let taraweb = new MessageEmbed()
                    .setColor('#F5BD1F')
                    .addField(`Item: ${rows[3].Item}`, `Price: ${rows[3].Price}`)
                message.channel.send(taraweb)
                break;
                case 'carrot':
                    let carrot = new MessageEmbed()
                        .setColor('#F5BD1F')
                        .addField(`Item: ${rows[4].Item}`, `Price: ${rows[4].Price}`)
                    message.channel.send(carrot)
                    break;
                case 'enchanted_potato':
                    let epotato = new MessageEmbed()
                        .setColor('#F5BD1F')
                        .addField(`Item: ${rows[5].Item}`, `Price: ${rows[5].Price}`)
                    message.channel.send(epotato)
                    break;
                
                case 'summoning_eye':
                case 'sum_eye':
                    let eye = new MessageEmbed()
                        .setColor('#F5BD1F')
                        .addField(`Item: ${rows[191].Item}`, `Price: ${rows[191].Price}`)
                    message.channel.send(eye)
                    break;
                default:
                    message.channel.send('🤔Sorry, i couldnt find the item you were looking for🤔')
            }
        }


        accessSpreadsheet();

    }
}