// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mentionne moi | mBot", {type: "PLAYING"})
})

client.on('message', function(message){
    if(message.content === "-invitations"){
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
                    .setTitle("All invites:")
                    .setDescription(invites);

                    message.channel.send(embed);
                }
            })
        })
    }
})
