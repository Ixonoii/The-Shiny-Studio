                                                                 // CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
var credits = "P4W - Tous Droits Réservés";
var embedcolor = "#049ef3"
var versionBOT = "0.0.1"
var nbcommandes = "0"
var MAJ = "Dimanche 10 Novembre"
var prefix = "-"

                                                                 // BOT TOKEN //

client.login(process.env.BOT_TOKEN)

                                                                 // BOT STATUS //

client.on('ready', function(){
    client.user.setActivity("Mentionne moi !", {type: "PLAYING"})
})

                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "<@643152257822621696>"){
        message.channel.send("***<@" + message.author.id + "> Besoin d'aide ? Utilise -cmds ou -commandes !***")
    }
})

                                                                 // INFO COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "info"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Informations à propos du BOT P4W__")
        .setColor(embedcolor)
        .addField("Préfix:", prefix)
        .addField("Version du BOT:", versionBOT)
        .addField("Commandes disponibles:", nbcommandes)
        .addField("Dernière mise à jour:",MAJ)
        .addField("Développeur:","Ixonoii#1111")
        message.channel.send(embed)
    }
})

                                                                 // CMDS COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "cmds"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. (INDISPONIBLE ACTUELLEMENT) \n ``-idée`` Vous permet de partager une de vos idées.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-softban`` Ban puis unban unmembre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau. \n ``-purge`` Sipprime un grand nombre de messages.")
        .addField("__Commandes de gestion (BIENTÔT)__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'une chaîne. \n ``-renomme`` Change le nom d'un channel.")
        message.channel.send(pong_enbed)
    }
})

