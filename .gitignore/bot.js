// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var status = "Test";
var prefix = "-";

client.login(process.env.TOKENBOT)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- Ban Part ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'addban') {
       let PlayerBanned = args.slice(1).join(" ")
       if (!PlayerBanned) return message.channel.send(":x: An error occurred.")
       message.channel.send("T!createcard Banlist | " + PlayerBanned)
    }
})
