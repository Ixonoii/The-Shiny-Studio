// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var activity = "Bientôt Disponible";
var prefix = "-";
var testemoji = client.emojis.get("651329198350401536")

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(activity, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message){
    if(message.content === "test"){
        message.channel.send( emoji("641771906726625299") );
    }
})
