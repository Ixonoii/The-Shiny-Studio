// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var status = "Test";
var errorlogo = "659504785036148750";
var successlogo = "659504835535831060";
var notallowedmessage = "Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.";
var supportlink = "https://discord.gg/qn9WzNk"
var invitebotlink = "https://discordapp.com/oauth2/authorize?client_id=665615222920183808&scope=bot&permissions=8"

client.login(process.env.TOKENBOT)

const warns = JSON.parse(fs.readFileSync('./warns.json'))

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- CMDS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "cmds") {
        var cmdsembed = new Discord.RichEmbed()
        .addField("**:link: Liens**","Envie d'inviter Arplex sur votre serveur ? ``;invite`` \n Envie de rejoindre notre serveur Discord ? ``;support``")
        .addField("**:smile: Fun**", prefix + "kiss ``Embrasse quelqu'un.`` \n" + prefix + "slap ``Giffle quelqu'un.`` \n" + prefix + "fight ``Combat quelqu'un.`` \n" + prefix + "hugs ``Fait un calîn à quelqu'un.`` \n" + prefix + "think ``Pense à quelqu'un.`` \n" + prefix + "8ball ``Pose une question.``")
        .addField("**:hammer: Modération**", prefix + "mute ``Mute un utilisateur.`` \n" + prefix + "unmute ``Unmute un utilisateur.`` \n" + prefix + "ban ``Ban un utilisateur.`` \n" + prefix + "softban ``Softban un utilisateur.`` \n" + prefix + "kick ``Expulse un utilisateur.`` \n" + prefix + "warn ``Avertit un utilisateur.`` \n" + prefix + "warnings ``Affiche les avertissements d'un utilisateur.`` \n" + prefix + "unwarn ``Supprime le dernier avertissement d'un utilisateur.`` \n" + prefix + "supprime ``Supprime un grand nombre de messages.` \n" + prefix + "nickname ``Modifie le surnom d'un utilisateur.``")
        .addField("**:gear: Gestion**", prefix + "setname ``Renomme un channel.`` \n" + prefix + "settopic ``Modifie le sujet d'un channel.`` \n" + prefix + "setservername ``Modifie le nom du serveur.``")
        .setFooter("Plus de commandes très bientôt.")
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- KICK ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer une raison.")
        var cantkickowner = new Discord.RichEmbed()
        .setTitle("Vous ne pouvez pas kick cet utilisateur.")
        var nokickable = new Discord.RichEmbed()
        .setTitle("Je ne peux pas kick cet utilisateur.")
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(notallowed)
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send(nomention)
       if (!reason) return message.channel.send(noreason)
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantkickowner)
       if (!member.kickable) return message.channel.send(nokickable)
       var kicklog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "kick.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur exclu**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID de l'utilisateur exclu**", member.id, true)
        .addField("**Raison**", reason, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(kicklog)
       member.kick({reason: reason})
       message.delete()
       var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été kick du serveur par " + message.author.username + " pour la raison suivante : " + reason)
        .setTimestamp()
       message.channel.send(success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info kick") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : kick \n\n Description :  Exclu un utilisateur du serveur. \n Usage : " + prefix + "kick [@utilisateur] [raison] \n Exemple : " + prefix + "kick @Arlenox Spam, insulte. \n Permission nécessaire : Expulser des membres.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- BAN ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'ban') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer une raison.")
        var cantkickowner = new Discord.RichEmbed()
        .setTitle("Vous ne pouvez pas ban cet utilisateur.")
        var nokickable = new Discord.RichEmbed()
        .setTitle("Je ne peux pas ban cet utilisateur.")
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(notallowed)
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send(nomention)
       if (!reason) return message.channel.send(noreason)
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantkickowner)
       if (!member.bannable) return message.channel.send(nokickable)
       var joinlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "ban.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur banni**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID de l'utilisateur banni**", member.id, true)
        .addField("**Raison**", reason, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(banlog)
        message.guild.ban(member, {days: 7, reason: reason})
       message.delete()
       var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été ban du serveur par " + message.author.username + " pour la raison suivante : " + reason)
        .setTimestamp()
       message.channel.send(success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info ban") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : ban \n\n Description :  Ban un utilisateur du serveur. \n Usage : " + prefix + "ban [@utilisateur] [raison] \n Exemple : " + prefix + "ban @Arlenox Spam, insulte. \n Permission nécessaire : Bannir des membres.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SOFTBAN ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'softban') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer une raison.")
        var cantkickowner = new Discord.RichEmbed()
        .setTitle("Vous ne pouvez pas softban cet utilisateur.")
        var nokickable = new Discord.RichEmbed()
        .setTitle("Je ne peux pas softban cet utilisateur.")
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(notallowed)
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send(nomention)
       if (!reason) return message.channel.send(noreason)
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantkickowner)
       if (!member.bannable) return message.channel.send(nokickable)
       var joinlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "softban.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur banni**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID de l'utilisateur banni**", member.id, true)
        .addField("**Raison**", reason, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(banlog)
        message.guild.ban(member, {days: 7, reason: reason})
        message.guild.unban(member)
       message.delete()
       var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été softban du serveur par " + message.author.username + " pour la raison suivante : " + reason)
        .setTimestamp()
       message.channel.send(success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info softban") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : softban \n\n Description :  Ban puis unban un utilisateur du serveur afin de supprimer un grand nombre de messages. \n Usage : " + prefix + "softban [@utilisateur] [raison] \n Exemple : " + prefix + "softban @Arlenox Spam, insulte. \n Permission nécessaire : Bannir des membres.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SUPPRIME ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "supprime") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nonumber = new Discord.RichEmbed()
        .setTitle("Veuillez indiquer un nombre de messages à supprimer.")
        var incorrectnumber = new Discord.RichEmbed()
        .setTitle("Nombre non trouvé, veuillez indiquer un nombre valide.")
        var toohigh = new Discord.RichEmbed()
        .setTitle("Veuillez indiquer un nombre entre 1 et 100")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        let count = parseInt(args[1])
        if (!count) return message.channel.send(nonumber)
        if (isNaN(count)) return message.channel.send(incorrectnumber)
        if (count < 1 || count > 100) return message.channel.send(toohigh)
        message.channel.bulkDelete(count + 1, true)
        supprimelog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "supprime.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nombre**", count, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID du channel**", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(supprimelog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info supprime") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : supprime \n\n Description :  Supprime un grand nombre de messages. \n Usage : " + prefix + "supprime [nombre] \n Exemple : " + prefix + "supprime 10 \n Permission nécessaire : Gérer les messages.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- MUTE ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "mute") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var cantmute1 = new Discord.RichEmbed()
        .setTitle("Vous ne pouvez pas mute cet utilisateur.")
        var cantmute2 = new Discord.RichEmbed()
        .setTitle("Je ne peux pas mute cet utilisateur.")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cantmute1)
        if (!member.manageable) return message.channel.send(cantmute2)
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été mute par " + message.author.username + ".")
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(success)
            message.delete()
            var mutelog = new Discord.RichEmbed()
            .setTitle("Quelqu'un a utilisé la commande " + prefix + "mute.")
            .addField("**Serveur**", message.guild.name, true)
            .addField("**Modérateur**","<@" + message.author.id + ">", true)
            .addField("**Utilisateur muet**", member, true)
            .addField("**ID du serveur**", message.guild.id, true)
            .addField("**ID du modérateur**", message.author.id, true)
            .addField("**ID de l'utilisateur muet**", member.id, true)
            .addField("**ID du message**", message.id, true)
            .setTimestamp()
            client.channels.get("661948166442319894").send(mutelog)
        }
        else {
            message.guild.createRole({name: 'Muet', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    })
                })
                member.addRole(role)
                message.channel.send(success)
                message.delete()
                var mutelog = new Discord.RichEmbed()
                .setTitle("Quelqu'un a utilisé la commande " + prefix + "mute.")
                .addField("**Serveur**", message.guild.name, true)
                .addField("**Modérateur**","<@" + message.author.id + ">", true)
                .addField("**Utilisateur muet**", member, true)
                .addField("**ID du serveur**", message.guild.id, true)
                .addField("**ID du modérateur**", message.author.id, true)
                .addField("**ID de l'utilisateur muet**", member.id, true)
                .addField("**ID du message**", message.id, true)
                .setTimestamp()
                client.channels.get("661948166442319894").send(mutelog)
            })
        }
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info mute") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : mute \n\n Description :  Mute un utilisateur. \n Usage : " + prefix + "mute [@utilisateur] \n Exemple : " + prefix + "mute @Arlenox \n Permission nécessaire : Gérer les messages.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- UNMUTE ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unmute") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var cantmute1 = new Discord.RichEmbed()
        .setTitle("Vous ne pouvez pas unmute cet utilisateur.")
        var cantmute2 = new Discord.RichEmbed()
        .setTitle("Je ne peux pas unmute cet utilisateur.")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cantmute1)
        if (!member.manageable) return message.channel.send(cantmute2)
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été unmute par " + message.author.username + ".")
        if (muterole) {
            member.removeRole(muterole)
            message.channel.send(success)
            message.delete()
            var mutelog = new Discord.RichEmbed()
            .setTitle("Quelqu'un a utilisé la commande " + prefix + "unmute.")
            .addField("**Serveur**", message.guild.name, true)
            .addField("**Modérateur**","<@" + message.author.id + ">", true)
            .addField("**Utilisateur un-muet**", member, true)
            .addField("**ID du serveur**", message.guild.id, true)
            .addField("**ID du modérateur**", message.author.id, true)
            .addField("**ID de l'utilisateur un-muet**", member.id, true)
            .addField("**ID du message**", message.id, true)
            .setTimestamp()
            client.channels.get("661948166442319894").send(mutelog)
        }
        else {
            message.guild.createRole({name: 'Muet', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    })
                })
                member.removeRole(muterole)
                message.channel.send(success)
                message.delete()
                var mutelog = new Discord.RichEmbed()
                .setTitle("Quelqu'un a utilisé la commande " + prefix + "mute.")
                .addField("**Serveur**", message.guild.name, true)
                .addField("**Modérateur**","<@" + message.author.id + ">", true)
                .addField("**Utilisateur muet**", member, true)
                .addField("**ID du serveur**", message.guild.id, true)
                .addField("**ID du modérateur**", message.author.id, true)
                .addField("**ID de l'utilisateur muet**", member.id, true)
                .addField("**ID du message**", message.id, true)
                .setTimestamp()
                client.channels.get("661948166442319894").send(mutelog)
            })
        }
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info mute") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : unmute \n\n Description :  Unmute un utilisateur. \n Usage : " + prefix + "unmute [@utilisateur] \n Exemple : " + prefix + "unmute @Arlenox \n Permission nécessaire : Gérer les messages.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- 8BALL ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "8ball") {
        var noquestion = new Discord.RichEmbed()
        .setTitle("Vous devez poser une question.")
        if (!args[1]) return message.channel.send(noquestion)
        let answers = ["Non.", "Oui.", "Peut être.", "Jamais.", "Absolument.","Jamais."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle(answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
        var questionlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "8ball.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Utilisateur**","<@" + message.author.id  + ">", true)
        .addField("**Question**", question, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID de l'utilisateur**", message.author.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661946616382619648").send(questionlog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info 8ball") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : 8ball \n\n Description :  Répond à une question. \n Usage : " + prefix + "8ball [question] \n Exemple : " + prefix + "8ball Êtes-vous gentil? \n Permission nécessaire : Aucune.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- WARN ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer une raison")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send(noreason)
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été warn par " + message.author.username + " pour la raison suivante : " + reason)
        message.channel.send(success)
        var warnlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "warn.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur averti**", member, true)
        .addField("**Raison**", reason, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID de l'utilisateur averti**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(warnlog)
    }

    if (args[0].toLowerCase() === prefix + "warnings") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers avertissements', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Cet utilisateur n'a aucun avertissement."))
            .setTimestamp()
        message.channel.send(embed)
        var warnslog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "warnings.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID de l'utilisateur**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(warnslog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info warn") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : warn \n\n Description :  Avertit un utilisateur. \n Usage : " + prefix + "warn [@utilisateur] [raison] \n Exemple : " + prefix + "warn @Arlenox Spam. \n Permission nécessaire : Gérer les messages.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info warnings") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : warnings \n\n Description :  Affiche les avertissements d'un utilisateur. \n Usage : " + prefix + "warnings [@utilisateur] \n Exemple : " + prefix + "warnings @Arlenox. \n Permission nécessaire : Gérer les messages.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- UNWARN ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unwarn") {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var cant1 = new Discord.RichEmbed()
        .setTitle("Vous ne pouvez pas unwarn ce membre.")
        var cant2 = new Discord.RichEmbed()
        .setTitle("Je ne pas unwarn ce membre.")
        var nowarn = new Discord.RichEmbed()
        .setTitle("Cet utilisateur n'a aucun avertissement.")
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(notallowed)
        if(!member) return message.channel.send(nomention)
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cant2)
        if(!member.manageable) return message.channel.send(cant2)
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send(nowarn)
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été unwarn par " + message.author.username + ".")
        message.channel.send(success)
        var unwarnlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "unwarn.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur un-warn**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID de l'utilisateur un-warn**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(unwarnlog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info unwarn") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : unwarn \n\n Description :  Supprime l'avertissement d'un utilisateur. \n Usage : " + prefix + "unwarn [@utilisateur] \n Exemple : " + prefix + "unwarn @Arlenox. \n Permission nécessaire : Gérer les messages.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- KISS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "kiss") {
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":heart: " + message.author.username + " embrasse " + member.displayName + ".")
        .setImage("https://media0.giphy.com/media/FmB6UTdCj3G12/source.gif")
        message.channel.send(success)
        var kisslog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "kiss.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Utilisateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur mentionné**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID de l'utilisateur**", message.author.id, true)
        .addField("**ID de l'utilisateur mentionné**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(kisslog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info kiss") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : kiss \n\n Description :  Embrasse quelqu'un. \n Usage : " + prefix + "kiss [@utilisateur] \n Exemple : " + prefix + "kiss @Arlenox. \n Permission nécessaire : Aucune.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- FIGHT ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "fight") {
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":punch: Un combat a commencé entre " + message.author.username + " et " + member.displayName + ".")
        .setImage("https://media1.giphy.com/media/eR7OEDQDyA7Cg/giphy.gif")
        message.channel.send(success)
        var fightlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "fight.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Utilisateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur mentionné**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID de l'utilisateur**", message.author.id, true)
        .addField("**ID de l'utilisateur mentionné**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(fightlog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info fight") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : fight \n\n Description :  Combat un utilisateur. \n Usage : " + prefix + "fight [@utilisateur] \n Exemple : " + prefix + "fight @Arlenox. \n Permission nécessaire : Aucune.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- HUGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "hugs") {
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":blush: " + message.author.username + " fait un calîn à " + member.displayName + ".")
        .setImage("https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif")
        message.channel.send(success)
        var fightlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "hugs.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Utilisateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur mentionné**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID de l'utilisateur**", message.author.id, true)
        .addField("**ID de l'utilisateur mentionné**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(fightlog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info hugs") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : hugs \n\n Description :  Fait un calîn à un utilisateur. \n Usage : " + prefix + "hugs [@utilisateur] \n Exemple : " + prefix + "hugs @Arlenox. \n Permission nécessaire : Aucune.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SLAP ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "slap") {
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":eyes: " + message.author.username + " giffle " + member.displayName + ".")
        .setImage("https://media3.giphy.com/media/Gf3AUz3eBNbTW/source.gif")
        message.channel.send(success)
        var fightlog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "slap.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Utilisateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur mentionné**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID de l'utilisateur**", message.author.id, true)
        .addField("**ID de l'utilisateur mentionné**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(fightlog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info slap") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : slap \n\n Description :  Giffle quelqu'un. \n Usage : " + prefix + "slap [@utilisateur] \n Exemple : " + prefix + "slap @Arlenox. \n Permission nécessaire : Aucune.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- THINK ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "think") {
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(nomention)
        var success = new Discord.RichEmbed()
        .setTitle(":thinking: " + message.author.username + " pense à " + member.displayName + ".")
        .setImage("https://media2.giphy.com/media/kQ3FSVoJrkYWk/source.gif")
        message.channel.send(success)
        var thinklog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "think.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Utilisateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur mentionné**", member, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID de l'utilisateur**", message.author.id, true)
        .addField("**ID de l'utilisateur mentionné**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(thinklog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info think") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : think \n\n Description :  Pense à quelqu'un. \n Usage : " + prefix + "think [@utilisateur] \n Exemple : " + prefix + "think @Arlenox. \n Permission nécessaire : Aucune.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETNAME ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'setname') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer un nom.")
       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if(!reason) return message.channel.send(noreason)
       var setnamelog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "setname.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nouveau nom**", reason, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID du channel**", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661946883018719253").send(setnamelog)
       var success = new Discord.RichEmbed()
        .setTitle('"' + message.channel.name + '" a été renommé en "' + reason + '".')
        .setTimestamp()
        message.channel.setName(reason)
       message.channel.send(success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info setname") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : setname \n\n Description :  Modifie le nom d'un channel. \n Usage : " + prefix + "setname [nom] \n Exemple : " + prefix + "setname Général. \n Permission nécessaire : Gérer les salons.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- NICKNAME ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "nickname") {
        var nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer un nom.")
        var cantname = new Discord.RichEmbed()
        .setTitle("Je ne peux pas renommé cet utilisateur.")
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(nomention)
        if(!reason) return message.channel.send(noreason)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(cantname)
        if (!member.manageable) return message.channel.send(cantname)
        var success = new Discord.RichEmbed()
        .setTitle(member.displayName + " a été renommé en : " + reason)
        message.channel.send(success)
        member.setNickname(reason)
        var nicknamelog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "nickname.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Utilisateur renommé**", member, true)
        .addField("**Nouveau nom**", reason, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID de l'utilisateur mentionné**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(nicknamelog)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info nickname") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : nickname \n\n Description :  Modifie le surnom d'un utilisateur. \n Usage : " + prefix + "nickname [@utilisateur] [nom] \n Exemple : " + prefix + "nickname @Arlenox Arlenox2. \n Permission nécessaire : Gérer les pseudos.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTOPIC ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'settopic') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer un nom.")
       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if(!reason) return message.channel.send(noreason)
       var setnamelog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "settopic.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nouveau sujet**", reason, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID du channel**", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661946883018719253").send(setnamelog)
       var success = new Discord.RichEmbed()
        .setTitle('Le sujet du channel "' + message.channel.name + '" a été modifié en :' + reason)
        .setTimestamp()
        message.channel.setTopic(reason)
       message.channel.send(success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info settopic") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : settopic \n\n Description :  Modifie le sujet d'un channel. \n Usage : " + prefix + "setname [sujet] \n Exemple : " + prefix + "settopic Ceci est le channel général. \n Permission nécessaire : Gérer les salons.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETSERVERNAME ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'setservername') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        var noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer un nom.")
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if(!reason) return message.channel.send(noreason)
       var setnamelog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "setservername.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nouveau sujet**", reason, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID du channel**", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661946883018719253").send(setnamelog)
       var success = new Discord.RichEmbed()
        .setTitle("Le nom du serveur a été modifié en : " + reason)
        .setTimestamp()
        message.guild.setName(reason)
       message.channel.send(success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info setservername") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : setservername \n\n Description :  Modifie le nom d'un serveur. \n Usage : " + prefix + "setservername [nom] \n Exemple : " + prefix + "setservername Nouveau serveur. \n Permission nécessaire : Administrateur.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETSTATUS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'setstatus') {
        var notallowed = new Discord.RichEmbed()
        .setTitle("Cette commande est réservée aux développeurs d'Arplex uniquement.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
        if (!message.guild.id === "659411353236275229") return message.channel.send(notallowed)
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(noreason)
        var setnamelog = new Discord.RichEmbed()
        .setTitle("Un développeur a utilisé la commande " + prefix + "setstatus.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Développeur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nouveau status**", reason, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du développeur**", message.author.id, true)
        .addField("**ID du channel**", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("667776721201790987").send(setnamelog)
        var success = new Discord.RichEmbed()
        .setTitle("Le status du bot a été modifié en : " + reason)
        .setTimestamp()
        client.user.setActivity(reason, {type: "PLAYING"})
        message.channel.send(success)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETAVATAR ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'setavatar') {
        var notallowed = new Discord.RichEmbed()
        .setTitle("Cette commande est réservée aux développeurs d'Arplex uniquement.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
        if (!message.guild.id === "659411353236275229") return message.channel.send(notallowed)
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(noreason)
        var setnamelog = new Discord.RichEmbed()
        .setTitle("Un développeur a utilisé la commande " + prefix + "setavatar.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Développeur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nouvel avatar**", "Voir l'aperçu.", true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du développeur**", message.author.id, true)
        .addField("**ID du channel**", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setImage(reason)
        .setTimestamp()
        client.channels.get("667776721201790987").send(setnamelog)
        var success = new Discord.RichEmbed()
        .setTitle("L'avatar du bot a été modifié : " + reason)
        .setFooter("Veuillez noter : La mise à jour de l'avatar du bot peut prendre quelques minutes en raison de la limitation de Discord.")
        .setTimestamp()
        client.user.setAvatar(reason)
        message.channel.send(success)
    }
})

client.on('message', function(message) {
    if(message.content === prefix + "stats"){
        var notallowed = new Discord.RichEmbed()
        .setTitle("Seul le propriétaire du bot peut utiliser cette commande.")
        var success = new Discord.RichEmbed()
        .setTitle("L'avatar du bot a été modifié : " + reason)
        .setFooter("Veuillez noter : La mise à jour de l'avatar du bot peut prendre quelques minutes en raison de la limitation de Discord.")
        .setTimestamp()
        if(message.author.id === "434061967951659019") return message.channel.send(success)
    } else {
        return message.channel.send(notallowed)
    }
});

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- BOT AJOUTE ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("guildCreate", guild =>{
    let addedlog = new Discord.RichEmbed()
    .setTitle("Arplex a été ajouté sur un serveur !")
    .addField("**Serveur**", guild.name, true)
    .addField("**Propriétaire**", guild.owner, true)
    .addField("**Membres**", guild.memberCount, true)
    .addField("**ID du serveur**", guild.id, true)
    .addField("**ID du propriétaire**", guild.owner.id, true)
    .setThumbnail(guild.iconURL)
    .setFooter(`Arplex est maintenant présent sur ${client.guilds.size} serveurs !`)
    client.channels.get("667780868265476096").send(addedlog)
}) //.setFooter(`Arplex is now on ${client.guilds.size}`)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- BOT SUPPRIME ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("guildDelete", guild =>{
    let deletedlog = new Discord.RichEmbed()
    .setTitle("Arplex a été supprimé sur un serveur !")
    .addField("**Serveur**", guild.name, true)
    .addField("**Propriétaire**", guild.owner, true)
    .addField("**Membres**", guild.memberCount, true)
    .addField("**ID du serveur**", guild.id, true)
    .addField("**ID du propriétaire**", guild.owner.id, true)
    .setThumbnail(guild.iconURL)
    .setFooter(`Arplex est maintenant présent sur ${client.guilds.size} serveurs !`)
    client.channels.get("667780868265476096").send(deletedlog)
}) //.setFooter(`Arplex is now on ${client.guilds.size}`)

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- STATS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'stats') {
        var notallowed = new Discord.RichEmbed()
        .setTitle("Cette commande est réservée aux développeurs d'Arplex uniquement.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
        if (!message.guild.id === "659411353236275229") return message.channel.send(notallowed)
        var setnamelog = new Discord.RichEmbed()
        .setTitle("Un développeur a utilisé la commande " + prefix + "stats.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Développeur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du développeur**", message.author.id, true)
        .addField("**ID du channel**", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("667776721201790987").send(setnamelog)
        var success = new Discord.RichEmbed()
        .setTitle(`Voici les stats d'Arplex : \n\n Serveurs : ${client.guilds.size} \n Membres : ${client.users.size} \n Channels : ${client.channels.size} \n Emojis : ${client.emojis.size}`)
        message.channel.send(success)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- INVITE ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "invite") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle(":wave: Envie d'ajouter Arplex sur un serveur ? Cliquez ici !")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "info invite") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Commande : invite \n\n Description :  Envoie un message pour inviter le bot. \n Usage : " + prefix + "invite \n Exemple : " + prefix + "invite \n Permission nécessaire : Aucune.")
        .setURL(invitebotlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SUPPORT ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "support") {
        var cmdsembed = new Discord.RichEmbed()
        .setTitle("Besoin d'aide ? Cliquez ici pour rejoindre notre serveur Discord !")
        .setURL(supportlink)
        message.channel.send(cmdsembed)
    }
})

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SUGGESTION ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on('message', (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'suggestion') {
        const noreason = new Discord.RichEmbed()
        .setTitle("No reason entered!")
        
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(noreason)
        
        client.guilds.get("659411353236275229").createChannel(message.author.id).then(channel => {
            channel.setTopic(reason)
            channel.send("<@434061967951659019> Someone used ;suggestion!")
        })
    }
})
