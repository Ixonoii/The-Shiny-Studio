// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var prefix = "!";

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "support"){
        let pasautorise = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        .setColor(errorcolor)
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(pasautorise)
        let pasdemention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner un utilisateur.")
        .setColor(errorcolor)
        let pasdeperms = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne pouvez pas utiliser cette commande sur cet utilisateur.")
        .setColor(errorcolor)
        let memberMEN = message.mentions.members.first()
        if(!memberMEN) return message.channel.send(pasdemention)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Je ne peux pas kick ce membre.**")
        let supportrole = message.guild.roles.find(role => role.name === 'Support')
        let pasdeSrole = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Erreur détectée : Le rôle @Support n'existe pas.")
        .setColor(errorcolor)
        if(!supportrole) return message.channel.send(pasdeSrole)
        let staffrole = message.guild.roles.find(role => role.name === 'Staff')
        let pasdeStaffRole = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Erreur détectée : Le rôle @Staff n'existe pas.")
        .setColor(errorcolor)
        if(!staffrole) return message.channel.send(pasdeStaffRole)
        let logchannel = message.guild.channels.find(c => c.name === "promotions")
        let pasdelogchannel = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Erreur détectée : Le channel #promotions n'existe pas.")
        .setColor(errorcolor)
        if(!logchannel) return message.channel.send(pasdelogchannel)
        memberMEN.addRole(supportrole)
        memberMEN.addRole(staffrole)
        let rolegived = new Discord.RichEmbed()
        .setTitle( emoji("659504835535831060") + " L'utilisateur " + memberMEN.displayName + " a été promu au rang d'assistant.")
        .setColor(successcolor)
        let lognotif = new Discord.RichEmbed()
        .setTitle("L'utilisateur " + message.author.username  + " a promu l'utilisateur " + memberMEN.displayName + " au rang d'assistant.")
        .setColor(successcolor)
        .setTimestamp(Date.now())

}
})
