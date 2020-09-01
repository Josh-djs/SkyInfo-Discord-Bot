const fetch = require('node-fetch')
const nbt = require('nbt')

module.exports = {
    name: "test",
    category: "dev",
    description: "Test command",
    devOnly: true,
    run: async (client, message, args) => {
        let stats = await fetch('https://api.hypixel.net/skyblock/profile?key=e88a734d-1ead-4377-ac1d-221a6d441d38&profile=ecd7849ae4ee4385812f6939a0556cb5')
        let json = await stats.json()

        var data = json.profile.members['8fa1cab0a8434644b696701f06d8a6e0'].inv_armor.data
        nbt.parse(data, function (err, data) {
            if (err) { console.error(err) }

            console.log(data)
        })
    }
}