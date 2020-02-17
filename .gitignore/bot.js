// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
const Trello = require("trello")
var trello = new Trello("aff42b030b2c9e009b9fa35dd171faf8", "2541baf0c4f5b7f7b63f62578b1ccbb2a91fbcfff9d326fa48857f68ab380b6c");
var prefix = "-";
client.login(process.env.TOKENBOT)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- Ban Part ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'ban') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(":x: You're not allowed to use this command.")
        var nomention = new Discord.RichEmbed()
        .setTitle(":x: Please enter a username.")
       let member = args.slice(1)
       //let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send(nomention)
       trello.addCard(member, "Description not available.")
       var success = new Discord.RichEmbed()
        .setTitle(":white_check_mark: " + member + " has been banned from the game, and added in the Trello ban list.")
        .setTimestamp()
       message.channel.send(success)
    }
})
