const msg = require ('discord.js')
module.exports = {
    name: 'addlist',
    description: "adds a member to the waiting list",
    execute(msg, args){
        const waitlist = []
        switch(args[1]){
            case 'add':
       if(!msg.mentions.user) return msg.channel.send ('please specify someone to add to the waiting list')
        waitlist.unshift(msg.mentions.user.first());
       console.log(waitlist)
       msg.channel.send(`the waitlist is now: ${waitlist}`)
        }
    }
}