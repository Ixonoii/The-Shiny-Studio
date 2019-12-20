// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var prefix = "-"

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(";aide", {type: "PLAYING"})
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'dm') {
       let member = args.slice(1).join(" ")
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send("**Vous devez mentionner quelqu'un.**")
       if (!reason) return message.channel.send("**Vous devez entrer une raison.**")
       client.users.get(member).send(reason)
    }
})
