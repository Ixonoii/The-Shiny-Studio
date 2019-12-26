// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var prefix = "!";

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message){
    if(message.content === "!emoji"){
        message.channel.send( emoji("659504785036148750") + " You're not allowed to use this command.")
    }
})

client.on('message', function(message){
    if(message.content === "!emoji2"){
        let embed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " You're not allowed to use this command.")
        message.channel.send(embed)
    }
})
