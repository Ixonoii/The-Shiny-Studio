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
        .addField("**__Commande :__**",";aide autorisations")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
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
        .setTitle("Merci d'avoir signalé ce bug.")
        .setColor(couleur)
        let question = args.slice(1).join(" ")
        if(!question) return message.channel.send(noreason)
        let ReportInformationCard = new Discord.RichEmbed()
        .setTitle("Un bug à était signalé :")
        .setColor(couleur)
        .addField("**__Description :__**", question)
        .addField("**__Bug envoyé par :__**", message.author.tag + " | " + message.author.id)
        message.channel.send(success)
        client.channels.get("655082224189833246").send(ReportInformationCard);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer une raison.")
        .setColor(couleur)
        let cantban = new Discord.RichEmbed()
        .setTitle("Je ne peux pas bannir ce membre.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Modérateur","Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send(nomention)
       if (!reason) return message.channel.send(noreason)
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantban)
       if (!member.bannable) return message.channel.send(cantban)
       message.delete()
       let success = new Discord.RichEmbed()
        .setTitle(member.displayName + " à été banni du serveur pour la raison suivante : " + reason)
        .setColor(couleur)
       message.channel.send(success)
       member.ban({days: 7, reason: reason})
       let serverlog = new Discord.RichEmbed()
       .setAuthor(message.author.tag, message.author.displayAvatarURL)
       .setColor(couleur)
       .addField("**__Commande :__**",";ban")
       .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
       .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
       .addField("**__Membre banni :__**", member + " | " + member.id)
       .addField("**__Raison :__**", reason + " | " + message.id)
       client.channels.get("655085219979984917").send(serverlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick') {
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer une raison.")
        .setColor(couleur)
        let cantban = new Discord.RichEmbed()
        .setTitle("Je ne peux pas expulser ce membre.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Modérateur","Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send(nomention)
       if (!reason) return message.channel.send(noreason)
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantban)
       if (!member.bannable) return message.channel.send(cantban)
       message.delete()
       let success = new Discord.RichEmbed()
        .setTitle(member.displayName + " à été expulsé du serveur pour la raison suivante : " + reason)
        .setColor(couleur)
       message.channel.send(success)
       member.kick()
       let serverlog = new Discord.RichEmbed()
       .setAuthor(message.author.tag, message.author.displayAvatarURL)
       .setColor(couleur)
       .addField("**__Commande :__**",";kick")
       .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
       .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
       .addField("**__Membre expulsé :__**", member + " | " + member.id)
       .addField("**__Raison :__**", reason + " | " + message.id)
       client.channels.get("655085219979984917").send(serverlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'vérifie') {
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez entrer l'ID d'un serveur.")
        .setColor(couleur)
        .setColor(couleur)
        let notfound = new Discord.RichEmbed()
        .setTitle("Arplex n'est pas sur ce serveur.")
        .setColor(couleur)
        .setColor(couleur)
        if(!message.author.id === "434061967951659019") return message.channel.send(notallowed)
       let channelid = args.slice(1).join(" ")
       if(!channelid) return message.channel.send(nomention)
       client.guilds.get(channelid).setName(client.guilds.get(channelid).name)
       if(!client.guilds.get(channelid)) return message.channel.send(notfound)
    }
})
