// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(">> Bientôt Disponible <<", {type: "PLAYING"})
})

client.on('message', function(message){
    if(message.content === "test"){
        let mention = new Discord.RichEmbed()
        .setAuthor(message.author.displayAvatarURL, message.author.username)
        .setTitle(":white_check_mark")
        .setColor(couleur)
        message.channel.send(mention)
    }
})
