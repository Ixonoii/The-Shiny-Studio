// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var successcolor = "#04f028";
var errorcolor = "#ff0000"
var prefix = "!";

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "support") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        .setColor(errorcolor)
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        .setColor(errorcolor)
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
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

    if (args[0].toLowerCase() === prefix + "modérateur") {
        let notallowed = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.")
        .setColor(errorcolor)
        let nomention = new Discord.RichEmbed()
        .setTitle( emoji("659504785036148750") + " Vous devez mentionner quelqu'un.")
        .setColor(errorcolor)
        if(!message.member.roles.some(r=>["Développeur"].includes(r.name)) ) return message.channel.send(notallowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(nomention)
        let supportrole = message.guild.roles.find(role => role.name === 'Modérateur')
        let staffrole = message.guild.roles.find(role => role.name === 'Staff')
        let modrole = message.guild.roles.find(role => role.name === 'Modérateur')
        if (staffrole) {
            member.addRole(staffrole)
        }
        if (modrole) {
            member.addRole(modrole)
            let success = new Discord.RichEmbed()
            .setTitle( emoji("659504835535831060") + " " + member.displayName + " rejoint l'équipe d'assistance !")
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
