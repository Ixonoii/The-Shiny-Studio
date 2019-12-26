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
    if(message.content === "<@" + botID + ">"){
        let prefixembed = new Discord.RichEmbed()
        .setTitle("Mon préfixe est ``" + prefix + "``.")
        message.channel.send(prefix)
    }
})
