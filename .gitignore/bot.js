// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var embedcolor = "#07a8f0";

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mentionne moi | mBot", {type: "PLAYING"})
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

client.on('message', function(message){
    if(message.content === prefix + "cmds"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. \n ``-invite`` Envoie un lien pour inviter le BOT sur un autre serveur.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau. \n ``-purge`` Supprime un grand nombre de messages.")
        .addField("__Commandes de gestion__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. (BIENTÔT) \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'un channel. (BIENTÔT) \n ``-renomme`` Change le nom d'un channel. \n ``-nomduserveur`` Change le nom du serveur.")
        .setTimestamp(Date.now()) 
        message.channel.send(pong_enbed)
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -cmds dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "commandes"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. \n ``-invite`` Envoie un lien pour inviter le BOT sur un autre serveur. \n ``-invitation`` Envoie un lien pour inviter un utilisateur sur ce serveur.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau. \n ``-purge`` Supprime un grand nombre de messages.")
        .addField("__Commandes de gestion__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. (BIENTÔT) \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'un channel. (BIENTÔT) \n ``-renomme`` Change le nom d'un channel. \n ``-nomduserveur`` Change le nom du serveur.")
        .setTimestamp(Date.now()) 
        message.channel.send(pong_enbed)
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -cmds dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
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
        message.channel.send(embed)
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -question dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en posant la question ``" + question + "``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "signal"){
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send("**Vous devez mentionner quelqu'un.**")
        if(!question) return message.channel.send("**Vous devez entrer une raison.**")
        let embed = new Discord.RichEmbed()
        .setTitle("Fiche de rapport n°" + message.author.id)
        .setColor(embedcolor)
        .addField("Membre :", message.author.username + " (" + message.author.id + ")")
        .addField("Membre signalé :", memberMEN + " (" + memberMEN.id + ")")
        .addField("Raison :", question)
        .addField("Channel :", message.channel.name)
        .setTimestamp(Date.now()) 
        let cChannel = message.guild.channels.find(c => c.name === "reports")
        if(!cChannel) return message.channel.send("***<@" + message.author.id + "> Je ne peux pas envoyer votre signalement. Je n'ai peut-être pas les autorisations nécessaires ou le channel ``signalements`` n'existe pas sur ce serveur.***")
    cChannel.send(embed);
    message.delete();
    message.channel.send("**Signalement envoyé.**")
    let notifmention = new Discord.RichEmbed()
    .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -signalement dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en signalant le membre``" + memberMEN + "`` pour la raison ``" + question + "``.")
    .setColor(embedcolor)
    client.channels.get("648559285638266880").send(notifmention);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        if(!message.member.roles.some(r=>["Modérateur","Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send("**Vous devez mentionner quelqu'un.**")
       if (!reason) return message.channel.send("**Vous devez entrer une raison.**")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Je ne peux pas kick ce membre.**")
       if (!member.kickable) return message.channel.send("**Je ne peux pas kick ce membre.**")
       member.kick()
       message.channel.send('**' + member + ' à été kick du serveur pour la raison suivante : ' + reason + "**")
       let notifmention = new Discord.RichEmbed()
       .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -kick dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en expulsant le membre``" + memberMEN + "`` pour la raison ``" + question + "``.")
       .setColor(embedcolor)
       client.channels.get("649666046810128405").send(notifmention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
        if(!message.member.roles.some(r=>["Modérateur","Administrateur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send("**Vous devez mentionner quelqu'un.**")
       if (!reason) return message.channel.send("**Vous devez entrer une raison.**")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Je ne peux pas ban ce membre.**")
       if (!member.bannable) return message.channel.send("**Je ne peux pas ban ce membre.**")
       member.send(notif)
       message.channel.send('**' + member + ' à été ban du serveur pour la raison suivante : ' + reason + "**")
       message.delete()
       message.guild.ban(member, {days: 7, reason: question})
       let notifmention = new Discord.RichEmbed()
       .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -ban dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en expulsant le membre``" + memberMEN + "`` pour la raison ``" + question + "``.")
       .setColor(embedcolor)
       client.channels.get("649666046810128405").send(notifmention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if(!message.member.roles.some(r=>["Modérateur","Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("**Vous devez entrer un nombre.**")
        if (isNaN(count)) return message.channel.send("**Vous devez entrer un nombre.**")
        if (count < 1 || count > 100) return message.channel.send("**Vous devez entrer un nombre entre 1 et 99.**")
        message.channel.bulkDelete(count + 1)
        message.channel.send("**" + count + " messages ont été supprimés.**")
        .then((m) => m.edit("**" + count + " messages ont été supprimés.**"))
        .then((m) => m.edit("**" + count + " messages ont été supprimés.**"))
        .then((m) => m.edit("**" + count + " messages ont été supprimés.**"))
        .then((m) => m.edit("**" + count + " messages ont été supprimés.**"))
        .then((m) => m.edit("**" + count + " messages ont été supprimés.**"))
        .then((m) => m.edit("**" + count + " messages ont été supprimés.**"))
        .then((m) => m.delete())
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -purge dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en supprimant ``" + count + "`` messages.")
        .setColor(embedcolor)
        client.channels.get("649666046810128405").send(notifmention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "annonce"){
        if(!message.member.roles.some(r=>["Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
        let ENDchannel = message.mentions.channels.first()       
        let question = args.slice(2).join(" ")
        if(!ENDchannel) return message.channel.send("**Vous devez mentionner un channel.**")
        if(!question) return message.channel.send("**Vous devez entrer votre message.**")
        let annonce = new Discord.RichEmbed()
        .setTitle(question)
        .setColor(embedcolor)
    message.delete();
    ENDchannel.send(annonce)
    ENDchannel.send("@everyone")
    let notifmention = new Discord.RichEmbed()
    .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -annonce dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en envoyant le message ``" + question + "`` dans le channel " + ENDchannel + " (" + ENDchannel.id + ").")
    .setColor(embedcolor)
    client.channels.get("649666046810128405").send(notifmention);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "mute") {
        if(!message.member.roles.some(r=>["Modérateur","Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send("**Vous devez mentionner quelqu'un.**")
        if (!reason) return message.channel.send("**Vous devez entrer une raison.**")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("**Je ne peux pas rendre ce membre muet.**")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("**Je ne peux pas rendre ce membre muet.**")
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send("**" + member + ' est maintenant muet pour la raison suivante : ' + reason + "**")
            let notifmention = new Discord.RichEmbed()
            .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -mute dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en rendant muet l'utilisateur ``" + member + "`` pour la raison " + reason + ".")
            .setColor(embedcolor)
            client.channels.get("649666046810128405").send(notifmention);
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
                let notifmention = new Discord.RichEmbed()
                .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -mute dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en rendant muet l'utilisateur ``" + member + "`` pour la raison " + reason + ".")
                .setColor(embedcolor)
                client.channels.get("649666046810128405").send(notifmention);
            })
        }}
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.roles.some(r=>["Modérateur","Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send("**Vous devez mentionner quelqu'un.**")
        if (!reason) return message.channel.send("**Vous devez entrer une raison.**")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("**Je ne peux pas permette que ce membre puisse parler à nouveau.**")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("**Je ne peux pas permette que ce membre puisse parler à nouveau.**")
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send("**" + member + ' peut maintenant parler à nouveau pour la raison suivante : ' + reason + "**")
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -unmute dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en permettant que l'utilisateur ``" + member + "`` puisse parler à nouveau pour la raison " + reason + ".")
        .setColor(embedcolor)
        client.channels.get("649666046810128405").send(notifmention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "renomme"){
        if(!message.member.roles.some(r=>["Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
        let question = args.slice(1).join(" ")
        if (!question) return message.channel.send("**Vous devez entrer le nouveau nom du channel.**")
        message.channel.setName(question)
        message.channel.send("**Channel renommé : " + question + "**")
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -renomme dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en renommant le channel en ``" + question + "``.")
        .setColor(embedcolor)
        client.channels.get("649671777508917289").send(notifmention);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "pseudo"){
        if(!message.member.roles.some(r=>["Modérateur","Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
        let membER = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if (!membER) return message.channel.send("**Vous devez mentionner quelqu'un.**")
        if (!question) return message.channel.send("**Vous devez entrer le nouveau pseudo.**")
        membER.setNickname(question)
    message.channel.send("**Le nouveau pseudo du membre " + membER + " est maintenant : " + question + "**")
    let notifmention = new Discord.RichEmbed()
    .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -pseudo dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en renommant l'utilisateur ``" + membER + "``en ``" + question + "``.")
    .setColor(embedcolor)
    client.channels.get("649666046810128405").send(notifmention);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "nouveaurole"){
    if(!message.member.roles.some(r=>["Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
    if (!args[1]) return message.channel.send("**Vous devez entrer un nom.**")
        let question = args.slice(1).join(" ")
        message.guild.createRole({
            name: question,
            color: "#000000"
        })
        message.channel.send("**Rôle ajouté à la liste : " + question + "**")
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -nouveaurole dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en créant le rôle ``"  + question + "``.")
        .setColor(embedcolor)
        client.channels.get("649671777508917289").send(notifmention);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "supprimechannel"){
        if(!message.member.roles.some(r=>["Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
        message.channel.delete()
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -supprimechannel dans le serveur ``" + message.guild.name  + "``.")
        .setColor(embedcolor)
        client.channels.get("649671777508917289").send(notifmention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "nomduserveur"){
    if(!message.member.roles.some(r=>["???développeur","????directeur AXY","????fondateur","???administrateur","????Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        if (!args[1]) return message.channel.send("***Veuillez entrer un nom.***")
        let question = args.slice(1).join(" ")
        message.channel.guild.setName(question)
        message.channel.send("***Nom du serveur modifié : " + question + "***")
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -nomduserveur dans le serveur ``" + message.guild.name  + "``.")
        .setColor(embedcolor)
        client.channels.get("649671777508917289").send(notifmention);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "sujet"){
        if(!message.member.roles.some(r=>["Administrateur"].includes(r.name)) ) return message.channel.send("**Vous ne pouvez pas utiliser cette commande.**")
        if (!args[1]) return message.channel.send("**Veuillez entrer un sujet.**")
        let question = args.slice(1).join(" ")
        message.channel.setTopic(question)
        message.channel.send("**Sujet modifié : " + question + "**")
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -sujet dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")`` en changeant le sujet à ``" + question + "``.")
        .setColor(embedcolor)
        client.channels.get("649671777508917289").send(notifmention);
}
})

client.on('message', function(message){
    if(message.content === prefix + "invite"){
        let inviteurl = new Discord.RichEmbed()
        .setTitle("Pour ajouter mBot sur un autre serveur cliquez sur ce lien !")
        .setURL('https://discordapp.com/oauth2/authorize?client_id=648551591623917578&scope=bot&permissions=8')
        .setColor(embedcolor)
        message.channel.send(inviteurl)
        let notifmention = new Discord.RichEmbed()
        .setTitle("L'utilisateur ``" + message.author.tag + " (" + message.author.id + ")`` a utilisé la commande -invite dans le serveur ``" + message.guild.name  + " (" + message.guild.id + ")`` depuis le channel ``" + message.channel.name + " (" + message.channel.id + ")``.")
        .setColor(embedcolor)
        client.channels.get("648559285638266880").send(notifmention);
    }
})
