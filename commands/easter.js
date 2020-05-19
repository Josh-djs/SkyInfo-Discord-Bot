module.exports = {
    name: 'easter',
    description: "easter egg",
    async execute(message) {
        for (let i = 5; i > 0; i--) {
            message.channel.send(`Banning in ${i}`)
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        message.reply('has been banned succesfully!')
    }
}