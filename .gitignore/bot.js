                                                                 // CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
var credits = "The Shiny Studio - All Right Reserved";
var embedcolor = "#049ef3"
var versionBOT = "0.0.1"
var nbcommandes = "0"
var MAJ = "Dimanche 10 Novembre"
var prefix = "-"

                                                                 // BOT TOKEN //

client.login(process.env.BOT_TOKEN)

                                                                 // BOT STATUS //

client.on('ready', function(){
    client.user.setActivity("Mention me!", {type: "PLAYING"})
})

                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "<@643152257822621696>"){
        message.channel.send("***<@" + message.author.id + "> You can't use this feature for the moment. Please try again later.***")
    }
})

                                                                 // INFO COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "info"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Information about the bot__")
        .setColor(embedcolor)
        .addField("Prfix:", prefix)
        .addField("Version:", versionBOT)
        .addField("Commands:", nbcommandes)
        .addField("Last update:",MAJ)
        .addField("Developer:","Ixonoii#1111")
        message.channel.send(embed)
    }
})

                                                                 // CMDS COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "cmds4545"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. \n ``-idée`` Vous permet de partager une de vos idées.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-softban`` Ban puis unban unmembre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau. \n ``-purge`` Sipprime un grand nombre de messages.")
        .addField("__Commandes de gestion__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. (BIENTÔT) \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'un channel. (BIENTÔT) \n ``-renomme`` Change le nom d'un channel. \n ``-nomduserveur`` Change le nom du serveur.")
        message.channel.send(pong_enbed)
    }
})

client.on('message', function(message){
    if(message.content === "-cmds"){
        message.channel.send("***<@" + message.author.id + "> You can't use this feature for the moment. Please try again later.***")
    }
})

client.on('message', function(message){
    if(message.content === "-commands"){
        message.channel.send("***<@" + message.author.id + "> You can't use this feature for the moment. Please try again later.***")
    }
})

client.on('message', function(message){
    if(message.content === prefix + "commandes4545"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. \n ``-idée`` Vous permet de partager une de vos idées.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-softban`` Ban puis unban unmembre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau. \n ``-purge`` Sipprime un grand nombre de messages.")
        .addField("__Commandes de gestion__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. (BIENTÔT) \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'un channel. (BIENTÔT) \n ``-renomme`` Change le nom d'un channel. \n ``-nomduserveur`` Change le nom du serveur.")
        message.channel.send(pong_enbed)
    }
})

                                                                 // SERVEUR COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "server"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Information about the server " + message.guild.name + "__")
        .setColor(embedcolor)
        .addField("Owner:", message.guild.owner)
        .addField("Members:", message.guild.memberCount + " membres")
        .addField("Rgion:", message.guild.region)
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Server Logo:", message.guild.iconURL)
        .addField("Server created at:", message.guild.createdAt)
        message.channel.send(embed)
    }
})

                                                                 // AVATAR COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Here is your avatar, " + message.author.username + ".")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)

        message.channel.send(pong_enbed)
    }
})
                                                                 // PING COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "ping"){
        let début = Date.now();
        message.channel.send("***Loading...***")
        .then((m) => m.edit(`***Your latency is: ${Date.now() - début}ms.***`));
    }
})

                                                                 // QUESTION COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "8ball"){
    if (!args[1]) return message.channel.send("***Quelle est ta question?***")
        let answers = ["Yes.", "No.", "Of course.", "Maybe.", "I don't know.","Never.","Impossible.","No idea.","ANo chance."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setColor(embedcolor)
            .addField("Question:", question)
            .addField("Answer:", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
})

                                                                 // SIGNAL COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "report"){
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send("***You have to mention someone.***")
        if(!question) return message.channel.send("***You have to enter a reason.***")
        let embed = new Discord.RichEmbed()
        .setTitle("Report Information n°" + message.author.id)
        .setColor(embedcolor)
        .addField("Member:", message.author.username + " (" + message.author.id + ")")
        .addField("Membre reported:", memberMEN + " (" + memberMEN.id + ")")
        .addField("Reason:", question)
        .addField("Channel:", message.channel.name)
        let cChannel = message.guild.channels.find(c => c.name === "📓-reports")
        if(!cChannel) return message.channel.send("***<@" + message.author.id + "> I can't send your report. I maybe don't have the ``ADMINISTRATOR`` permissions or the channel ``reports`` doesn't exist on this server.***")
    cChannel.send(embed);
    message.delete();
    message.channel.send("***Report sent!***")
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

                                                                 // NOUVEAUROLE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "nouveaurole"){
    if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
    if (!args[1]) return message.channel.send("***Vous devez entrer un nom.***")
        let question = args.slice(1).join(" ")
        message.guild.createRole({
            name: question,
            color: "#000000"
        })
        message.channel.send("***Rôle ajouté à la liste : " + question + "***")
    }
})

client.on('message', function(message){
    if(message.content === prefix + "supprimechannel"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        message.channel.delete()
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "nomduserveur"){
    if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        if (!args[1]) return message.channel.send("***Veuillez entrer un nom.***")
        let question = args.slice(1).join(" ")
        message.channel.guild.setName(question)
        message.channel.send("***Nom du serveur modifié : " + question + "***")
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "sujet"){
        if(!message.member.roles.some(r=>["[👑] OWNER Rainbow","[👑] OWNER Fortnite","[🤖] Développeur"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        if (!args[1]) return message.channel.send("***Veuillez entrer un sujet.***")
        let question = args.slice(1).join(" ")
        message.channel.setTopic(question)
        message.channel.send("***Sujet modifié : " + question + "***")
}
})

client.on('message', message =>{
    if(message.content === prefix + "armix"){
        let embed = new Discord.RichEmbed()
        .setTitle("Cliquez ici pour voir la dernière vidéo Youtube d'Armix !")
        .setColor(embedcolor)
        .setURL("https://latest.yt/c:Armix_Wk_Officiel")
        message.channel.send(embed)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "raizz"){
        let embed = new Discord.RichEmbed()
        .setTitle("Cliquez ici pour voir la dernière vidéo Youtube de Armix !")
        .setColor(embedcolor)
        .setURL("https://latest.yt/c:RaizZ")
        message.channel.send(embed)
    }
})
