// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var prefix = "-"
const userID = '<@434061967951659019>'

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(";aide", {type: "PLAYING"})
})

bot.on("message", function(message){
if(!message.author === userID)
{

if(message.content === 'psst')
    {
        message.channel.send('Hello there!');
    }
}});
