// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var normalcolor = "#1770E8";
var GameName = "[⭐EVENT] Cookie Simulator 2!"
var GroupDescription = "Our Roblox group is a vital part of the game. Our group is the way you get access to the discord and much more. There will be possible perks if you are in the group coming soon."
var GameDescription = "Our game is one of the best games with state of the art security. We have invisible walls stopping exploiters, active staff to correctly punish people disobeying rules."
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
        .setDescription(GroupDescription)
        .setURL("https://www.roblox.com/groups/5063409/The-Shiny-Studio#!/about")
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(GroupEmbed)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "game") {
        const GroupEmbed = new Discord.RichEmbed()
        .setTitle(GameName)
        .setDescription(GameDescription)
        .setURL("https://www.roblox.com/games/4261816538/EVENT-Cookie-Simulator-2")
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(GroupEmbed)
    }
})
