// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs')
var couleur = "#00f0ff";
var prefix = ";"
var erreurperm = "Vous ne pouvez pas utiliser cette commande."

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
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
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
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
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
        .setFooter("Note : L'image ne s'affiche pas correctement ? Cliquez sur le lien situé en haut de ce message.")
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

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "info"){
        let memberMEN = message.mentions.members.first()
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        if(!memberMEN) return message.channel.send(nomention)
        let whois = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Nom :__**", memberMEN)
        .addField("**__ID :__**", memberMEN.id)
        .addField("**__Surnom :__**", memberMEN.nickname)
        .addField("**__Date d'arrivée :__**", memberMEN.joinedAt)
    message.channel.send(whois)
    let whoislog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(couleur)
    .addField("**__Commande :__**",";info")
    .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
    .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
    .addField("**__Utilisateur mentionné :__**", memberMEN + " | " + memberMEN.id)
    client.channels.get("654757180037267516").send(whoislog);
}})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "signal"){
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer une raison.")
        .setColor(couleur)
        let nochannel = new Discord.RichEmbed()
        .setTitle("Je ne peux pas envoyer votre signalement. Je n'ai peut-être pas l'autorisation nécessaire, ou le channel ``signalements`` n'existe pas sur ce serveur.")
        .setColor(couleur)
        let success = new Discord.RichEmbed()
        .setTitle("Signalement envoyé.")
        .setColor(couleur)
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send(nomention)
        if(!question) return message.channel.send(noreason)
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Utilisateur :__**", message.author.username + " | " + message.author.id + ")")
        .addField("**__Utilisateur signalé :__**", memberMEN + " | " + memberMEN.id + ")")
        .addField("**__Raison(s) du signalement:__**", question)
        .addField("**__Envoyé depuis le channel :__**", "<#" + message.channel.id + "> | " + message.channel.id)
        let cChannel = message.guild.channels.find(c => c.name === "signalements")
        if(!cChannel) return message.channel.send(nochannel)
    cChannel.send(embed);
    message.delete();
    message.channel.send(success)
        let setavatarlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";signal")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur__**:", message.guild.name + " | " + message.guild.id)
        .addField("**__Utilisateur signalé :__**", memberMEN + " | " + memberMEN.id)
        .addField("**__Raison(s) du signalement :__**", question)
        client.channels.get("654757180037267516").send(setavatarlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "bug"){
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un message.")
        .setColor(couleur)
        let success = new Discord.RichEmbed()
        .setTitle("Bug signalé.")
        .setColor(couleur)
        let question = args.slice(1).join(" ")
        if(!question) return message.channel.send(noreason)
        let ReportInformationCard = new Discord.RichEmbed()
        .setTitle("Un bug à était signalé :")
        .setColor(couleur)
        .addField("**Description :__**", question)
        .addField("**__Bug envoyé par :__**", message.author.tag + " | " + message.author.id)
        message.channel.send(success)
        client.channels.get("654757180037267516").send(ReportInformationCard);
}
})
