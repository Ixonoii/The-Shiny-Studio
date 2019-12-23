// CONFIGURATION //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var activity = "Updated!";
var prefix = "-";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(activity, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message){
    if(message.content === prefix + "eval"){
        try {
            let evaluated = inspect(eval(args.script, { depth: 0 }));
            let hrStart = process.hrtime();
            let hrDiff;
            hrDiff = process.hrtime(hrStart);
            let embed1 = new Discord.RichEmbed()
                .setTitle("Eval")
                .setDescription(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
                .setColor(color)
            await msg.channel.send(embed1);
        } catch(err) {
            let embed2 = new Discord.RichEmbed()
                .setTitle("**❌ Error while evaluating**")
                .setDescription(`\`\`\`${err.message}\`\`\``)
                .setColor(color)
            this.client.temp.error = err;
            return msg.channel.send(embed2);
        };
    }
})
