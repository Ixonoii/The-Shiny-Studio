// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var successcolor = "#4d78f0";
var errorcolor = "#ff0000"
var prefix = "!";

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message){
    if(message.content === "<@650067878292357170>"){
        let prefixembed = new Discord.RichEmbed()
        .setTitle("Mon préfixe est ``" + prefix + "``.")
        .setColor(successcolor)
        message.channel.send(prefix)
    }
})
