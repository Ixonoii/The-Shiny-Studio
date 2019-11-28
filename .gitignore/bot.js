// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var embedcolor = "#07a8f0";

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "<@648551591623917578>"){
        message.channel.send("**<@" + message.author.id + "> Besoin d'aide ? Utilise -cmds ou -commandes !**")
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a mentionné le BOT dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})

client.on('message', message =>{
    if(message.content === prefix + "serveur"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Informations à propos du serveur " + message.guild.name + "__")
        .setColor(embedcolor)
        .addField("Propriétaire du serveur:", message.guild.owner)
        .addField("Nombre de membres:", message.guild.memberCount + " membres")
        .addField("Région:", message.guild.region)
        .addField("Nom du serveur:", message.guild.name)
        .addField("ID du serveur:", message.guild.id)
        .addField("Icône du serveur:", message.guild.iconURL)
        .addField("Création du serveur:", message.guild.createdAt)
        message.channel.send(embed)
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -serveur dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Voici votre avatar, " + message.author.username + ".")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        message.channel.send(pong_enbed)
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -avatar dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})

client.on('message', message =>{
    if(message.content === prefix + "ping"){
        let début = Date.now();
        message.channel.send("**Chargement...**")
        .then((m) => m.edit(`**Votre latence est de: ${Date.now() - début}ms.**`));
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -ping dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "question"){
    if (!args[1]) return message.channel.send("***Quelle est ta question?***")
        let answers = ["Oui.", "Non.", "Bien sûr.", "Peut être.", "Je ne sais pas.","Jamais.","Impossible.","Aucune idée.","Aucune chance."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setColor(embedcolor)
            .addField("Question:", question)
            .addField("Réponse:", answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp(Date.now()) 
        message.channel.send(embed)
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -question dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en posant la question ``" + question + "``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})
