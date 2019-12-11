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
        if(!message.author.id === "434061967951659019") return message.channel.send("Tu n'est pas mon créateur.")
        message.channel.send("Ceci est un test.")
    }
})
