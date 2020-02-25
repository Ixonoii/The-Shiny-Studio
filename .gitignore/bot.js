// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var GameName = "[⭐EVENT] Cookie Simulator 2!";
var status = GameName;
var GroupDescription = "Our Roblox group is a vital part of the game. Our group is the way you get access to the discord and much more. There will be possible perks if you are in the group coming soon.";
var GameDescription = "Our game is one of the best games with state of the art security. We have invisible walls stopping exploiters, active staff to correctly punish people disobeying rules.";
var LogChannel = "680455637687205895";
var NotAllowed = ":warning: You don't have the necessary permissions to use this command.";
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
        .setTitle(NotAllowed)
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        var noreason = new Discord.RichEmbed()
        .setTitle(":warning: Please enter a reason.")
        var cantkickowner = new Discord.RichEmbed()
        .setTitle(":warning: You can't kick this user.")
        var nokickable = new Discord.RichEmbed()
        .setTitle(":warning: This member is kickable, but I do not have the permissions required to perform this action.")
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(NotAllowedMessage)
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
        member.kick(reason)
        message.delete()
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: " + member.displayName + " has been kicked: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(success)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'ban') {
        var NotAllowedMessage = new Discord.RichEmbed()
        .setTitle(NotAllowed)
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        var noreason = new Discord.RichEmbed()
        .setTitle(":warning: Please enter a reason.")
        var cantkickowner = new Discord.RichEmbed()
        .setTitle(":warning: You can't ban this user.")
        var nokickable = new Discord.RichEmbed()
        .setTitle(":warning: This member is bannable, but I do not have the permissions required to perform this action.")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(NotAllowedMessage)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(nomention)
        if (!reason) return message.channel.send(noreason)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantkickowner)
        if (!member.bannable) return message.channel.send(nokickable)
        var kicklog = new Discord.RichEmbed()
        .setTitle("A user has been banned!")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .addField("**User**","``" + member.displayName + "``", true)
        .addField("**Raison**", "``" + reason + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kicklog)
        member.ban({days: 7})
        message.delete()
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: " + member.displayName + " has been banned: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(success)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(NotAllowed)
        var nonumber = new Discord.RichEmbed()
        .setTitle(":warning: Enter a number of messages to purge.")
        var incorrectnumber = new Discord.RichEmbed()
        .setTitle(":warning: Enter a number of messages to purge.")
        var toohigh = new Discord.RichEmbed()
        .setTitle(":warning: Enter a number of messages to purge (1 to 100")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        let count = parseInt(args[1])
        if (!count) return message.channel.send(nonumber)
        if (isNaN(count)) return message.channel.send(incorrectnumber)
        if (count < 1 || count > 100) return message.channel.send(toohigh)
        message.channel.bulkDelete(count + 1, true)
        supprimelog = new Discord.RichEmbed()
        .setTitle("A channel has been purged!")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .addField("**Channel**","``" + message.channel.name + "``", true)
        .addField("**Number**", "``" + count + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(supprimelog)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "8ball") {
        var noquestion = new Discord.RichEmbed()
        .setTitle(":thinking: What's your question?")
        if (!args[1]) return message.channel.send(noquestion)
        let answers = ["No.", "Yes.", "Maybe.", "Never.", "Of course.","Never."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle(":star: " + answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
        var questionlog = new Discord.RichEmbed()
        .setTitle("A question has been asked!")
        .addField("**User**","``" + message.author.tag + "``", true)
        .addField("**Question**","``" + question + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(questionlog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        var NotAllowedMessage = new Discord.RichEmbed()
        .setTitle(NotAllowed)
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        var noreason = new Discord.RichEmbed()
        .setTitle(":warning: Please enter a reason.")
        var toohigh = new Discord.RichEmbed()
        .setTitle(":warning: You can't warn this user.")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(NotAllowedMessage)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(toohigh)
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send(noreason)
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " has been warned: ``" + reason + "``")
        message.channel.send(success)
        var kicklog = new Discord.RichEmbed()
        .setTitle("A user has been warned!")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .addField("**User**","``" + member.displayName + "``", true)
        .addField("**Raison**", "``" + reason + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kicklog)
    }

    if (args[0].toLowerCase() === prefix + "warnings") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(NotAllowed)
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('Warnings:', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "No warning found."))
            .setTimestamp()
        message.channel.send(embed)
        var kicklog = new Discord.RichEmbed()
        .setTitle("A moderator checked the warnings of a user!")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .addField("**User**","``" + member.displayName + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kicklog)
    }
})
