const Enmap = require("enmap")
module.exports = (client) => {
    client.guildSettings = new Enmap({
        name: "settings"
    });
    
    client.alchPrices = new Enmap({
        name: "Alchemy material prices"
    })

    client.commandRunCount = new Enmap({
        name: "Run Count"
    })

    client.peopleMuted = new Enmap({
        name: "Reasons/count of mutes"
    })
    
    client.rarities = new Enmap({
        name: "rarities"
    })

    client.nerdwars = new Enmap({
        name: "Nerd Wars"
    })

    client.changelog = new Enmap({
        name: "changelog"
    })

    client.tickets = new Enmap({
        name: "Open Tickets"
    })

    client.counts = new Enmap({
        name: "counts"
    })

    client.opentickets = new Enmap({
        name: "Open Tickets"
    })

    client.joinedSupportServer = new Enmap({
        name: "Joined support server"
    })

    client.nerdwarsAPI = new Enmap({
        name: "nerdwars (game) api"
    })
}