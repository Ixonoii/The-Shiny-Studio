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
 
    if (args[0].toLowerCase() === prefix + "group") {
        const GroupEmbed = new Discord.RichEmbed()
        .setTitle("The Shiny Studio")
        .setDescription("Our Roblox group is a vital part of the game. Our group is the way you get access to the discord and much more. There will be possible perks if you are in the group coming soon.")
        .setURL("https://www.roblox.com/groups/5063409/The-Shiny-Studio#!/about")
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(GroupEmbed)
    }
})
