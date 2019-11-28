// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var embedcolor = "#07a8f0";

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "<@648551591623917578>"){
        message.channel.send("**<@" + message.author.id + "> Besoin d'aide ? Utilise -cmds ou -commandes !**")
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a mentionné le BOT dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})
