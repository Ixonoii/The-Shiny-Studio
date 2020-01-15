// ----------------------------------------- SETTINGS ----------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var status = "😀";
var notallowedmessage = "Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.";
var supportlink = "https://discord.gg/qn9WzNk"
var sitelink

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

// ----------------------------------------- TEST ----------------------------------------- //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        .setTimestamp()
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

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'ban') {
        var notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        .setTimestamp()
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
       var banlog = new Discord.RichEmbed()
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
        message.channel.bulkDelete(count + 1)
        supprimelog = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utilisé la commande " + prefix + "supprime.")
        .addField("**Serveur**", message.guild.name, true)
        .addField("**Modérateur**","<@" + message.author.id + ">", true)
        .addField("**Channel**", message.channel.name, true)
        .addField("**Nombre**", count, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**ID du modérateur**", message.author.id, true)
        .addField("**ID du channel**", member.id, true)
        .addField("**ID du message**", message.id, true)
        .setTimestamp()
        client.channels.get("661948166442319894").send(supprimelog)
    }
})
