// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var normalcolor = "#3182F0";
client.login(process.env.TOKENBOT)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- GROUP ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", message => {
    if(message.content === "nub")
    var GroupEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.displayAvatarURL, message.author.tag)
    .setColor(normalcolor)
    .setTitle("Testing the color!")
    message.channel.send(GroupEmbed)
})
