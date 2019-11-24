                                                                 // CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
var embedcolor = "#049ef3"
var versionBOT = "0.0.1"
var nbcommandes = "0"
var MAJ = "Dimanche 10 Novembre"
var prefix = "-"

                                                                 // BOT TOKEN //

client.login(process.env.BOT_TOKEN)

                                                                 // BOT STATUS //

client.on('ready', function(){
    client.user.setActivity("Mentionne moi !", {type: "PLAYING"})
})

                                                                 // BOT MENTION //

// Bot pinged //

client.on('message', message =>{
    if(message.content === "<@622793567655428116>"){
        let embed = new Discord.RichEmbed()
        .setTitle("Hello " + message.author.tag + ". I'm Calypso Administration, a bot created and developed by Ixonoii. Want more info about me? Feel free to use my ;info command. To display a list of all the commands, please say ;cmds!")
        .setColor("#05f516")
        .setThumbnail("https://cdn.discordapp.com/attachments/613323849832071188/627146756580179978/Senza_titolo-1.png")
        .setFooter("Credits to FedeIlLeone#2564 for the icon.")
        message.channel.send(embed)
    }
})

// Bot ;info //

client.on('message', message =>{
    if(message.content === ";info"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Information about Calypso Administration__")
        .setColor("#05f516")
        .addField("Creator:","Ixonoii#7399")
        .addField("Version:", VERsion)
        .addField("Users:", message.guild.memberCount)
        .addField("Commands:","28")
        .addField("Invite link:","https://discord.gg/ynkpfVB")
        message.channel.send(embed)
        let success = new Discord.RichEmbed()
        .setTitle("User Log Entry")
        .setColor("#05f516")
        .addField("User:", message.author.tag)
        .addField("Command used:",";info")
        let cChannel = message.guild.channels.find(c => c.name === "user-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'user-logs'.")
        cChannel.send(success)
    }
})

// ;cmds //

client.on('message', function(message){
    if(message.content === ";cmds"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Calypso Administration | Commands__')
        .setColor('#05f516')
        .setDescription("I'm Calypso Administration, a bot created and developed by Calypso Cafe. Please note that I am currently in BETA version. If you find a bug, please report it to our staff members.")
        .addField("__Basic Commands__","``;cmds`` Display a list of all the commands. \n ``;ping`` Display your ping. \n ``;avatar`` Display your avatar.  \n ``;report`` Report a user. \n ``;suggest`` Suggest your idea.")
        .addField("__Administration Commands__","``;kick`` Kick a member. \n ``;ban`` Ban a member. \n ``;softban`` Softban a member. \n ``;mute`` Mute a member. \n ``;unmute`` Unmute a member.")
        .addField("__Managment Command__","``;newrole`` Create a new role. \n ``;newchannel`` Create a new channel. \n ``;deletechannel`` Delete a channel (administrators permissions needed). \n ``;settopic`` Change the topic of a channel. \n ``;notopic`` Reset the topic of a channel. \n ``;setname`` Change the name of a channel. \n ``;hide`` Hide a chanel. \n ``;show`` Unhide a channel. \n ``;lock`` Lock a channel. \n ``;unlock`` Unlock a channel.")
        message.channel.send(pong_enbed)
        let success = new Discord.RichEmbed()
        .setTitle("User Log Entry")
        .setColor("#05f516")
        .addField("User:", message.author.tag)
        .addField("Command used:",";cmds")
        let cChannel = message.guild.channels.find(c => c.name === "user-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'user-logs'.")
        cChannel.send(success)
    }
})

// Bot pinged //

client.on('message', message =>{
    if(message.content === ";changelogs"){
        message.channel.send("No available actually.")
        let success = new Discord.RichEmbed()
        .setTitle("User Log Entry")
        .setColor("#05f516")
        .addField("User:", message.author.tag)
        .addField("Command used:",";changelogs")
        let cChannel = message.guild.channels.find(c => c.name === "user-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'user-logs'.")
        cChannel.send(success)
    }
})

// ;avatar //

client.on('message', function(message){
    if(message.content === ";avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("The image does not load correctly? Click here!")
        .setColor('#05f516')
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        message.channel.send(pong_enbed)
        let success = new Discord.RichEmbed()
        .setTitle("User Log Entry")
        .setColor("#05f516")
        .addField("User:", message.author.tag)
        .addField("Command used:",";avatar")
        let cChannel = message.guild.channels.find(c => c.name === "user-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'user-logs'.")
        cChannel.send(success)
    }
})

// ;ping //

