// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var color = "#00f0ff";
var prefix = ";"
var errornotif = "Vous ne pouvez pas utiliser cette commande."

client.login(process.env.BOT_TOKEN)

// STATUS //

client.on('ready', function(){
    client.user.setActivity(">> Bientôt Disponible <<", {type: "PLAYING"})
})

client.on('message', function(message){
    if(message.content === "invites"){
        client.guilds.forEach(g => {
            g.fetchInvites().then(guildInvites => {
                invites[g.id] = guildInvites;
            })
        })
    }
})

client.on('message', function(message){
    if(message.content === "invitations"){
        message.channel.send(invites)
    }
})
