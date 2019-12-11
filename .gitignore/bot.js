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
    if(message.content === "<@654374834888769556>"){
        let prefixe = new Discord.RichEmbed()
        .setTitle("Mon préfixe est ; sur tous les serveurs.")
        .setColor(couleur)
        message.channel.send(prefixe)
    }
})
