// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var GuildId = "637704259105980416";
var prefix = "-";
var GameName = "[⭐EVENT] Cookie Simulator 2!";
var GroupDescription = "Our Roblox group is a vital part of the game. Our group is the way you get access to the discord and much more. There will be possible perks if you are in the group coming soon.";
var GameDescription = "Our game is one of the best games with state of the art security. We have invisible walls stopping exploiters, active staff to correctly punish people disobeying rules.";
var LogChannel = "680455637687205895";
var SuggestionChannel = "638831121496276994";
var NotAllowed = ":warning: You don't have the necessary permissions to use this command.";
client.login(process.env.TOKENBOT)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- BASIC COMMANDS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "cmds") {
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        const GroupEmbed = new Discord.RichEmbed()
        .setTitle("Basic Commands")
        .setDescription(prefix + "cmds ``Displays all the commands you can use.`` \n" + prefix + "group ``Displays a link to join our ROBLOX group.`` \n" + prefix + "game ``Displays a link to join our ROBLOX game.`` \n" + prefix + "me ``Displays some information about you.")
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(GroupEmbed)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "cmds") {
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        const GroupEmbed = new Discord.RichEmbed()
        .setTitle("Fun Commands")
        .setDescription(prefix + "kiss ``Kiss someone.`` \n" + prefix + "slap ``Slap someone`` \n" + prefix + "hug ``Hugs someone.``\n" + prefix + "fight ``Fight with someone.``")
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(GroupEmbed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- BASIC COMMANDS ----------------------------------------- //
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

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "me") {
        var nomention = new Discord.RichEmbed()
        .setTitle("Here is some information about you.")
        .addField("Username", message.author.username)
        .addField("Discriminator", message.author.discriminator)
        .addField("ID", message.author.id)
        .addField("Presence", message.author.presence)
        .addField("Discord Join Date", message.author.createdAt)
        .setThumbnail(message.author.avatarURL)
        message.channel.send(nomention)
        var kisslog = new Discord.RichEmbed()
        .setTitle("Someone looked for some information.")
        .addField("**User**","``" + message.author.tag + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kisslog)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- FUN COMMANDS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "kiss") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":heart: " + message.author.username + " kissed " + member.displayName + ".")
        .setImage("https://media0.giphy.com/media/FmB6UTdCj3G12/source.gif")
        message.channel.send(success)
        var kisslog = new Discord.RichEmbed()
        .setTitle("Someone kissed someone.")
        .addField("**User**","``" + message.author.tag + "``", true)
        .addField("**User mentioned**","``" + member.displayName + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kisslog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "hug") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":blush: " + message.author.username + " hugs " + member.displayName + ".")
        .setImage("https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif")
        message.channel.send(success)
        var kisslog = new Discord.RichEmbed()
        .setTitle("Someone hugged someone.")
        .addField("**User**","``" + message.author.tag + "``", true)
        .addField("**User mentioned**","``" + member.displayName + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kisslog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "slap") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":eyes: " + message.author.username + " slap " + member.displayName + ".")
        .setImage("https://media3.giphy.com/media/Gf3AUz3eBNbTW/source.gif")
        message.channel.send(success)
        var kisslog = new Discord.RichEmbed()
        .setTitle("Someone slapped someone.")
        .addField("**User**","``" + message.author.tag + "``", true)
        .addField("**User mentioned**","``" + member.displayName + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kisslog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "fight") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":punch: A fight started between " + message.author.username + " and " + member.displayName + ".")
        .setImage("https://media1.giphy.com/media/eR7OEDQDyA7Cg/giphy.gif")
        message.channel.send(success)
        var kisslog = new Discord.RichEmbed()
        .setTitle("Someone is fighting someone.")
        .addField("**User**","``" + message.author.tag + "``", true)
        .addField("**User mentioned**","``" + member.displayName + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(kisslog)
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
        .setTitle("A question has been asked.")
        .addField("**User**","``" + message.author.tag + "``", true)
        .addField("**Question**","``" + question + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(questionlog)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- DISCORD MODERATION COMMANDS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

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
        .setTitle("A user has been kicked.")
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
        .setTitle("A user has been banned.")
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
        .setTitle("A channel has been purged.")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .addField("**Channel**","``" + message.channel.name + "``", true)
        .addField("**Number**", "``" + count + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(supprimelog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "nick") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        var noreason = new Discord.RichEmbed()
        .setTitle(":warning: Please enter a new nickname.")
        var cantname = new Discord.RichEmbed()
        .setTitle(":warning: This user is manageable, but I do not have the permissions required to perform this action.")
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if(!reason) return message.channel.send(noreason)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cantname)
        if (!member.manageable) return message.channel.send(cantname)
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: " + member.displayName + "'s nickname has been set to: ``" + reason + "``")
        message.channel.send(success)
        member.setNickname(reason)
        var nicknamelog = new Discord.RichEmbed()
        .setTitle("Someone changed the username of a user.")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .addField("**User**","``" + member.displayName + "``", true)
        .addField("**Nickname**","``" + reason + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(nicknamelog)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- HR COMMANDS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const strikes = JSON.parse(fs.readFileSync('./strikes.json'))

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "strike") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        var noreason = new Discord.RichEmbed()
        .setTitle(":warning: Please enter a reason.")
        var notallowed = new Discord.RichEmbed()
        .setTitle(NotAllowed)
        if(!message.member.roles.some(r=>["💳","🌟 Head Administrator","🗨 Head Discord Mod"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if(!reason) return message.channel.send(noreason)
        var CustomMessageEmbed = new Discord.RichEmbed()
        .setTitle(":warning: You've been striked in The Shiny Studio.")
        .setDescription("Reason: " + reason)
        .setTimestamp()
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: " + member.displayName + " successfully striked.")
        message.channel.send(success)
        member.send(CustomMessageEmbed)
        if (!strikes[member.id]) {
            strikes[member.id] = []
        }
        strikes[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./strikes.json', JSON.stringify(strikes))
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "strikes") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        .setTitle(NotAllowed)
        if(!message.member.roles.some(r=>["💳","🌟 Head Administrator","🗨 Head Discord Mod"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .addField('Strikes:', ((strikes[member.id] && strikes[member.id].length) ? strikes[member.id].slice(0, 10).map(e => e.reason) : "No strike found."))
        .setTimestamp()
        message.channel.send(success)
    }
})

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        var noreason = new Discord.RichEmbed()
        .setTitle(":warning: Please enter a reason.")
        var notallowed = new Discord.RichEmbed()
        .setTitle(NotAllowed)
        if(!message.member.roles.some(r=>["💳","🌟 Head Administrator","🗨 Head Discord Mod"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if(!reason) return message.channel.send(noreason)
        var CustomMessageEmbed = new Discord.RichEmbed()
        .setTitle(":warning: You've been warned in The Shiny Studio.")
        .setDescription("Reason: " + reason)
        .setTimestamp()
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: " + member.displayName + " successfully warned.")
        message.channel.send(success)
        member.send(CustomMessageEmbed)
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clearwarns") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        .setTitle(NotAllowed)
        var nowarn = new Discord.RichEmbed()
        .setTitle(":warning: Impossible to clear the warnings of this user: No warning found.")
        if(!message.member.roles.some(r=>["💳","🌟 Head Administrator","🗨 Head Discord Mod"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send(nowarn)
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Cleared warnings.")
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clearstrikes") {
        var nomention = new Discord.RichEmbed()
        .setTitle(":warning: Please mention a user.")
        .setTitle(NotAllowed)
        var nowarn = new Discord.RichEmbed()
        .setTitle(":warning: Impossible to clear the strikes of this user: No strike found.")
        if(!message.member.roles.some(r=>["💳","🌟 Head Administrator","🗨 Head Discord Mod"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if(!strikes[member.id] || !strikes[member.id].length) return message.channel.send(nowarn)
        strikes[member.id].shift()
        fs.writeFileSync('./strikes.json', JSON.stringify(strikes))
        var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Cleared strikes.")
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(success)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- DEVELOPER COMMANDS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'stats') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(NotAllowed)
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(notallowed)
        var setnamelog = new Discord.RichEmbed()
        .setTitle("A moderator checked the stats of the bot.")
        .addField("**Moderator**","``" + message.author.tag + "``", true)
        .setTimestamp()
        client.channels.get(LogChannel).send(setnamelog)
        var success = new Discord.RichEmbed()
        .setTitle(`Server: ${message.guild.name} \nMembers : ${client.users.size} \nChannels: ${client.channels.size} \nEmojis: ${client.emojis.size}`)
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(success)
    }
})
