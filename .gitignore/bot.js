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

client.on('message', message =>{
    if(message.content === prefix + "ping"){
        let replymessage2 = new Discord.RichEmbed()
        .setTitle("Bot ping: 120ms.")
        .setColor(embedcolor)
        let replymessage1 = new Discord.RichEmbed()
        .setTitle("Loading...")
        .setColor(embedcolor)
        message.channel.send(replymessage1)
        .then((m) => m.edit(replymessage2));
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "8ball"){
        let error1 = new Discord.RichEmbed()
        .setTitle("Question not found.")
        .setColor(errorcolor)
    if (!args[1]) return message.channel.send(error1)
        let answers = ["Yes.", "No.", "Of course.", "Maybe.", "I don't know.","Never.","Impossible.","No idea.","No chance."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setColor(basiccolor)
        .addField("Question:", question)
        .addField("Answer:", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
})
