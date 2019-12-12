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
        .setDescription(";aide commandes ``Affiche toutes les commandes disponibles.`` \n ;aide autorisations ``Affiche des informations sur les rôles.``")
        message.channel.send(embed)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "aide commandes"){
        let embed = new Discord.RichEmbed()
        .setTitle("Cette commande n'est pas disponible pour le moment.")
        .setColor(couleur)
        message.channel.send(embed)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "aide autorisations"){
        let embed = new Discord.RichEmbed()
        .setTitle("Informations sur les autorisations :")
        .setColor(couleur)
        .setDescription("Certaines commandes de bot nécessitent des autorisations spéciales pour fonctionner. C'est pourquoi un membre devra avoir un de ces rôles pour utiliser une commande.")
        message.channel.send(embed)
    }
})
