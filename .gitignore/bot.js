const Discord = require('discord.js');
const client = new Discord.Client;
var credits = "mBot - All rights reserved";
var embedcolor = "#0584dd"
var prefix = "-"

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

client.on('message', function(message){
    if(message.content === "<@648551591623917578>"){
        let replymessage = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Hello " + message.author.username + ". My prefix is ``-``. To see a list of all the commands, use -cmds.")
        .setColor(embedcolor)
        message.channel.send(replymessage)
    }
})
