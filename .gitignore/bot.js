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
        .setTitle(member + " a été warn par " + message.author.username + " pour la raison suivante : " + reason)
        message.channel.send(success)
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
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
    }
})
