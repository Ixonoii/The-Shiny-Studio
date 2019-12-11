// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var BOTversion = "BETA"

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

client.login(process.env.BOT_TOKEN)

client.on('message', message =>{
    if(message.content === prefix + "info"){
        let embed = new Discord.RichEmbed()
        .setTitle("Informations à propos du bot :")
        .setColor(couleur)
        .addField("Créateur :","Ixonoii#3216")
        .addField("Nombres de commandes disponibles :","Bientôt disponible")
        .addField("Serveurs :", client.guilds.get(Number))
        .addField("Membres :", client.users.get(Number))
        .addField("Version :", BOTversion)
        message.channel.send(embed)
    }
})