client.on('message', function(message){
    if(message.content === prefix + "commandes"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. (INDISPONIBLE ACTUELLEMENT) \n ``-idée`` Vous permet de partager une de vos idées.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-softban`` Ban puis unban unmembre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau.")
        .addField("__Commandes de gestion (BIENTÔT)__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'une chaîne. \n ``-renomme`` Change le nom d'un channel.")
        message.channel.send(pong_enbed)
    }
})

                                                                 // SERVEUR COMMAND //

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
    }
})

                                                                 // AVATAR COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Voici votre avatar, " + message.author.username + ".")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)

        message.channel.send(pong_enbed)
    }
})

                                                                 // OBJECTIFS COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "objectifs"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("L'objectif P4W:fire:")
        .setColor(embedcolor)
        .setDescription("\n\n Bonjour / Bonsoir à tous. \n La P4W reprend les recrutements dans son équipe eSportive.c \n\n Nos projets ? \n \n")
        .addField("Voici la liste des projets payants :","\n - Passer sous loi 1901 \n - Avoir des maillots \n - Participer à des lans \n - Offrir des cadeaux à notre communauté \n \n")
        .addField("Liste des projets gratuits :","\n - Lancer notre WebTv \n - Ce faire connaître \n - Trouver de très bon joueurs \n - Être connus sur les Réseaux \n")
        .addField("Qu'es que nous recherchons ?","\n - Modérateurs (15 ans minimum) \n - Entraîneur (15 ans minimum) \n - Graphistes et Monteurs vidéos (pas d'âge requis) \n -Joueurs eSport (14 ans minimum) \n \n #Player4Winners :flag_cp: \n")
        message.channel.send(pong_enbed)
    }
})

                                                                 // AVATAR COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "ping"){
        let début = Date.now();
        message.channel.send("***Chargement...***")
        .then((m) => m.edit(`***Votre latence est de: ${Date.now() - début}ms.***`));
    }
})

                                                                 // QUESTION COMMAND //

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
        message.channel.send(embed)
    }
})

                                                                 // INVITE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "invite"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let memberMEN = message.mentions.members.first()
        let date1 = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if(!date1) return message.channel.send("***Vous devez choisir une date.***")
        let embed = new Discord.RichEmbed()
        .setTitle("__Vous êtes invité à participer à un tournoi !__")
        .setColor(embedcolor)
        .setDescription("Vous êtes invité à participer à un tournoi organisé par " + message.author.username + " le " + date1 + ". Si vous êtes disponible, merci de prévenir le responsable du tournoi.")
    message.delete();
    memberMEN.send(embed)
}
})

                                                                 // SIGNAL COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "BROKEN"){
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if(!question) return message.channel.send("***Vous devez entrer une raison.***")
        let embed = new Discord.RichEmbed()
        .setTitle("Fiche de rapport n°" + message.author.id + "\n \n Membre: ``" + message.author.username + "``\n Membre signalé: ``" + memberMEN.joinedAt + "``\n Raison du signalement: ``" + question + "``\n Signalement envoyé depuis le channel: ``" + message.channel.name + "``")
        .setColor(embedcolor)
        let cChannel = message.guild.channels.find(c => c.name === "signalements")
        if(!cChannel) return message.channel.send("***<@" + message.author.id + "> Je ne peux pas envoyer votre report. Je n'ai peut-être pas les autorisations nécessaires ou le channel ``reports`` n'existe pas sur ce serveur.***")
    cChannel.send(embed);
    message.delete();
    message.channel.send("***Signalement envoyé.***")
}
})

                                                                 // KICK COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🎖️] MODÉRATEUR","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
       if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("***Je ne peux pas kick ce membre.***")
       if (!member.kickable) return message.channel.send("***Je ne peux pas kick ce membre.***")
       member.kick()
       message.channel.send('***' + member + ' à été kick du serveur pour la raison suivante : ' + reason + "***")
    }
})

                                                                 // BAN COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🎖️] MODÉRATEUR","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
       if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("***Je ne peux pas ban ce membre.***")
       if (!member.bannable) return message.channel.send("***Je ne peux pas ban ce membre.***")
       member.send(notif)
       message.channel.send('***' + member + ' à été ban du serveur pour la raison suivante : ' + reason + "***")
       message.delete()
       message.guild.ban(member, {days: 7, reason: question})
    }
})

                                                                 // PURGE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("***Vous devez entrer un nombre.***")
        if (isNaN(count)) return message.channel.send("***Vous devez entrer un nombre.***")
        if (count < 1 || count > 100) return message.channel.send("***Vous devez entrer un nombre entre 1 et 99.***")
        message.channel.bulkDelete(count + 1)
        message.channel.send("***" + count + " messages ont été supprimés.***")
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.delete())
    }
})

                                                                 // ANNONCE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "annonce"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let ENDchannel = message.mentions.channels.first()       
        let question = args.slice(2).join(" ")
        if(!ENDchannel) return message.channel.send("***Vous devez mentionner un channel.***")
        if(!question) return message.channel.send("***Vous devez entrer votre message.***")
        let annonce = new Discord.RichEmbed()
        .setTitle(question)
        .setColor(embedcolor)
    message.delete();
    ENDchannel.send(annonce)
    ENDchannel.send("@everyone")
}
})

                                                                 // MUTE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "mute") {
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🎖️] MODÉRATEUR","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("***Je ne peux pas rendre ce membre muet.***")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("***Je ne peux pas rendre ce membre muet.***")
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send("***" + member + ' est maintenant muet pour la raison suivante : ' + reason + "***")
        }
        else {
            message.guild.createRole({name: 'Muet', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send("***" + member + ' est maintenant muet pour la raison suivante : ' + reason + "***")
            })
        }}
})

                                                                 // UNMUTE COMMAND //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🎖️] MODÉRATEUR","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("***Je ne peux pas permette que ce membre puisse parler à nouveau.***")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("***Je ne peux pas permette que ce membre puisse parler à nouveau.***")
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send("***" + member + ' peut maintenant parler à nouveau pour la raison suivante : ' + reason + "***")
    }
})

                                                                 // INVITATION COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "invitation"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🎖️] MODÉRATEUR","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        message.channel.createInvite()
        .then(invite => message.channel.send(`***Invitation créée : discord.gg/${invite.code}***`))
    }
})

                                                                 // RENOMME COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "renomme"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let question = args.slice(1).join(" ")
        if (!question) return message.channel.send("***Vous devez entrer le nouveau nom du channel.***")
        message.channel.setName(question)
        message.channel.send("***Channel renommé : " + question + "***")
}
})

                                                                 // IDEE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "idée"){
        if (!args[1]) return message.channel.send("***Vous devez entrer une idée.***")
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle("Une nouvelle idée a étais envoyée :")
        .setColor(embedcolor)
        .setDescription(question)
        .setFooter("Idée envoyée par " + message.author.tag)
        let cChannel = message.guild.channels.find(c => c.name === "idées")
        if(!cChannel) return message.channel.send("***<@" + message.author.id + "> Je ne peux pas envoyer votre idée. Je n'ai peut-être pas les autorisations nécessaires ou le channel ``idées`` n'existe pas sur ce serveur.***")
    cChannel.send(embed)
    cChannel.send("<@!434061967951659019>")
    message.channel.send("***Idée envoyée.***")
    message.delete();
}
})

                                                                 // PM COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "pm"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let membER = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if (!membER) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if (!question) return message.channel.send("***Vous devez entrer votre message.***")
        let embed = new Discord.RichEmbed()
        .setTitle("Vous avez reçu un message de la part de " + message.author.username + " :")
        .setColor(embedcolor)
        .setDescription(question)
        membER.send(embed)
    message.delete();
}
})

                                                                 // PSEUDO COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "pseudo"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let membER = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if (!membER) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if (!question) return message.channel.send("***Vous devez entrer le nouveau pseudo.***")
        membER.setNickname(question)
    message.channel.send("***Le nouveau pseudo du membre " + membER + " est maintenant : " + question + "***")
}
})

client.on('message', function(message){
    if(!message.author.id === "434061967951659019") {
        message.channel.send(":white_check_mark:")
    } else {
        message.channel.send(":x:")
    }
})
