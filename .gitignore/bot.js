const Discord = require('discord.js');
const client = new Discord.Client;
var credits = "mBot - All rights reserved";
var embedcolor = "#0584dd"
var prefix = "-"

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

// The bot will send an image if a user say -info //

client.on('message', function(message){
    if(message.content === "<@648551591623917578>"){
        let replymessage = new Discord.RichEmbed()
        .setTitle("My prefix is ``-``. Use -cmds to see all commands.")
        .setColor(embedcolor)
        message.channel.send(replymessage)
    }
})

// The bot will send an image if a user say -info //

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Here is your avatar, " + message.author.username + ".")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        message.channel.send(pong_enbed)
    }
})
