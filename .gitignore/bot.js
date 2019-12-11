// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var embedcolor = "#7e05ca";

client.on('ready', function(){
    client.user.setActivity(">> Bientôt Disponible <<", {type: "PLAYING"})
})

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)


                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "<@654374834888769556>"){
        if(!message.author.id === "434061967951659019") return message.channel.send("Vous n'êtes pas mon créateur.")
        let réponse = new Discord.RichEmbed()
        .setAuthor(message.author.displayAvatarURL, message.author.username)
        .setTitle("Besoin d'aide ?")
        .setColor(couleur)
        .setDescription("Test!")
    }
})
