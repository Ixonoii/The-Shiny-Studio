// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var activity = "Updated!";
var prefix = "-";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(activity, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString(); 434061967951659019
}

client.on('message', function(message){
    if(message.content === prefix + "check"){
        if(!message.author.id == "434061967951659019") return ( emoji("641689428565164063") + " **You're not Ixonoii.**")
        message.channel.send( emoji("641771906726625299") + " **You are Ixonoii.**")
    }
})