client.on('message', message =>{
    if(message.content === ";ping"){
        let début = Date.now();
        message.channel.send("Loading...")
        .then((m) => m.edit(`Ping: ${Date.now() - début}ms.`));
        let success = new Discord.RichEmbed()
        .setTitle("User Log Entry")
        .setColor("#05f516")
        .addField("User:", message.author.tag)
        .addField("Command used:",";ping")
        let cChannel = message.guild.channels.find(c => c.name === "user-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'user-logs'.")
        cChannel.send(success)
    }
})

// ;8ball //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "8ball"){
    if (!args[1]) return message.channel.send("What is your question?")
        let answers = ["Yes!", "No!", "Of course.", "Maybe.", "I don't know.","Never!","Impossible!","No idea!","No chance."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setColor("#05f516")
            .addField(message.author.tag + ": ", question)
            .addField("Calypso Administration:", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
        let success = new Discord.RichEmbed()
        .setTitle("User Log Entry")
        .setColor("#05f516")
        .addField("User:", message.author.tag)
        .addField("Command used:",";8ball")
        .addField("Question:", question)
        let cChannel = message.guild.channels.find(c => c.name === "user-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'user-logs'.")
        cChannel.send(success)
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ;ban //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
        if(!message.member.roles.some(r=>["Calypso Moderator","Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command!")
       let member = message.mentions.members.first()
       let question = args.slice(2).join(" ")
       if (!member) return message.channel.send("Please mention a user.")
       if(!question) return message.channel.send("Please enter a reason.")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("I can't ban this user!")
       if (!member.bannable) return message.channel.send("I can't ban this user!")
       member.send(notif)
       message.channel.send(member + ' has been banned for: ' + question)
       message.delete()
       message.guild.ban(member, {days: 7, reason: question})
       let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#ff0000")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","Ban")
        .addField("User:", member)
        .addField("Reason:", question)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

// ;purge //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if(!message.member.roles.some(r=>["Calypso Moderator","Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command!*")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Please enter a valid number.")
        if (isNaN(count)) return message.channel.send("Please enter a valid number.")
        if (count < 1 || count > 100) return message.channel.send("Please enter a number between 1 and 99.")
        message.channel.bulkDelete(count + 1)
        let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#05f516")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","Purge")
        .addField("Channel:","<#" + message.channel.id + ">")
        .addField("Number:", count + 1)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

// ;mute //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "mute") {
        if(!message.member.roles.some(r=>["Calypso Moderator","Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command.")
       let member = message.mentions.members.first()
        if (!member) return message.channel.send("**Please mention a user.**")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("I can't mute this user.")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("I can't mute this user.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' has been muted.')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' has been muted.')
                let success = new Discord.RichEmbed()
                .setTitle("Moderator Log Entry")
                .setColor("#ff0000")
                .addField("Administrator:", message.author.tag)
                .addField("Action:","Mute")
                .addField("User:", member)
                let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
                if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
                cChannel.send(success)
            })
        }}
})

// ;softban //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'softban') {
        if(!message.member.roles.some(r=>["Calypso Moderator","Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command.")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send('Please mention a user.')
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("I can't softban this user.")
       if (!member.bannable) return message.channel.send("I can't softban this user.")
       message.guild.ban(member, {days: 7})
       message.guild.unban(member)
       message.channel.send(member + ' has been softbanned.')
       let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#ff0000")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","Softban")
        .addField("User:", member)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

// ;unmute //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.roles.some(r=>["Calypso Moderator","Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Please mention a user.")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("I can't unmute this user.")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("I can't un mute this user.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' has been unmuted.')
        let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#05f516")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","Unmute")
        .addField("User:", member)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

// ;kick //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        if(!message.member.roles.some(r=>["Calypso Moderator","Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command.")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Please mention a user.")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("I can't kick this user.")
       if (!member.kickable) return message.channel.send("I can't kick this user.")
       member.kick()
       message.channel.send(member + ' has been kicked.')
       let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#ff0000")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","Kick")
        .addField("User:", member)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "newrole"){
        if(!message.member.roles.some(r=>["Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command.")
    if (!args[1]) return message.channel.send("Please enter a name.")
        let question = args.slice(1).join(" ")
        message.guild.createRole({
            name: question,
            color: "#000000"
        })
        message.channel.send("Role successfuly created: " + question)
        let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#05f516")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","New Role")
        .addField("New role:", question)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

// ;newchannel //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "newchannel"){
        if(!message.member.roles.some(r=>["Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command.")
        if (!args[1]) return message.channel.send("Please enter a name.")
        let question = args.slice(1).join(" ")
        message.guild.createChannel(question).then(channel =>{
    })
    message.delete();
    message.channel.send("Channel successfully created: " + question)
    let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#05f516")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","New Channel")
        .addField("New channel:", question)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

// ;deletechannel //

client.on('message', function(message){
    if(message.content === ";deletechannel"){
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You can't use this command.")
        message.channel.delete()
        let success = new Discord.RichEmbed()
        .setTitle("Moderator Log Entry")
        .setColor("#ff0000")
        .addField("Administrator:", message.author.tag)
        .addField("Action:","Delete Channel")
        .addField("Channel:", message.channel.name)
        let cChannel = message.guild.channels.find(c => c.name === "bot-logs")
        if(!cChannel) return message.channel.send("I can't find the channel 'bot-logs'.")
        cChannel.send(success)
    }
})

// ;clone //

// ;rename //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "rename"){
        let error1 = new Discord.RichEmbed()
        .setTitle(":x: Please enter the new name.")
        .setColor("#0a92c5")
        if (!args[1]) return message.channel.send(error1)
        let question = args.slice(1).join(" ")
        message.channel.setName(question)
        let success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Channel renamed.")
        .setColor("#0a92c5")
        message.channel.send(success)
}
})

// ;report //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "report"){
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send("Please enter a user (mention) and a reason.")
        if(!question) return message.channel.send("Please enter a user (mention) and a reason.")
        let embed = new Discord.RichEmbed()
        .setTitle('A report has been received!')
        .setColor("#05f516")
        .addField('User: ', message.author + " (ID: " + message.author.id + ")")
        .addField('User reported: ', memberMEN + " (ID: " + memberMEN.id + ")")
        .addField('Reason:', question)
        .addField('Reported in:',"<#" + message.channel.id + ">")
        let cChannel = message.guild.channels.find(c => c.name === "reports")
        if(!cChannel) return message.channel.send("I can't find the channel 'reports'.")
    cChannel.send(embed);
    message.delete();
}
})

// ;report //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "announce"){
        if(!message.member.roles.some(r=>["Calypso Administrator"].includes(r.name)) ) return message.channel.send("You can't use this command.")
        let question = args.slice(1).join(" ")
        if(!question) return message.channel.send("Please enter your announce.")
        let cChannel = message.guild.channels.find(c => c.name === "announcements")
        if(!cChannel) return message.channel.send("I can't find the channel 'announcements'.")
    cChannel.send("@everyone **[Announcement from " + message.author.username + "]** " + question);
    message.delete();
}
})

