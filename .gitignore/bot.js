// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#007bff";
var prefix = "-";
var devids = ["111856278220845056"];

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mentionne moi | mBot", {type: "PLAYING"})
})

client.on('message', message =>{
    if(message.content === prefix + "info"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Information about Calypso Administration__")
        .setColor("#05f516")
        .addField("Creator:","Ixonoii#7399", true)
        .addField("Version:", VERsion, true)
        .addField("Users:", message.guild.memberCount, true)
        .addField("Commands:","28", true)
        .addField("Invite link:","https://discord.gg/ynkpfVB", true)
        message.channel.send(embed)
    }
})
