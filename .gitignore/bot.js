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
        let guildID = args.slice(1).join(" ")
        if(!guildID) return message.channel.send("You have to enter a ID.")
        client.guilds.get(guildID).fetchInvites()
        .then(invites => message.channel.send(`Fetched ${invites.size} webhooks on the server ` + guildID.displayName))
}
})
