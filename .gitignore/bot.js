// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var embedcolor = "#7e05ca";

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mention me | ;cmds", {type: "PLAYING"})
})                                                             

client.on('message', function(message){
    if(message.content === "<@650067878292357170>"){
        let informationembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle("Hello " + message.author.username + ". I'm Space Assistant, the official bot of Space Studios. Need help? Use the " + prefix + "cmds command!")
        .setColor(embedcolor)
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

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "pingannounce"){
        let errormessage1 = new Discord.RichEmbed()
        .setTitle(":x: You have to mention a channel.")
        .setColor(embedcolor)
        let errormessage2 = new Discord.RichEmbed()
        .setTitle(":x: You have to enter a message.")
        .setColor(embedcolor)
        let successmessage = new Discord.RichEmbed()
        .setTitle(":white_check_mark: You have to mention a channel.")
        .setColor(embedcolor)
        let ENDchannel = message.mentions.channels.first()       
        let question = args.slice(2).join(" ")
        if(!ENDchannel) return message.channel.send(errormessage1)
        if(!question) return message.channel.send(errormessage2)
        let annonce = new Discord.RichEmbed()
        .setTitle(question)
        .setColor(embedcolor)
        .setFooter("Space Studios Management Team.")
        message.delete()
        ENDchannel.send(annonce)
        ENDchannel.send("@everyone")
        .then((m) => m.delete());
        message.channel.send(successmessage)
}
})
