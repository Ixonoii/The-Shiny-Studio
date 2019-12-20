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

// JOIN NOTIFICATION //

client.on("guildCreate", guild => {
    let joinnotif = new Discord.RichEmbed()
    .setTitle("I've been added on a server!")
    .setColor(color)
    .addField("Guild:", guild.name, true)
    .addField("Guld owner:", guild.owner, true)
    .addField("Members:", guild.memberCount, true)
    client.channels.get("657652649516204052").send(joinnotif);
})
