// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var prefix = ";"

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(">> Bientôt Disponible <<", {type: "PLAYING"})
})

client.on('message', message =>{
    if(message.content === prefix + "aide"){
        let embed = new Discord.RichEmbed()
        .setTitle("Voici les différentes aides disponibles :")
        .setColor(couleur)
        .setDescription(";aide commandes ``Affiche toutes les commandes disponibles.`` \n ;aide configuration ``Affiche des informations sur les rôles.``")
        message.channel.send(embed)
    }
})
