// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var activity = "Bientôt Disponible";
var prefix = "-";
var blacklistedIDs = [""]

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(activity, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message){
    if(message.content === prefix + "blacklist"){
        message.channel.send( emoji("641771906726625299") + "here is the list: " + blacklistedIDs);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "blacklist"){
        let memberMEN = message.mentions.members.first()
        if(!memberMEN) return message.channel.send( emoji("641689428565164063") + " You have to mention someone.")
    message.delete();
    message.channel.send( emoji('641771906726625299') + memberMEN + " has been blacklisted from using the bot!")
    blacklistedIDs = blacklistedIDs + memberMEN.id
}
})
