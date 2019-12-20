// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var invites = ["I am required else it won't work"], ct = 0;
var color = "#007bff";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("Mentionne moi | mBot", {type: "PLAYING"})
})

client.on('message', function(message){
    if(message.content === "-invitations"){
        if(!message.author.id == "434061967951659019") return message.channel.send("You can't use it.")
        client.guilds.forEach(g => {
            g.fetchInvites().then(guildInvites => {
                invites[invites.length + 1] = (g + " : `Invites: " + guildInvites.array().join(", ") + "`");
                ct++;

                if(ct >= client.guilds.size) {
                    invites.forEach((invite, i) => {if(invite == undefined) invites.splice(i, 1);});

                    invites.shift();
                    invites.forEach((invite, i) => invites[i] = invite);
                    invites = invites.join("\n");

                    let embed = new Discord.RichEmbed()
                    .setTitle("All invites:")
                    .setDescription(invites)
                    .setColor(color);

                    message.channel.send(embed);
                }
            })
        })
    }
})
