const Discord = require('discord.js');
const client = new Discord.Client;
var credits = "mBot - All rights reserved";
var embedcolor = "#0584dd"
var prefix = "-"

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

// The bot will send an image if a user say -info //

client.on('message', function(message){
    if(message.content === "<@648551591623917578>"){
        let replymessage = new Discord.RichEmbed()
        .setTitle("My prefix is ``-``. Use -cmds to see all commands.")
        .setColor(embedcolor)
        message.channel.send(replymessage)
    }
})

// The bot will send an image if a user say -info //

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Here is your avatar, " + message.author.username + ".")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        message.channel.send(pong_enbed)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "report"){
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        let error1 = new Discord.RichEmbed()
        .setTitle("You have to mention someone.")
        .setColor(errorcolor)
        let error2 = new Discord.RichEmbed()
        .setTitle("You have to enter a reason.")
        .setColor(errorcolor)
        let error3 = new Discord.RichEmbed()
        .setTitle("I can't send your report. I may not have the necessary permissions or the `` reports`` channel does not exist on this server.")
        .setColor(errorcolor)
        if(!memberMEN) return message.channel.send(error1)
        if(!question) return message.channel.send(error2)
        let reportembed = new Discord.RichEmbed()
        .setTitle("A reported has been sent!")
        .setColor(embedcolor)
        .addField("Membre:", message.author.username + " (" + message.author.id + ")")
        .addField("Membre reported:", memberMEN + " (" + memberMEN.id + ")")
        .addField("Reason:", question)
        .addField("Channel:", message.channel.name)
        let reportconfirm = new Discord.RichEmbed()
        .setTitle("Report sent!")
        .setColor(successcolor)
        let cChannel = message.guild.channels.find(c => c.name === "reports")
        if(!cChannel) return message.channel.send(error3)
    cChannel.send(reportembed);
    message.delete();
    message.channel.send(reportconfirm)
}
})
