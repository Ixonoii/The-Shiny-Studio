// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "!";
var status = "Je surveille les membres !";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('guildMemberAdd', function (member) {
    let joinembned = new Discord.RichEmbed()
    .setTitle("**__Arrivée d'un membre__**")
    .addField("**__Utilisateur__**", member.displayName, true)
    .addField("**__ID__**", member.id, true)
    .setFooter("Nous sommes maintenant " + member.guild.memberCount + " sur le serveur " + member.guild.name + ".")
    client.channels.get("661987518937432095").send(joinembned)
})

client.on('guildMemberRemove', function (member) {
    let joinembned = new Discord.RichEmbed()
    .setTitle("**__Départ d'un membre__**")
    .addField("**__Utilisateur__**", member.displayName, true)
    .addField("**__ID__**", member.id, true)
    .setFooter("Nous sommes maintenant " + member.guild.memberCount + " sur le serveur " + member.guild.name + ".")
    client.channels.get("661987518937432095").send(joinembned)
})

client.on('message', function ( message ) {
    if(message.content === prefix + "connard")
    message.channel.send("1 connard trouvé : <@404392698162708500>")
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "sup") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        if(!message.member.roles.some(r=>["Développeur","Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        let supportrole = message.guild.roles.find(role => role.name === 'Support')
        let staffrole = message.guild.roles.find(role => role.name === 'Staff')
        if (staffrole) {
            member.addRole(staffrole)
        }
        if (supportrole) {
            member.addRole(supportrole)
            let success = new Discord.RichEmbed()
            .setTitle( emoji("659504835535831060") + " " + member.displayName + " rejoint l'équipe d'assistance !")
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification de promotion__")
            .addField("**Administrateur**","<@" + message.author.id + ">", true)
            .addField("**Membre promu**","<@" + member.id + ">", true)
            .addField("**Nouveau rang**","Support", true)
            client.channels.get('659830689356709890').send(confirm)
        }}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "mod") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        if(!message.member.roles.some(r=>["Développeur","Administrateur"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        let supportrole = message.guild.roles.find(role => role.name === 'Support')
        let staffrole = message.guild.roles.find(role => role.name === 'Staff')
        let modrole = message.guild.roles.find(role => role.name === 'Modérateur')
        if (staffrole) {
            member.addRole(staffrole)
        }
        if (modrole) {
            member.addRole(modrole)
            let success = new Discord.RichEmbed()
            .setTitle( emoji("659504835535831060") + " " + member.displayName + " rejoint l'équipe de modération !")
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification de promotion__")
            .addField("**Administrateur**","<@" + message.author.id + ">", true)
            .addField("**Membre promu**","<@" + member.id + ">", true)
            .addField("**Nouveau rang**","Modérateur", true)
            client.channels.get('659830689356709890').send(confirm)
        }
        if (supportrole) {
            member.removeRole(supportrole)
        }}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "admin") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        let modrole = message.guild.roles.find(role => role.name === 'Modérateur')
        let staffrole = message.guild.roles.find(role => role.name === 'Staff')
        let adminrole = message.guild.roles.find(role => role.name === 'Administrateur')
        if (staffrole) {
            member.addRole(staffrole)
        }
        if (adminrole) {
            member.addRole(adminrole)
            let success = new Discord.RichEmbed()
            .setTitle( emoji("659504835535831060") + " " + member.displayName + " rejoint l'équipe d'administration !")
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification de promotion__")
            .addField("**Développeur**","<@" + message.author.id + ">", true)
            .addField("**Membre promu**","<@" + member.id + ">", true)
            .addField("**Nouveau rang**","Administrateur", true)
            client.channels.get('659830689356709890').send(confirm)
        }
        if (modrole) {
            member.removeRole(modrole)
        }}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "membre") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        let modrole = message.guild.roles.find(role => role.name === 'Modérateur')
        let staffrole = message.guild.roles.find(role => role.name === 'Staff')
        let supportrole = message.guild.roles.find(role => role.name === 'Support')
        let adminrole = message.guild.roles.find(role => role.name === 'Administrateur')
        if (modrole) {
            member.removeRole(modrole)
        }
        if (staffrole) {
            member.removeRole(staffrole)
        }
        if (supportrole) {
            member.removeRole(supportrole)
        }
        if (adminrole) {
            member.removeRole(adminrole)
            let success = new Discord.RichEmbed()
            .setTitle( emoji("659504835535831060") + " " + member.displayName + " ne fait plus parti de l'équipe du STAFF !")
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification d'expulsion__")
            .addField("**Administrateur**","<@" + message.author.id + ">", true)
            .addField("**Membre expulsé**","<@" + member.id + ">", true)
            client.channels.get('659830689356709890').send(confirm)
        }}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'status') {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        let noreason = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez enter un status.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if (!reason) return message.channel.send(noreason)
       status = reason
       client.user.setActivity(status, {type: "PLAYING"})
       let success = new Discord.RichEmbed()
        .setTitle( emoji("659504835535831060") + " Status modifié : " + reason)
        message.channel.send(success)
        let confirm = new Discord.RichEmbed()
        .setTitle("__Modification de status__")
        .addField("**Administrateur**","<@" + message.author.id + ">", true)
        .addField("**Nouveau status**",reason, true)
        client.channels.get('660241015591927819').send(confirm)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'avatar') {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        let noreason = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez enter un lien.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if (!reason) return message.channel.send(noreason)
       client.user.setAvatar(reason)
       let success = new Discord.RichEmbed()
        .setTitle( emoji("659504835535831060") + " L'avatar a été modifié : " + reason)
        .setFooter("Note : L'avatar du bot peut prendre quelques minutes (15 minutes maximum) à se mettre à jour en raison de la limitation Discord.")
        message.channel.send(success)
        let confirm = new Discord.RichEmbed()
        .setTitle("__Modification d'avatar__")v
        .addField("**Administrateur**","<@" + message.author.id + ">", true)
        .addField("**Lien de l'avatar**", reason, true)
        .addField("**Aperçu de l'avatar**","Voir ci-dessous", true)
        .setImage(reason)
        client.channels.get('660241015591927819').send(confirm)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'nom') {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        let noreason = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez enter un nom.")
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if (!reason) return message.channel.send(noreason)
       client.user.setUsername(reason)
       let success = new Discord.RichEmbed()
        .setTitle( emoji("659504835535831060") + " Nom modifié : " + reason)
        .setFooter("Note : L'avatar du bot peut prendre quelques minutes (15 minutes maximum) à se mettre à jour en raison de la limitation Discord.")
        message.channel.send(success)
        let confirm = new Discord.RichEmbed()
        .setTitle("__Modification du nom__")
        .addField("**Administrateur**","<@" + message.author.id + ">", true)
        .addField("**Nouveau nom**",reason, true)
        client.channels.get('660241015591927819').send(confirm)
    }
})
