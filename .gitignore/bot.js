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
        let informationembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle("Hello " + message.author.username + ". I'm Space Assistant, the official bot of Space Studios. Need help? Use the " + prefix + "cmds command!")
        .setColor(embedcolor)
        .setThumbnail(message.guild.iconURL)
        message.channel.send(informationembed)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "server"){
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
}
})

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Here is your avatar, " + message.author.username + ". The image does not load correctly? Click here!")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        message.channel.send(pong_enbed)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "pingannounce"){
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
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "hannounce"){
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
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "announce"){
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
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "activitycheck"){
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
    }
})

client.on('message', function(message){
    if(message.content === prefix + "countbans"){
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**:white_check_mark: ${bans.size} bans found.**`))
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if(!message.author.id === "434061967951659019") return message.channel.send("You're not a developer!")
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
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "whois"){
        let memberMEN = message.mentions.members.first()
        let nomention = new Discord.RichEmbed()
        .setTitle(":x: You have to mention someone.")
        if(!memberMEN) return message.channel.send(nomention)
        let whois = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(embedcolor)
        .addField("Username :", memberMEN)
        .addField("ID:", memberMEN.id)
        .addField("Nickname :", memberMEN.nickname)
        .addField("Joined at:", memberMEN.joinedAt)
    message.channel.send(whois)
}})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "setstatus"){
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
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "offline"){
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: The bot is now offline!")
        .setColor(embedcolor)
        client.user.setPresence({ game: { name: '' }, status: "invisible" })
        message.channel.send(success)
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "online"){
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: The bot is now online!")
        .setColor(embedcolor)
        client.user.setPresence({ game: { name: 'Mention me | ;cmds' }, status: "online" })
        message.channel.send(success)
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "lockdown"){
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: This channel has been locked.")
        .setColor(embedcolor)
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
        message.channel.send(success)
        message.delete()
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "unlockdown"){
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: This channel has been unlocked.")
        .setColor(embedcolor)
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
        message.channel.send(success)
        message.delete()
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "setavatar"){
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
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "setname"){
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
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "report"){
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
        .addField("Member:", message.author.username + " (ID:" + message.author.id + ")")
        .addField("Member reported:", memberMEN + " (ID:" + memberMEN.id + ")")
        .addField("Reason:", question)
        .addField("Channel:", "<#" + message.channel.id + ">")
        let cChannel = message.guild.channels.find(c => c.name === "discord-reports")
        if(!cChannel) return message.channel.send(nochannel)
    cChannel.send(embed);
    message.delete();
    message.channel.send(success)
}
})
