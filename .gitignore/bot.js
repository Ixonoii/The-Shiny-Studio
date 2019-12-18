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

 // client.on("guildCreate", guild => {
    //client.channels.get("654757180037267516").send("I've been added on a server! " + guild.name);
//})

client.on('message', message =>{
    if(message.content === prefix + "aide"){
        let embed = new Discord.RichEmbed()
        .setTitle("Voici les différentes aides disponibles :")
        .setColor(couleur)
        .setDescription(";aide commandes ``Affiche toutes les commandes disponibles.`` \n ;aide autorisations ``Affiche des informations sur les rôles.``")
        message.channel.send(embed)
    }
})

client.on('message', function(message){
    if(message.content === prefix + "cmds"){
        var pong_enbed = new Discord.RichEmbed()
        .setColor(couleur)
        .addField("**__Commandes publiques :__**",";aide ``Affiche plusieurs aides.`` \n ;cmds/commandes ``Affiche les commandes disponibles.`` \n ;avatar ``Affiche votre photo de profil Discord.`` \n ;signal ``Signal un membre du serveur.`` \n ;bug `` Signal un bug à notre équipe de développeurs.`` \n ;info ``Affiche plusieurs informations à propos d'un membre.`` \n ;8ball `` Répond à vos questions.`` \n ;serveur `` Affiche plusieurs informations à propos d'un serveur.``")
        .addField("**__Commandes d'administration :__**",";kick ``Expulse un membre.`` \n ;ban ``Ban un membre.`` \n ;softban ``Ban puis un-ban un membre.`` \n ;supprime ``Supprime un grand nombre de messages.`` \n ;mute ``Rend un membre muet.`` \n ;un-mute ``Rend un membre un-muet.`` \n ;pseudo ``Renomme un membre.``")
        .addField("**__Commandes de gestion :__**",";rôle ``Créé un nouveau rôle.`` \n ;renomme ``Renomme un channel.`` \n ;sujet ``Définie le sujet d'un channel.`` \n ;nomduserveur ``Renomme un serveur.``")
        .setFooter("Plus de commandes très bientôt !")
        message.channel.send(pong_enbed)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";cmds")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        client.channels.get("654757180037267516").send(serverlog);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "commandes"){
        var pong_enbed = new Discord.RichEmbed()
        .setColor(couleur)
        .addField("**__Commandes publiques :__**",";aide ``Affiche plusieurs aides.`` \n ;cmds/commandes ``Affiche les commandes disponibles.`` \n ;avatar ``Affiche votre photo de profil Discord.`` \n ;signal ``Signal un membre du serveur.`` \n ;bug `` Signal un bug à notre équipe de développeurs.`` \n ;info ``Affiche plusieurs informations à propos d'un membre.`` \n ;8ball `` Répond à vos questions.`` \n ;serveur `` Affiche plusieurs informations à propos d'un serveur.``")
        .addField("**__Commandes d'administration :__**",";kick ``Expulse un membre.`` \n ;ban ``Ban un membre.`` \n ;softban ``Ban puis un-ban un membre.`` \n ;supprime ``Supprime un grand nombre de messages.`` \n ;mute ``Rend un membre muet.`` \n ;un-mute ``Rend un membre un-muet.`` \n ;pseudo ``Renomme un membre.``")
        .addField("**__Commandes de gestion :__**",";rôle ``Créé un nouveau rôle.`` \n ;renomme ``Renomme un channel.`` \n ;sujet ``Définie le sujet d'un channel.`` \n ;nomduserveur ``Renomme un serveur.``")
        .setFooter("Plus de commandes très bientôt !")
        message.channel.send(pong_enbed)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";commandes")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        client.channels.get("654757180037267516").send(serverlog);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "aide autorisations"){
        var pong_enbed = new Discord.RichEmbed()
        .setColor(couleur)
        .addField("**__Commandes publiques :__**",";aide ``Affiche plusieurs aides.`` \n ;cmds/commandes ``Affiche les commandes disponibles.`` \n ;avatar ``Affiche votre photo de profil Discord.`` \n ;signal ``Signal un membre du serveur.`` \n ;bug `` Signal un bug à notre équipe de développeurs.`` \n ;info ``Affiche plusieurs informations à propos d'un membre.`` \n ;8ball `` Répond à vos questions.`` \n ;serveur `` Affiche plusieurs informations à propos d'un serveur.``")
        .addField("**__Commandes d'administration :__**",";kick ``Expulse un membre.`` \n ;ban ``Ban un membre.`` \n ;softban ``Ban puis un-ban un membre.`` \n ;supprime ``Supprime un grand nombre de messages.`` \n ;mute ``Rend un membre muet.`` \n ;un-mute ``Rend un membre un-muet.`` \n ;pseudo ``Renomme un membre.``")
        .addField("**__Commandes de gestion :__**",";rôle ``Créé un nouveau rôle.`` \n ;renomme ``Renomme un channel.`` \n ;sujet ``Définie le sujet d'un channel.`` \n ;nomduserveur ``Renomme un serveur.``")
        .setFooter("Plus de commandes très bientôt !")
        message.channel.send(pong_enbed)
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

    if (args[0].toLowerCase() === prefix + "mute") {
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer une raison.")
        .setColor(couleur)
        let cantbmute = new Discord.RichEmbed()
        .setTitle("Je ne peux pas rendre ce membre muet.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Modérateur","Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(nomention)
        if (!reason) return message.channel.send(noreason)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cantbmute)
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(cantbmute)
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if (muterole) {
            member.addRole(muterole)
            let success = new Discord.RichEmbed()
            .setTitle(member.displayName + " est maintenant muet pour la raison suivante : " + reason)
            .setColor(couleur)
            message.channel.send(success)
            let serverlog = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor(couleur)
            .addField("**__Commande :__**",";mute")
            .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
            .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
            .addField("**__Membre rendu muet :__**", member + " | " + member.id)
            .addField("**__Raison :__**", reason + " | " + message.id)
            client.channels.get("655085219979984917").send(serverlog);
        }
        else {
            message.guild.createRole({name: 'Muet', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                let success = new Discord.RichEmbed()
                .setTitle(member.displayName + " est maintenant muet pour la raison suivante : " + reason)
                .setColor(couleur)
                message.channel.send(success)
                let serverlog = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setColor(couleur)
                .addField("**__Commande :__**",";mute")
                .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
                .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
                .addField("**__Membre rendu muet :__**", member + " | " + member.id)
                .addField("**__Raison :__**", reason + " | " + message.id)
                client.channels.get("655085219979984917").send(serverlog);
            })
        }}
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unmute") {
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer une raison.")
        .setColor(couleur)
        let cantunmute = new Discord.RichEmbed()
        .setTitle("Je ne peux pas rendre ce membre un-muet.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Modérateur","Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if (!reason) return message.channel.send(noreason)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cantunmute)
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(cantunmute)
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        let success = new Discord.RichEmbed()
        .setTitle(member.displayName + " est maintenant un-muet pour la raison suivante : " + reason)
        .setColor(couleur)
        message.channel.send(success)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";unmute")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Membre rendu un-muet :__**", member + " | " + member.id)
        .addField("**__Raison :__**", reason + " | " + message.id)
        client.channels.get("655085219979984917").send(serverlog);
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "pseudo") {
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un pseudo.")
        .setColor(couleur)
        let cantrenamme = new Discord.RichEmbed()
        .setTitle("Je ne peux pas renommer ce membre.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Modérateur","Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if (!reason) return message.channel.send(noreason)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cantrenamme)
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(cantrenamme)
        member.setNickname(reason)
        let success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été renommé en : " + reason)
        .setColor(couleur)
        message.channel.send(success)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";pseudo")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Membre renommé :__**", member + " | " + member.id)
        .addField("**__Nouveau pseudo :__**", reason + " | " + message.id)
        client.channels.get("655085219979984917").send(serverlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "supprime") {
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        let nocount = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un nombre.")
        .setColor(couleur)
        let nocount2 = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un pseudo.")
        .setColor(couleur)
        let nocount3 = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un nombre entre 1 et 99.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Modérateur","Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let count = parseInt(args[1])
        if (!count) return message.channel.send(nocount)
        if (isNaN(count)) return message.channel.send(nocount2)
        if (count < 1 || count > 100) return message.channel.send(nocount3)
        message.channel.bulkDelete(count + 1)
        let success = new Discord.RichEmbed()
        .setTitle(count + " messages ont été supprimés.")
        .setColor(couleur)
        message.channel.send(success)
        .then((m) => m.edit(success))
        .then((m) => m.edit(success))
        .then((m) => m.edit(success))
        .then((m) => m.edit(success))
        .then((m) => m.edit(success))
        .then((m) => m.edit(success))
        .then((m) => m.delete())
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";supprime")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Messages supprimés :__**", count + " | " + message.id)
        client.channels.get("655085219979984917").send(serverlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'softban') {
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
        .setTitle("Je ne peux pas soft-bannir ce membre.")
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
        .setTitle(member.displayName + " à été soft-banni du serveur pour la raison suivante : " + reason)
        .setColor(couleur)
       message.channel.send(success)
       member.ban({days: 7, reason: reason})
       message.guild.unban(member)
       let serverlog = new Discord.RichEmbed()
       .setAuthor(message.author.tag, message.author.displayAvatarURL)
       .setColor(couleur)
       .addField("**__Commande :__**",";softban")
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

    if (args[0].toLocaleLowerCase()=== prefix + "signal"){
        let nomention = new Discord.RichEmbed()
        .setTitle("Vous devez mentionner quelqu'un.")
        .setColor(couleur)
        let noreason = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un pseudo.")
        .setColor(couleur)
        let success = new Discord.RichEmbed()
        .setTitle("Votre rapport a été envoyé.")
        .setColor(couleur)
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send(nomention)
        if(!question) return message.channel.send(noreason)
        let embed = new Discord.RichEmbed()
        .setTitle('Un signalement a été envoyé !')
        .setColor(couleur)
        .addField('**__Utilisateur :__** ', message.author + " | " + message.author.id)
        .addField('**__Utilisateur signalé :__** ', memberMEN + " | " + memberMEN.id)
        .addField('**__Reason :__**', question + " | " + message.id)
        .addField('**__Signalé depuis le channel :__**',"<#" + message.channel.id + "> | " + message.channel.id)
        let cChannel = message.guild.channels.find(c => c.name === "signalements")
        let channelnontrouvé = new Discord.RichEmbed()
        .setTitle("Je ne peux pas envoyer votre signalement car le channel ``signalements`` n'existe pas sur ce serveur.")
        .setColor(couleur)
        if(!cChannel) return message.channel.send(channelnontrouvé)
        if(!cChannel) return message.delete()
    cChannel.send(embed);
    message.channel.send(success)
    message.delete();
    let serverlog = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(couleur)
    .addField("**__Commande :__**",";signal")
    .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
    .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
    .addField("**__Membre signalé :__**", memberMEN + " | " + memberMEN.id)
    .addField("**__Raison :__**", question + " | " + message.id)
    client.channels.get("654757180037267516").send(serverlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "8ball"){
        let noquestion = new Discord.RichEmbed()
        .setTitle("Vous devez entrer une question.")
        .setColor(couleur)
        let waitinganswer = new Discord.RichEmbed()
        .setTitle("Je réfléchis ...")
        .setColor(couleur)
        let waitinganswer2 = new Discord.RichEmbed()
        .setTitle("La réponse est ...")
        .setColor(couleur)
    if (!args[1]) return message.channel.send(noquestion)
        let answers = ["Oui !", "Non !", "Bien sûr.", "Peut être", "Je ne sais pas !","Jamais !","Impossible!"]
        let question = args.slice(1).join(" ")
        let answer = new Discord.RichEmbed()
        .setTitle("La réponse est : " + answers[Math.floor(Math.random() * answers.length)])
        .setColor(couleur)
        message.channel.send(waitinganswer)
        .then((m) => m.edit(waitinganswer))
        .then((m) => m.edit(waitinganswer))
        .then((m) => m.edit(waitinganswer))
        .then((m) => m.edit(waitinganswer))
        .then((m) => m.edit(waitinganswer))
        .then((m) => m.edit(waitinganswer2))
        .then((m) => m.edit(waitinganswer2))
        .then((m) => m.edit(waitinganswer2))
        .then((m) => m.edit(waitinganswer2))
        .then((m) => m.edit(waitinganswer2))
        .then((m) => m.edit(answer))
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";8ball")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Question :__**", question + " | " + message.id)
        client.channels.get("654757180037267516").send(serverlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "rôle"){
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let noname = new Discord.RichEmbed()
        .setTitle("Vous devez entrer le nom du nouveau rôle.")
        .setColor(couleur)
    if (!args[1]) return message.channel.send(noname)
        let question = args.slice(1).join(" ")
        message.guild.createRole({
            name: question,
            color: "#000000"
        })
        let success = new Discord.RichEmbed()
        .setTitle("Rôle créé : " + question)
        .setColor(couleur)
        message.channel.send(success)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";rôle")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Role créé :__**", question + " | " + message.id)
        client.channels.get("655365898688790558").send(serverlog);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "renomme"){
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let noname = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un nouveau nom.")
        .setColor(couleur)
        if (!args[1]) return message.channel.send(noname)
        let question = args.slice(1).join(" ")
        message.channel.setName(question)
        let success = new Discord.RichEmbed()
        .setTitle("Channel renommé en : " + question)
        .setColor(couleur)
        message.channel.send(success)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";renomme")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Nouveau nom :__**", question + " | " + message.id)
        client.channels.get("655365898688790558").send(serverlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "sujet"){
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
        if(!message.member.roles.some(r=>["Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let noname = new Discord.RichEmbed()
        .setTitle("Vous devez entrer un nouveau sujet.")
        .setColor(couleur)
        if (!args[1]) return message.channel.send(noname)
        let question = args.slice(1).join(" ")
        message.channel.setTopic(question)
        let success = new Discord.RichEmbed()
        .setTitle("Sujet du channel changé en : " + question)
        .setColor(couleur)
        message.channel.send(success)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";sujet")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Nouveau sujet :__**", question + " | " + message.id)
        client.channels.get("655365898688790558").send(serverlog);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "nomduserveur"){
        let notallowed = new Discord.RichEmbed()
        .setTitle("Vous n'êtes pas autorisé à utiliser cette commande.")
        .setColor(couleur)
    if(!message.member.roles.some(r=>["Administrateur","Super Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let noname = new Discord.RichEmbed()
        .setTitle("Vous devez entrer le nouveau nom du serveur.")
        .setColor(couleur)
        if (!args[1]) return message.channel.send(noname)
        let question = args.slice(1).join(" ")
        message.channel.guild.setName(question)
        let success = new Discord.RichEmbed()
        .setTitle("Serveur renommé en : " + question)
        .setColor(couleur)
        message.channel.send(success)
        let serverlog = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(couleur)
        .addField("**__Commande :__**",";nomduserveur")
        .addField("**__Utilisateur :__**", message.author.tag + " | " + message.author.id)
        .addField("**__Serveur :__**", message.guild.name + " | " + message.guild.id)
        .addField("**__Nouveau nom :__**", question + " | " + message.id)
        client.channels.get("655365898688790558").send(serverlog);
}
})
