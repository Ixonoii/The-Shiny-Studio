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

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "invites"){
        let guildID = message.mentions.members.first()
        if(!guildID) return message.channel.send("Vous devez entrer l'ID d'un serveur.")
        client.guilds.get(guildID).fetchInvites()
        .then(invites => message.channel.send(`J'ai réussi à trouver ${invites.size} invites sur le serveuir ` + guildID.name))
}
})
