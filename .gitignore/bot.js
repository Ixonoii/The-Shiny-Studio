// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var normalcolor = "#1770E8";
client.login(process.env.TOKENBOT)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- GROUP ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "test") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Arlenox is a noob.")
        message.channel.send(cmdsembed)
    }
})