// ;suggest //


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "suggest"){
        if (!args[1]) return message.channel.send("Please enter your sugesstion.")
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle("A suggestion has been received!")
        .setColor("#05f516")
        .setDescription("Vote for or against this suggestion using reactions.")
        .addField('Suggestion: ', question)
        .addField('Suggested by: ', message.author.username)
        let cChannel = message.guild.channels.find(c => c.name === "suggestions")
        if(!cChannel) return message.channel.send("I can't find the channel 'suggestions'.")
    cChannel.send(embed)
    message.delete();
}
})

// ;poll //


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "poll"){
        if (!args[1]) return message.channel.send("Please enter your poll.")
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle("A poll has been received!")
        .setColor("#05f516")
        .setDescription("Vote for or against this poll using reactions.")
        .addField('Poll: ', question)
        .addField('Sent by: ', message.author.username)
        let cChannel = message.guild.channels.find(c => c.name === "polls")
        if(!cChannel) return message.channel.send("I can't find the channel 'suggestions'.")
    cChannel.send(embed)
    message.delete();
}
})

// ;inactivity //


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "inactivity"){
        if(!message.member.roles.some(r=>["STAFF"].includes(r.name)) ) return message.channel.send("You can't use this command.")
        if (!args[1]) return message.channel.send("Please enter the date and the reason of your inactivity.")
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle("A inactivity notice has been received!")
        .setColor("#05f516")
        .addField('User: ', message.author.username)
        .addField('Reason: ', question)
        let cChannel = message.guild.channels.find(c => c.name === "inactivity-requests")
        if(!cChannel) return message.channel.send("I can't find the channel 'inactivity-requests'.")
    cChannel.send(embed)
    cChannel.send("<@&622801157772804096>")
    message.delete();
}
})

// ;extend //


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "extend"){
        if(!message.member.roles.some(r=>["Approved Inactivity"].includes(r.name)) ) return message.channel.send("You can't use this command.")
        if (!args[1]) return message.channel.send("Please enter the date and the reason of your extension request.")
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle("A inactivity extension request has been received!")
        .setColor("#05f516")
        .addField('User: ', message.author.username)
        .addField('Reason: ', question)
        let cChannel = message.guild.channels.find(c => c.name === "inactivity-requests")
        if(!cChannel) return message.channel.send("I can't find the channel 'inactivity-requests'.")
    cChannel.send(embed)
    cChannel.send("<@&622801157772804096>")
    message.delete();
}
})
