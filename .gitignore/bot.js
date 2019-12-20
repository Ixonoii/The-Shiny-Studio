// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const dev_ids = ["434061967951659019"];

client.login(process.env.BOT_TOKEN)

var allowedToUse = false;
dev_ids.forEach(id => allowedToUse = message.author.id == id ? true : false);

if(allowedToUse) {
    var invites = ["I am required else it won't work"], ct = 0;
    client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
            ct++;

            if(ct >= client.guilds.size) {
                invites.forEach((invite, i) => {if(invite == undefined) invites.splice(i, 1);}); 

                invites.shift();
                invites.forEach((invite, i) => invites[i] = "- " + invite);
                invites = invites.join("\n\n");

                let embed = new Discord.RichEmbed()
                .setTitle("All Invites:")
                .setDescription(invites);

                message.channel.send(embed);
            }
        }).catch(err => {
            ct++;
        });
    });
}
else {
    message.reply("this command can only be used by a developer.");
}
