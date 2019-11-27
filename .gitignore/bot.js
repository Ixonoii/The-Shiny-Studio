// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-"

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "message"){
        let messageTEXT = args.slice(1).join(" ")
        if(!messageTEXT) return message.channel.send("***Vous devez entrer un message.***") 
        client.channels.get("642478316627951666").send(messageTEXT);
}
})
