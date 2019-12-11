// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var couleur = "#00f0ff";

client.on('ready', function(){
    client.user.setActivity(">> Bientôt Disponible <<", {type: "PLAYING"})
})

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)


                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "Arplex est une pute xD"){
        let mention = new Discord.RichEmbed()
        .setAuthor(message.author.displayAvatarURL, message.author.username)
        .setTitle("mais moi je suis pas gay. :)")
        .setColor(couleur)
        message.channel.send(mention)
    }
})
