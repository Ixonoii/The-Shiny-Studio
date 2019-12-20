// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var invites = ["I am required else it won't work"], ct = 0;
var color = "#007bff";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mentionne moi | mBot", {type: "PLAYING"})
})
