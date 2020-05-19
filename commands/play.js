const msg = require('discord.js')
const ytdl = require('ytdl-core')
module.exports = {
    name: "play",
    description: "plays music in a voice channel",
    execute(msg, args) {
        
        
        let validate = ytdl.validateURL(args[1]);
        if (!validate) return msg.channel.send("Please specify a valid URL!");

        function play(connection, msg) {
            var song = songs[msg.guild.id];

            song.dispatcher = connection.play(ytdl(server.queue[0], { filter: "audioonly" }));

            song.queue.shift();

            server.dispatcher.on("end", function () {
                if (server.queue[0]) {
                    play(connection, msg);
                } else {
                    connection.disconnect();
                }
            })
        }

        if (!args[1]) {
            msg.channel.send('please specify the song i should play! :worried: (using a youtube link)')
            return;
        }

        if (!msg.member.voice.channel) {
            msg.channel.send('please join a voice channel')
            return;
        }

        var songs = {}

        if (!songs[msg.guild.id]) songs[msg.guild.id] = {
            queue: []
        }
        var song = songs[msg.guild.id];

        song.queue.push(args[1]);

        if (msg.guild.voiceConnection) msg.member.voice.channel.join().then(function (connection) {
            play(connection, msg);
        })
    }
}