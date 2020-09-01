const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "poll",
    description: "creates a poll in a certain channel",
    permissions: ["MANAGE_MESSAGES"],
    usage: "<simple/new> [id of the channel to send it to - only for new polls]",
    category: "other",
    run: async (client, message, args) => {
        if (client.guildSettings.get(message.guild.id, "deleteCommands") !== true) {
            message.delete()
        }
        let place = message.guild.channels.cache.get(args[2])
        switch (args[1]) {
            case 'simple':
                let question = args.splice(2).join(" ")
                if(!question) {
                    return message.channel.send('Provide a question!')
                }
                let simpleEmbed = new MessageEmbed()
                    .setDescription(question)
                let sentEmbed = await message.channel.send(simpleEmbed)
                sentEmbed.react('👍')
                sentEmbed.react('👎')
                break;
            case 'new':
                if (!place) {
                    return message.channel.send('That isn\'t a valid channel!')
                }
                let filter = m => m.author.id === message.author.id
                await message.channel.send("Please send the question")
                let questionCollect = message.channel.createMessageCollector(filter, { time: 60000 })
                let theQuestion = []
                questionCollect.on('collect', m => {
                    theQuestion.push(m.content)
                    questionCollect.stop()
                })
                questionCollect.on('end', collected => {
                    message.channel.send('Please provide all the answers, separated by ?')
                    let answerCollect = message.channel.createMessageCollector(filter, { time: 60000 })
                    let answers = []
                    answerCollect.on('collect', m => {
                        let splitAnswers = m.content.split("?")
                        splitAnswers.forEach(m => {
                            answers.push(m)
                        });
                        answerCollect.stop()
                    })
                    answerCollect.on('end', collected => {
                        let emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']
                        let newEmbed = new MessageEmbed()
                            .setTitle(theQuestion[0])
                            .setDescription(answers.join("\n"))
                        async function sendMessage() {
                            let botmessage = await place.send(newEmbed)

                            for (i = 0; i < answers.length; i++) {
                                botmessage.react(`${emojis[i]}`)
                            }
                        }
                        sendMessage()
                    })
                })
                break;
            default:
                message.channel.send("Valid polls are: simple, new")
        }
    }
}