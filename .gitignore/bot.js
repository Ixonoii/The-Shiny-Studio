// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var activity = "Bientôt Disponible";
var prefix = "-";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(activity, {type: "PLAYING"})
})

client.on('message', function(message){
    if(message.content === prefix + "moi"){
        let embedtest = new Discord.RichEmbed()
        .setTitle("Voici quelques informations à propos de l\"utilisateur " + message.author.username)
        .addField("Nom d'utilisateur :", message.author.username)
        .addField("ID :", message.author.id, true)
        .addField("Arrivé le :", message.author.createdAt, true)
        message.channel.send(embedtest)
    }
})
