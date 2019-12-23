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
    return client.emojis.get(id).toString();
}

client.on('message', function(message) {
    const emoji = client.emojis.get("434061967951659019");

    if(message.content === prefix + "check"){
        if(message.author.id === "434061967951659019") return message.channel.send(`**${emoji} You are not Ixonoii.**`)
    } else {
        return message.channel.send(`**${emoji} You are not Ixonoii.**`)
    }
});
