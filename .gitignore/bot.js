// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var embedcolor = "#7e05ca";

client.on('ready', function(){
    client.user.setActivity("Mention me | ;cmds", {type: "PLAYING"})
})

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)                                                            

client.on('message', function(message){
    if(message.content === "<@650067878292357170>"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let informationembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle("Hello " + message.author.username + ". I'm Space Assistant, the official bot of Space Studios. Need help? Use the " + prefix + "cmds command!")
        .setColor(embedcolor)
        .setThumbnail(message.guild.iconURL)
        message.channel.send(informationembed)
        let mentionlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Mention.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(mentionlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "server"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let serverinformation = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle("Here is some information about the server " + message.guild.name)
        .setColor(embedcolor)
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Owner:", message.guild.owner)
        .addField("Server created at:", message.guild.createdAt)
        .addField("Members:", message.guild.memberCount + " members")
        message.channel.send(serverinformation)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Server.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(serverlog);
}
})

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Here is your avatar, " + message.author.username + ". The image does not load correctly? Click here!")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        message.channel.send(pong_enbed)
        let avatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Avatar.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(avatarlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "pingannounce"){
        if(!message.member.roles.some(r=>["ℹ️","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a message.")
        .setColor(embedcolor)
        let successmessage = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Message sent!")
        .setColor(embedcolor)
        let errormessage2 = new Discord.RichEmbed()
        .setTitle(":x: I can't send your announcement. I may not have the necessary permission, or the ``announcements`` channel does not exist on this server.")
        .setColor(embedcolor)
        if (!args[1]) return message.channel.send(errormessage1)
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor)
        .setDescription(question)
        .setFooter("Space Studios Management Team.")
        let announcechannel = message.guild.channels.find(c => c.name === "announcements")
        if(!announcechannel) return message.channel.send(errormessage2)
        announcechannel.send(embed);
        announcechannel.send('@everyone')
        .then((m) => m.delete());
    message.channel.send(successmessage)
    message.delete();
    let pingannouncelog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(embedcolor)
    .addField("Command:","Ping announce.")
    .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
    .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
    .addField("Argument:", question)
    client.channels.get("652213287366426646").send(pingannouncelog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "hannounce"){
        if(!message.member.roles.some(r=>["ℹ️","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a message.")
        .setColor(embedcolor)
        let successmessage = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Message sent!")
        .setColor(embedcolor)
        let errormessage2 = new Discord.RichEmbed()
        .setTitle(":x: I can't send your announcement. I may not have the necessary permission, or the ``announcements`` channel does not exist on this server.")
        .setColor(embedcolor)
        if (!args[1]) return message.channel.send(errormessage1)
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor)
        .setDescription(question)
        .setFooter("Space Studios Management Team.")
        let announcechannel = message.guild.channels.find(c => c.name === "announcements")
        if(!announcechannel) return message.channel.send(errormessage2)
        announcechannel.send(embed);
        announcechannel.send('@here')
        .then((m) => m.delete());
    message.channel.send(successmessage)
    message.delete();
    let hannouncelog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(embedcolor)
    .addField("Command:","Here announce.")
    .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
    .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
    .addField("Argument:", question)
    client.channels.get("652213287366426646").send(hannouncelog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "announce"){
        if(!message.member.roles.some(r=>["ℹ️","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a message.")
        .setColor(embedcolor)
        let successmessage = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Message sent!")
        .setColor(embedcolor)
        let errormessage2 = new Discord.RichEmbed()
        .setTitle(":x: I can't send your announcement. I may not have the necessary permission, or the ``announcements`` channel does not exist on this server.")
        .setColor(embedcolor)
        if (!args[1]) return message.channel.send(errormessage1)
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor)
        .setDescription(question)
        .setFooter("Space Studios Management Team.")
        let announcechannel = message.guild.channels.find(c => c.name === "announcements")
        if(!announcechannel) return message.channel.send(errormessage2)
        announcechannel.send(embed);
    message.channel.send(successmessage)
    message.delete();
    let announcelog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(embedcolor)
    .addField("Command:","Announce.")
    .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
    .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
    .addField("Argument:", question)
    client.channels.get("652213287366426646").send(announcelog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "activitycheck"){
        if(!message.member.roles.some(r=>["ℹ️","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a question.")
        .setColor(embedcolor)
        let successmessage = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Activity check sent!")
        .setColor(embedcolor)
        let errormessage2 = new Discord.RichEmbed()
        .setTitle(":x: I can't send your activity check. I may not have the necessary permission, or the ``activity-checks`` channel does not exist on this server.")
        .setColor(embedcolor)
        if (!args[1]) return message.channel.send(errormessage1)
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor)
        .setTitle("Hello everyone, today's activity check is: \n \n" + question)
        let announcechannel = message.guild.channels.find(c => c.name === "activity-checks")
        if(!announcechannel) return message.channel.send(errormessage2)
        announcechannel.send(embed)
        announcechannel.send('@everyone')
        .then((m) => m.delete());
    message.channel.send(successmessage)
    message.delete();
    let activitychecklog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(embedcolor)
    .addField("Command:","Activity check.")
    .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
    .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
    .addField("Argument:", question)
    client.channels.get("652213287366426646").send(activitychecklog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "qotd"){
        if(!message.member.roles.some(r=>["ℹ️","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a question.")
        .setColor(embedcolor)
        let successmessage = new Discord.RichEmbed()
        .setTitle(":white_check_mark: QOTD sent!")
        .setColor(embedcolor)
        let errormessage2 = new Discord.RichEmbed()
        .setTitle(":x: I can't send your QOTD. I may not have the necessary permission, or the ``qotd`` channel does not exist on this server.")
        .setColor(embedcolor)
        if (!args[1]) return message.channel.send(errormessage1)
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor)
        .setTitle("QOTD: " + question + " Answer in #aotd!")
        let announcechannel = message.guild.channels.find(c => c.name === "qotd")
        if(!announcechannel) return message.channel.send(errormessage2)
        announcechannel.send(embed)
        announcechannel.send('@here')
        .then((m) => m.delete());
    message.channel.send(successmessage)
    message.delete();
    let qotdlog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(embedcolor)
    .addField("Command:","QOTD.")
    .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
    .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
    .addField("Argument:", question)
    client.channels.get("652213287366426646").send(qotdlog);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "countbans"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**:white_check_mark: ${bans.size} bans found.**`))
        let countbanslog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Count bans.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(countbanslog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if(!message.author.id === "434061967951659019") return
        let count = parseInt(args[1])
        if (!count) return message.channel.send("**You have to enter a number.**")
        if (isNaN(count)) return message.channel.send("**You have to enter a number**")
        if (count < 1 || count > 100) return message.channel.send("**You have to enter a number between 1 and 100.**")
        message.channel.bulkDelete(count + 1)
        message.channel.send("**" + count + " messages deleted.**")
        .then((m) => m.edit("**" + count + " messages deleted.**"))
        .then((m) => m.edit("**" + count + " messages deleted.**"))
        .then((m) => m.edit("**" + count + " messages deleted.**"))
        .then((m) => m.edit("**" + count + " messages deleted.**"))
        .then((m) => m.delete())
        let purgelog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Purge.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", count)
        client.channels.get("652213287366426646").send(purgelog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "whois"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let memberMEN = message.mentions.members.first()
        let nomention = new Discord.RichEmbed()
        .setTitle(":x: You have to mention someone.")
        .setColor(embedcolor)
        if(!memberMEN) return message.channel.send(nomention)
        let whois = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Username :", memberMEN)
        .addField("ID:", memberMEN.id)
        .addField("Nickname :", memberMEN.nickname)
        .addField("Joined at:", memberMEN.joinedAt)
    message.channel.send(whois)
    let whoislog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(embedcolor)
    .addField("Command:","Whois.")
    .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
    .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
    client.channels.get("652213287366426646").send(whoislog);
}})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "setstatus"){
        if(!message.member.roles.some(r=>["ℹ️","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter the new status.")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Status updated!")
        .setColor(embedcolor)
        let newstatus = args.slice(1).join(" ")
        if(!newstatus) return message.channel.send(errormessage1)
        client.user.setActivity(newstatus)
        message.channel.send(success)
        let setstatuslog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Set status.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", newstatus)
        client.channels.get("652213287366426646").send(setstatuslog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "offline"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: The bot is now offline!")
        .setColor(embedcolor)
        client.user.setPresence({ game: { name: '' }, status: "invisible" })
        message.channel.send(success)
        let offlinelog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Offline.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(offlinelog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "online"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: The bot is now online!")
        .setColor(embedcolor)
        client.user.setPresence({ game: { name: 'Mention me | ;cmds' }, status: "online" })
        message.channel.send(success)
        let onlinelog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Online.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(onlinelog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "lockdown"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: This channel has been locked.")
        .setColor(embedcolor)
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
        message.channel.send(success)
        message.delete()
        let onlinelog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Lockdown.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(onlinelog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "unlockdown"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: This channel has been unlocked.")
        .setColor(embedcolor)
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
        message.channel.send(success)
        message.delete()
        let onlinelog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Unlockdown.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(onlinelog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "setavatar"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter the link of the new avatar.")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Avatar updated!")
        .setColor(embedcolor)
        .setFooter("Please note: The avatar of the bot may take a few minutes to update due to the Discord limitation.")
        let newavatarlink = args.slice(1).join(" ")
        if(!newavatarlink) return message.channel.send(errormessage1)
        client.user.setAvatar(newavatarlink)
        message.channel.send(success)
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Set avatar.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", newavatarlink)
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "setname"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter the new name.")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Name updated!")
        .setColor(embedcolor)
        .setFooter("Please note: The name of the bot may take a few minutes to update due to the Discord limitation.")
        let newavatarlink = args.slice(1).join(" ")
        if(!newavatarlink) return message.channel.send(errormessage1)
        client.user.setUsername(newavatarlink)
        message.channel.send(success)
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Set name.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", newavatarlink)
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "report"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let nomention = new Discord.RichEmbed()
        .setTitle(":x: You have to mention someone.")
        .setColor(embedcolor)
        let noreason = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a reason.")
        .setColor(embedcolor)
        let nochannel = new Discord.RichEmbed()
        .setTitle("I can't send your report. I may not have the necessary permission, or the ``discord-reports`` channel does not exist on this server.")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Report sent!")
        .setColor(embedcolor)
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send(nomention)
        if(!question) return message.channel.send(noreason)
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor)
        .addField("Member:", message.author.username + " (ID: " + message.author.id + ")")
        .addField("Member reported:", memberMEN + " (ID: " + memberMEN.id + ")")
        .addField("Reason:", question)
        .addField("Channel:", "<#" + message.channel.id + ">")
        .setTimestamp(Date.now()) 
        let cChannel = message.guild.channels.find(c => c.name === "discord-reports")
        if(!cChannel) return message.channel.send(nochannel)
    cChannel.send(embed);
    message.delete();
    message.channel.send(success)
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Report.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", question)
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "inforole"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let norolemention = new Discord.RichEmbed()
        .setTitle(":x: You have to mention a role.")
        .setColor(embedcolor)
        let rolemention = message.mentions.roles.first()
        if(!rolemention) return message.channel.send(norolemention)
        let inforole = new Discord.RichEmbed()
        .setColor(embedcolor)
        .addField("Role:", rolemention)
        .addField("ID:", rolemention.id)
        .addField("Permissions calculator:", rolemention.permissions)
        .addField("Created at:", rolemention.createdAt)
        .addField("Color:", rolemention.color)
        .addField("HexColor:", rolemention.hexColor)
    message.channel.send(inforole)
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Info role.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "cmds"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let cmdslist = new Discord.RichEmbed()
        .setColor(embedcolor)
        .addField("**__Public commands:__**",";help ``Explains the commands, and how to use them.`` \n;whois ``Someone's Discord Info.`` \n;inforole ``Information about a role.`` \n;cmds ``Lists all commands you're able to use.`` \n;avatar ``Display your avatar.`` \n;report ``Report someone.`` \n;bug ``Send a bug report.`` \n;suggest ``Send a suggestion.`` \n;feedback ``Send a feedback.`` \n;tycoon ``Send a link to play Space Tycoon.`` \n;obby ``Send a link to play Kohl's Admin Obby.`` \n;group ``Send a link to to join our group.``")
        .addField("**__HR Commands:__**",";announce ``Announces a message without a ping.`` \n;hannounce ``Announces a message with @here ping.`` \n;pingannounce ``Announces a message with @everyone ping.`` \n;activitycheck ``Create an activity check, HRs know how to use this command.`` \n;setstatus ``Changes the status of the bot.`` \n;qotd ``Create an QOTD (question of the day), HRs know how to use this command.`` \n;log ``Private command. HR's are familiar with this command.``")
        .addField("**__Owners Commands:__**",";offline ``Makes the bot go offline.`` \n;online ``Makes the bot come back up online.`` \n;lockdown ``Locks a channel for non-staff members.`` \n;unlockdown ``Unlock a channel.`` \n;countbans ``Counts how many bans there are in the server.`` \n;setname ``Changes the name of the bot.`` \n;setavatar ``Changes the avatar of the bot.`` \n;reset avatar/name/status ``Reset the avatar/name/status of the bot.``")
    message.channel.send(cmdslist)
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Cmds.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "bug"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let noreason = new Discord.RichEmbed()
        .setTitle(":x: You have to enter your bug report.")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Bug report sent!")
        .setColor(embedcolor)
        let question = args.slice(1).join(" ")
        if(!question) return message.channel.send(noreason)
        let ReportInformationCard = new Discord.RichEmbed()
        .setTitle(":space_invader: A bug report has been recieved from the Space!")
        .setColor(embedcolor)
        .setDescription("```" + question + "```")
        .setFooter("Bug report sent by " + message.author.tag + " (ID: " + message.author.id + ")")
        message.channel.send(success)
        client.channels.get("651471216573415454").send(ReportInformationCard);
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Bug.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", question)
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "feedback"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let noreason = new Discord.RichEmbed()
        .setTitle(":x: You have to enter your feedback.")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Feedback sent!")
        .setColor(embedcolor)
        let question = args.slice(1).join(" ")
        if(!question) return message.channel.send(noreason)
        let ReportInformationCard = new Discord.RichEmbed()
        .setTitle(":space_invader: A feedback has been recieved from the Space!")
        .setColor(embedcolor)
        .setDescription("```" + question + "```")
        .setFooter("Feedback sent by " + message.author.tag + " (ID: " + message.author.id + ")")
        message.channel.send(success)
        client.channels.get("651471244864258051").send(ReportInformationCard);
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Feedback.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", question)
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "suggest"){
        if(!message.member.roles.some(r=>["Verified"].includes(r.name)) ) return
        let noreason = new Discord.RichEmbed()
        .setTitle(":x: You have to enter your suggestion.")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Suggestion sent!")
        .setColor(embedcolor)
        let question = args.slice(1).join(" ")
        if(!question) return message.channel.send(noreason)
        let ReportInformationCard = new Discord.RichEmbed()
        .setTitle(":space_invader: A suggestion has been recieved from the Space!")
        .setColor(embedcolor)
        .setDescription("```" + question + "```")
        .setFooter("Suggested by " + message.author.tag + " (ID: " + message.author.id + ")")
        message.delete()
        message.channel.send(success)
        client.channels.get("651471265256833044").send(ReportInformationCard);
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Command:","Suggest.")
        .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
        .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
        .addField("Argument:", question)
        client.channels.get("652213287366426646").send(setavatarlog);
}
})

client.on('message', message =>{
    if(message.content === prefix + "reset name"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Name reset!")
        .setColor(embedcolor)
        .setFooter("Please note: The name of the bot may take a few minutes to update due to the Discord limitation.")
        client.user.setUsername("Space Assistant")
        message.channel.send(success)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "reset avatar"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Avatar reset!")
        .setColor(embedcolor)
        .setFooter("Please note: The avatar of the bot may take a few minutes to update due to the Discord limitation.")
        client.user.setAvatar("https://images-ext-1.discordapp.net/external/K3z2Aeqzeboy32XksxTqj-mEGEd8o6KUPAfPeUWk0iY/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/650067878292357170/977914a859234cce9c1e6f97fa958e99.png")
        message.channel.send(success)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "reset status"){
        if(!message.member.roles.some(r=>["👑 Creator","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Status reset!")
        .setColor(embedcolor)
        client.user.setActivity("Mention me | ;cmds", {type: "PLAYING"})
        message.channel.send(success)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "tycoon"){
        if(!message.member.roles.some(r=>["Verified","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":space_invader: Want to play Space Tycoon? Click here!")
        .setColor(embedcolor)
        .setURL("https://www.roblox.com/games/2729188904/Space-Tycoon#game-instances")
        .setImage("https://images-ext-1.discordapp.net/external/A6ZDGZCJK3jFDMumUV8w0NVSTmIy3GtnEuhscZX5cCk/https/t3.rbxcdn.com/75177a02bcffae0509896cb5352bdcf9")
        message.channel.send(success)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "obby"){
        if(!message.member.roles.some(r=>["Verified","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":space_invader: Want to play Kohl's Admin Obby? Click here!")
        .setColor(embedcolor)
        .setURL("https://www.roblox.com/games/3666606995/Kohls-Admin-Obby")
        .setImage("https://t7.rbxcdn.com/4f2ca94b08878cdd98426f2060c4ef97")
        message.channel.send(success)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "group"){
        if(!message.member.roles.some(r=>["Verified","Bot Developer"].includes(r.name)) ) return
        let success = new Discord.RichEmbed()
        .setTitle(":space_invader: Want to join our group? Click here!")
        .setColor(embedcolor)
        .setURL("https://www.roblox.com/groups/4495490/SpaceTycn#!/about")
        message.channel.send(success)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "log"){
        if(!message.member.roles.some(r=>["ℹ️","Bot Developer"].includes(r.name)) ) return
        let nomention = new Discord.RichEmbed()
        .setTitle(":x: You have to mention someone.")
        .setColor(embedcolor)
        let noreason = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a message.")
        .setColor(embedcolor)
        let nochannelfound = new Discord.RichEmbed()
        .setTitle(":x: I can't send the logging notification due to the following reason: The channel doesn't exist!")
        .setColor(embedcolor)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Message sent!")
        .setColor(embedcolor)
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send(nomention)
        if(!question) return message.channel.send(noreason)
        let embed = new Discord.RichEmbed()
        .setTitle("Logging \n \n" + question + " \n \n ~ " + message.author.username)
        .setColor(embedcolor)
        let lognotif = new Discord.RichEmbed()
        .setTitle("Logging Notification")
        .addField("HR:", message.author.username)
        .addField("Logging sent to:", memberMEN)
        .addField("Message:", question)
        .setColor(embedcolor)
        let loglogs = message.guild.channels.find(c => c.name === "logging")
        if(!loglogs) return message.channel.send(nochannelfound)
        loglogs.send(lognotif)
    message.delete()
    memberMEN.send(embed)
    message.channel.send(success)
    let mentionlog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(embedcolor)
    .addField("Command:","Log.")
    .addField("User:", message.author.tag + " (ID: " + message.author.id + ")")
    .addField("Guild:", message.guild.name + " (ID: " + message.guild.id + ")")
    .addField("Argument:", memberMEN + question)
    client.channels.get("652213287366426646").send(mentionlog);
}
})

client.on('message', function(message){
    if(message.content === "test!"){
        if(message.author.id === "434061967951659019") return message.channel.send("You're blacklisted!")
        message.channel.send("You're not blacklisted!")
    }
})
