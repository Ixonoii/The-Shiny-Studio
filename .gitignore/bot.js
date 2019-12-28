// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var successcolor = "#04f028";
var errorcolor = "#ff0000"
var prefix = "!";
var status = "Je surveille les membres !";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "sup") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        .setColor(errorcolor)
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        .setColor(errorcolor)
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
            .setColor(successcolor)
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification de promotion__")
            .setColor(successcolor)
            .addField("**Administrateur**","<@" + message.author.id + ">", true)
            .addField("**Membre promu**","<@" + member.id + ">", true)
            .addField("**Nouveau rang**","Support", true)
            .setThumbnail("https://image.flaticon.com/icons/png/512/69/69114.png")
            client.channels.get('659830689356709890').send(confirm)
        }}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "mod") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        .setColor(errorcolor)
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        .setColor(errorcolor)
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
            .setColor(successcolor)
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification de promotion__")
            .setColor(successcolor)
            .addField("**Administrateur**","<@" + message.author.id + ">", true)
            .addField("**Membre promu**","<@" + member.id + ">", true)
            .addField("**Nouveau rang**","Modérateur", true)
            .setThumbnail("https://img.icons8.com/ios-filled/452/moderator-male.png")
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
        .setColor(errorcolor)
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        .setColor(errorcolor)
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
            .setColor(successcolor)
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification de promotion__")
            .setColor(successcolor)
            .addField("**Développeur**","<@" + message.author.id + ">", true)
            .addField("**Membre promu**","<@" + member.id + ">", true)
            .addField("**Nouveau rang**","Administrateur", true)
            .setThumbnail("http://cdn.onlinewebfonts.com/svg/img_239979.png")
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
        .setColor(errorcolor)
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        .setColor(errorcolor)
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
            .setColor(successcolor)
            message.channel.send(success)
            let confirm = new Discord.RichEmbed()
            .setTitle("__Notification d'expulsion__")
            .setColor(errorcolor)
            .addField("**Administrateur**","<@" + message.author.id + ">", true)
            .addField("**Membre expulsé**","<@" + member.id + ">", true)
            .setThumbnail("https://image.flaticon.com/icons/png/512/59/59802.png")
            client.channels.get('659830689356709890').send(confirm)
        }}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'status') {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        .setColor(errorcolor)
        let noreason = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez enter un status.")
        .setColor(errorcolor)
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if (!reason) return message.channel.send(noreason)
       status = reason
       client.user.setActivity(status, {type: "PLAYING"})
       let success = new Discord.RichEmbed()
        .setTitle( emoji("659504835535831060") + " Status modifié : " + reason)
        .setColor(successcolor)
        message.channel.send(success)
        let confirm = new Discord.RichEmbed()
        .setTitle("__Modification de status__")
        .setColor(errorcolor)
        .addField("**Administrateur**","<@" + message.author.id + ">", true)
        .addField("**Nouveau status**",reason, true)
        .setThumbnail("https://static.thenounproject.com/png/60319-200.png")
        client.channels.get('660241015591927819').send(confirm)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'avatar') {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        .setColor(errorcolor)
        let noreason = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez enter un lien.")
        .setColor(errorcolor)
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if (!reason) return message.channel.send(noreason)
       client.user.setAvatar(reason)
       let success = new Discord.RichEmbed()
        .setTitle( emoji("659504835535831060") + " L'avatar a été modifié : " + reason)
        .setColor(successcolor)
        .setFooter("Note : L'avatar du bot peut prendre quelques minutes (15 minutes maximum) à se mettre à jour en raison de la limitation Discord.")
        message.channel.send(success)
        let confirm = new Discord.RichEmbed()
        .setTitle("__Modification d'avatar__")
        .setColor(errorcolor)
        .addField("**Administrateur**","<@" + message.author.id + ">", true)
        .addField("**Lien de l'avatar**", reason, true)
        .addField("**Aperçu de l'avatar**","Voir ci-dessous", true)
        .setThumbnail("https://static.thenounproject.com/png/363640-200.png")
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
        .setColor(errorcolor)
        let noreason = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez enter un nom.")
        .setColor(errorcolor)
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
       let reason = args.slice(1).join(" ")
       if (!reason) return message.channel.send(noreason)
       client.user.setUsername(reason)
       let success = new Discord.RichEmbed()
        .setTitle( emoji("659504835535831060") + " Nom modifié : " + reason)
        .setColor(successcolor)
        .setFooter("Note : L'avatar du bot peut prendre quelques minutes (15 minutes maximum) à se mettre à jour en raison de la limitation Discord.")
        message.channel.send(success)
        let confirm = new Discord.RichEmbed()
        .setTitle("__Modification du nom__")
        .setColor(errorcolor)
        .addField("**Administrateur**","<@" + message.author.id + ">", true)
        .addField("**Nouveau nom**",reason, true)
        .setThumbnail("https://static.thenounproject.com/png/60319-200.png")
        client.channels.get('660241015591927819').send(confirm)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "ticket"){
        if (!args[1]) return message.channel.send("You have to enter a name.")
        let channelname = args.slice(1).join(" ")
        message.guild.createChannel(channelname).then(channel =>{
            channel.setTopic("Thanks for creating this ticket, " + message.author.username + ".")
        })
    }
})
