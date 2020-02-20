// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
client.login(process.env.TOKENBOT)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- GROUP ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", message => {
    if(message.content === "nub")
    var GroupEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.displayAvatarURL, message.author.tag)
    .setColor(Color)
    .setTitle("Testing the color!")
})
=
