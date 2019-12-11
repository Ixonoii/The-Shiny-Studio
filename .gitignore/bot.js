// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var embedcolor = "#7e05ca";

client.on('ready', function(){
    client.user.setActivity(">> Bientôt Disponible <<", {type: "PLAYING"})
})

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)
