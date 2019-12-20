// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var prefix = "-"
var erreurperm = "Vous ne pouvez pas utiliser cette commande."

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(";aide", {type: "PLAYING"})
})

client.on('message', function(message){
    if(message.content === prefix + "owner"){
        if(!message.author.id === "434061967951659019") return message.channel.send("You're not Ixonoii.")
        message.channel.send("You're Ixonoii.")
    }
})
