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
    if(message.content === "<@648551591623917578>"){
        message.channel.send("***<@" + message.author.id + "> Coming soon!***")
        let notifmention = new Discord.RichEmbed()
        .setTitle("Someone mentionned the bot")
        .setColor(embedcolor)
        .addField("Server:", message.guild.name + " (" + message.guild.id + ")")
        .addField("User:", message.author.tag + " (" + message.author.id + ")")
        .setThumbnail("https://cdn.discordapp.com/attachments/648559285638266880/648560003669557262/Iconsuccess.png")
        .setTimestamp(Date.now())
        client.channels.get("648559285638266880").send(notifmention);
    }
})

                                                                 // BOT MENTION //

client.on('message', message =>{
    if(message.content === prefix + "info"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Information about mBot__")
        .setColor(embedcolor)
        .addField("Prfix:", prefix)
        .addField("VersionT:","v0.0.1")
        .addField("Last update:","11/25/19")
        .addField("Creator:","Ixonoii#1111")
        .setTimestamp(Date.now()) 
        message.channel.send(embed)
        let infomention = new Discord.RichEmbed()
        .setTitle("Someone used the -info command")
        .setColor(embedcolor)
        .addField("Server:", message.guild.name)
        .addField("User:", message.author.tag + " (ID : " + message.author.id + ")")
        .setThumbnail("https://cdn.discordapp.com/attachments/648559285638266880/648560003669557262/Iconsuccess.png")
        .setTimestamp(Date.now())
        client.channels.get("648245694087430167").send(infomention);
    }
})
