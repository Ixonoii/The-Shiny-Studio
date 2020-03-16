// VARIABLES 1

const Discord = require("discord.js");
const Client = new Discord.Client;
const fs = require('fs');
const strikes = JSON.parse(fs.readFileSync('./strikes.json'));
const warns = JSON.parse(fs.readFileSync('./warns.json'));

// VARIABLES 2

var GuildID = "637704259105980416";
var Prefix = "-";
var ErrorEmoji = "641689428565164063";
var SuccessEmoji = "641771906726625299";
var GameName = "[⭐EVENT] Cookie Simulator 2!";
var GameDescription = "Our game is one of the best games with state of the art security. We have invisible walls stopping exploiters, active staff to correctly punish people disobeying rules.";
var GroupName = "The Shiny Studio";
var GroupDescription = "Our Roblox group is a vital part of the game. Our group is the way you get access to the discord and much more. There will be possible perks if you are in the group coming soon.";
var LoggingChannel = "680455637687205895";
var SuggestionChannel = "638831121496276994";

// VARIABLES 3

var Blue = "#1769eb";
var Black = "#000000";
var White = "#ffffff";
var Pink = "#f518db";
var Purple = "#8318f5";
var Green = "#14eb10";
var Red = "#ff0000";
var Orange = "#ff7700";
var Yellow = "#fff700";

// VARIABLES 4

var NotAllowedMessage = "You're not allowed to use this command.";

var NoReasonMessage = "Please enter a reason.";

var NoMentionMessage = "Please mention someone.";

function emoji (id) {
    return client.emojis.get(id).toString();
}

var NotAllowedEmbed = new Discord.RichEmbed()
.setTitle(emoji(ErrorEmoji) + " " + NotAllowedMessage)
.setColor(Red)

var NoReasonEmbed = new Discord.RichEmbed()
.setTitle(emoji(ErrorEmoji) + " " + NoReasonMessage)
.setColor(Red)

var NoMentionEmbed = new Discord.RichEmbed()
.setTitle(emoji(ErrorEmoji) + " " + NoMentionMessage)
.setColor(Red)

// RUNNER

client.login(process.env.TOKENBOT)

// COMMAND TELLER

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === Prefix + "cmds") {
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        const GroupEmbed = new Discord.RichEmbed()
        .setTitle("Basic Commands")
        .setDescription(":wave: Miscellaneous Commands")
        .setTimestamp()
        .setFooter("Need more info about a command? Use " + Prefix + "info [command]")
        message.channel.send(GroupEmbed)
    }
})
