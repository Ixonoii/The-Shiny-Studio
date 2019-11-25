                                                                 // CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
var credits = "mBot - All rights reserved";
var embedcolor = "#0584dd"
var prefix = "-"

                                                                 // BOT TOKEN //

client.login(process.env.BOT_TOKEN)

                                                                 // BOT STATUS //

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "<@643152257822621696>"){
        message.channel.send("***<@" + message.author.id + "> Besoin d'aide ? Utilise -cmds ou -commandes !***")
        let notifmention = new Discord.RichEmbed()
        .setTitle("Someone mentionned the bot")
        .setColor(embedcolor)
        .addField("Server:", message.guild.name)
        .addField("User:", message.author.tag + " (ID : " + message.author.id + ")")
        .setTimestamp(Date.now())
        client.channels.get("648559285638266880").send(notifmention);
    }
})
