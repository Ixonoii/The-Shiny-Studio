// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var invites = ["I am required else it won't work"], ct = 0;
var color = "#007bff";
var devids = ["434061967951659019"];
var prefix = "-";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mentionne moi | mBot", {type: "PLAYING"})
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "dit"){
    if (!args[1]) return message.delete()
        let question = args.slice(1).join(" ")
        message.channel.send(question)
        message.delete()
    }
})
