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

client.login(process.env.BOT_TOKEN)

const warns = JSON.parse(fs.readFileSync('./warns.json'))

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
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
 
// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- WARNINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

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

// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- CMDS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "cmds") {
        var cmdsembed = new Discord.RichEmbed()
        .addField("**:smile: Fun**", prefix + "kiss ``Embrasse quelqu'un.`` \n" + prefix + "slap ``Giffle quelqu'un.`` \n" + prefix + "fight ``Combat quelqu'un.`` \n" + prefix + "hugs ``Fait un calîn à quelqu'un.`` \n" + prefix + "think ``Pense à quelqu'un.`` \n" + prefix + "8ball ``Pose une question.``")
        .addField("**:hammer: Modération**", prefix + "mute ``Mute un utilisateur.`` \n" + prefix + "unmute ``Unmute un utilisateur.`` \n" + prefix + "ban ``Ban un utilisateur.`` \n" + prefix + "softban ``Softban un utilisateur.`` \n" + prefix + "kick ``Expulse un utilisateur.`` \n" + prefix + "warn ``Avertit un utilisateur.`` \n" + prefix + "warnings ``Affiche les avertissements d'un utilisateur.`` \n" + prefix + "unwarn ``Supprime le dernier avertissement d'un utilisateur.`` \n" + prefix + "supprime ``Supprime un grand nombre de messages.``")
        .addField("**:gear: Gestion**")
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
       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       var setnamelog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "setname.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nouveau nom**", reason, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID du channel*", message.channel.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661946883018719253").send(setnamelog)
       var success = new Discord.RichEmbed()
        .setTitle('"' + message.channel.name + '" renommé en "' + reason + '".')
        .setTimestamp()
        message.channel.setName(reason)
       message.channel.send(success)
    }
})
