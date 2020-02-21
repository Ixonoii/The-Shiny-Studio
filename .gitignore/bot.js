// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var GameName = "[⭐EVENT] Cookie Simulator 2!"
var status = GameName
var GroupDescription = "Our Roblox group is a vital part of the game. Our group is the way you get access to the discord and much more. There will be possible perks if you are in the group coming soon."
var GameDescription = "Our game is one of the best games with state of the art security. We have invisible walls stopping exploiters, active staff to correctly punish people disobeying rules."
var LogChannel = "680455637687205895"
var NotAllowedMessage = ":warning: You don't have the necessary permissions to use this command."
client.login(process.env.TOKENBOT)

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

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

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        var NotAllowedMessage = new Discord.RichEmbed()
        .setTitle(NotAllowedMessage)
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        var noreason = new Discord.RichEmbed()
        .setTitle(":warning: Please enter a reason.")
        var cantkickowner = new Discord.RichEmbed()
        .setTitle(":warning: You can't kick this user.")
        var nokickable = new Discord.RichEmbed()
        .setTitle(":warning: This member is kickable, but I do not have the permissions required to perform this action.")
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(nomention)
        if (!reason) return message.channel.send(noreason)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantkickowner)
        if (!member.kickable) return message.channel.send(nokickable)
        var kicklog = new Discord.RichEmbed()
        .setTitle("A user has been kicked!")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .addField("**User**","``" + member.displayName + "``", true)
        .addField("**Raison**", "``" + reason + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kicklog)
        member.kick({reason: reason})
        message.delete()
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: " + member.displayName + " has been kicked.")
        .setTimestamp()
        message.channel.send(success)
    }
})
