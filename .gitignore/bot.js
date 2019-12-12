// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var prefix = ";"

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(">> Bientôt Disponible <<", {type: "PLAYING"})
})

client.on('message', message =>{
    if(message.content === prefix + "aide"){
        let embed = new Discord.RichEmbed()
        .setTitle("Voici les différentes aides disponibles :")
        .setColor(couleur)
        .setDescription(";aide commandes ``Affiche toutes les commandes disponibles.`` \n ;aide autorisations ``Affiche des informations sur les rôles.``")
        message.channel.send(embed)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "aide commandes"){
        let embed = new Discord.RichEmbed()
        .setTitle("Cette commande n'est pas disponible pour le moment.")
        .setColor(couleur)
        message.channel.send(embed)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "aide autorisations"){
        let embed = new Discord.RichEmbed()
        .setTitle("Informations sur les autorisations :")
        .setColor(couleur)
        .setDescription("Certaines commandes de bot nécessitent des autorisations spéciales pour fonctionner. C'est pourquoi un membre devra avoir un de ces rôles pour utiliser une commande.")
        .addField("**__Modérateur :__**","Une personne possédant ce rôle pourra utiliser des commandes de base comme ;ban, ;kick, ;mute, ;supprime, et plus.")
        .addField("**__Administrateur :__**","Une personne possédant ce rôle pourra utiliser des commandes de gestion comme ;description, ;nouveaurole, ;bloque, ;débloque, et plus.")
        .addField("**__Super Administrateur :__**","Une personne possédant ce rôle pourra utiliser toutes les commandes disponibles.")
        message.channel.send(embed)
        let serverlog = new Discord.RichEmbed()
        .setColor(couleur)
        .addField("**__Commande:__**",";aide autorisations")
        .addField("**__Utilisateur:__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur:__**", message.guild.name + " | " + message.guild.id)
        client.channels.get("654757180037267516").send(serverlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "serveur"){
        let serverinformation = new Discord.RichEmbed()
        .setTitle("Informations sur le serveur " + message.guild.name)
        .setColor(couleur)
        .addField("**__Nom :__**", message.guild.name)
        .addField("**__ID :__**", message.guild.id)
        .addField("**__Propriétaire :__**", message.guild.owner)
        .addField("**__Date de création du serveur :__**", message.guild.createdAt)
        .addField("**__Nombre de membres :__**", message.guild.memberCount + " membres")
        .addField("**__Icône du serveur :__**", message.guild.iconURL)
        message.channel.send(serverinformation)
        let serverlog = new Discord.RichEmbed()
        .setColor(couleur)
        .addField("**__Commande:__**",";serveur")
        .addField("**__Utilisateur:__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur:__**", message.guild.name + " | " + message.guild.id)
        client.channels.get("654757180037267516").send(serverlog);
}
})

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Voici votre avatar, " + message.author.username + ".")
        .setColor(couleur)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        .setFooter("Note : L'image ne s'affiche pas correctement? Cliquez sur le lien situé en haut de ce message.")
        message.channel.send(pong_enbed)
        let avatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";avatar")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        client.channels.get("654757180037267516").send(avatarlog);
    }
})
