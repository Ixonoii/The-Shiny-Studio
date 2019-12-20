// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var prefix = "-"

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(";aide", {type: "PLAYING"})
})
