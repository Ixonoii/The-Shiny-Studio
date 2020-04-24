// this code was given to me by 1988_YumChocolate from the ROBLOX API Server, all credits (as far as I know) go to him
 
 
 
const roblox = require('noblox.js')
const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
//var token = "NjczNTAwODg0MTIyMjA2MjE2.XqHKCw.s333IMKGmbTH0RaO3KcSG8EsfyU";
 
client.login(process.env.BotToken)
 
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_AB5D71E2923C61C004A04B2DB2CC661BD2D9B4A37BB2DB543525A94742CCBA48BCBCA87A11D7F0D0A80C43A75D27ADB604007791788A5F596FEFE895D871D5DC4ACF3EE60A7369EF88AB29E6F6C1EBBD5FBB34DB778BF3FE86DEBBDCD7477B2737A453F75C9B7C9403F4E71A7BF1E38B670CFAE7608514CAC305A45DD75C8F32D4B0AA2575F99A617B33E5C533FE7B41463AA61EEEE38028343CD572EFBCEEB00B8274D37050F43BCB521932E1BC25849EE07CD39DE09F19BDED12CCBC6BF865D599E93EFAAE6A4B6FC3326CA2A949A73633C0F313A123CEDBE547019C8CA97913BAFD1CF01EC187CA2D3CCF5BABCE4F35CBCF90913E0D1BF16F3D31B4A4BD0C26D27D4105FA8CA6DF78ADEF30AAD855BBDDFDA483872CA287D7B1F98430735624189FE6C8F12018FD2E6AB0BA482068567EFA4C";
var prefix = ';';
var groupId = 5063409;
var maximumRank = 11;

client.on('ready', function(){
    client.user.setActivity("Cookie Simulator with Arlenox! 🍪", {type: "PLAYING"})
})

function login() {
    return roblox.cookieLogin(cookie);
}
 
login() // Log into ROBLOX
    .then(function() { // After the function has been executed
        console.log('Logged in.') // Log to the console that we've logged in
    })
    .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
        console.log(`Login error: ${error}`) // Log the error to console if there is one.
    });
 
function isCommand(command, message){
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}
 
client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
   
    if(isCommand('rank', message)){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**:x: You're not allowed to use this command!**")
        var username = args[1]
        var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
        var NorankIdentifier = new Discord.MessageEmbed()
        .setTitle(":warning: The format of this command is ``;rank [ROBLOX USERNAME] [RANK NUMBER]``. To see the ranks, say ;ranks.")
        if (!rankIdentifier) return message.channel.send(NorankIdentifier);
        if (username){
            var SearchingUser = new Discord.MessageEmbed()
            .setColor(0xE1E127)
            .setTitle(`:warning: Searching ${username} on ROBLOX...`)
            message.channel.send(SearchingUser)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        var CantManage = new Discord.MessageEmbed()
                        .setColor(0xFF0000)
                        .setTitle(`:x: I can't manage ${username}!`)
                        message.channel.send(CantManage)
                    } else {
                        var UserFound = new Discord.MessageEmbed()
                        .setColor(0x38EE0E)
                        .setTitle(`:white_check_mark: User found in the group, changing rank for ${username}...`)
                        message.channel.send(UserFound)
                        roblox.setRank(groupId, id, rankIdentifier)
                        .then(function(newRole){
                            var UserRanked = new Discord.MessageEmbed()
                            .setColor(0x38EE0E)
                            .setTitle(`:white_check_mark: Successfully ranked ${username} to ${newRole.name}!`)
                            message.channel.send(UserRanked)
                        }).catch(function(err){
                            var ErrorCccurred = new Discord.MessageEmbed()
                            .setColor(0xFF0000)
                            .setTitle(":x: An error has occurred, please try again.")
                            message.channel.send(ErrorCccurred)
                        });
                    }
                }).catch(function(err){
                    var NotInGroup = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTitle(`:x: ${username} isn't in the group!`)
                    message.channel.send(NotInGroup)
                });
            }).catch(function(err){
                var UserDoesntExist = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle(`:x: The player you tried to rank (${username}) doesn't exist on ROBLOX!`)
                message.channel.send(UserDoesntExist)
          });
      } else {
          message.channel.send(NorankIdentifier)
      }
      return;
  }
})

client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
   
    if(isCommand('demote', message)){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**:x: You're not allowed to use this command!**")
        var username = args[1]
        //var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
        //if (!rankIdentifier) return message.channel.send("**:warning: The format is ``!rank [ROBLOX USERNAME] [RANK NUMBER]``.**");
        if (username){
            var SearchingUser = new Discord.MessageEmbed()
            .setColor(0xE1E127)
            .setTitle(`:warning: Searching ${username} on ROBLOX...`)
            message.channel.send(SearchingUser)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        var CantManage = new Discord.MessageEmbed()
                        .setColor(0xFF0000)
                        .setTitle(`:x: I can't manage ${username}!`)
                        message.channel.send(CantManage)
                    } else {
                        var UserFound = new Discord.MessageEmbed()
                        .setColor(0x38EE0E)
                        .setTitle(`:white_check_mark: User found in the group, changing rank for ${username}...`)
                        message.channel.send(UserFound)
                        roblox.setRank(groupId, id, rank - 1)
                        .then(function(newRole){
                            var UserRanked = new Discord.MessageEmbed()
                            .setColor(0x38EE0E)
                            .setTitle(`:white_check_mark: Successfully demoted ${username} to ${newRole.name}!`)
                            message.channel.send(UserRanked)
                        }).catch(function(err){
                            var ErrorCccurred = new Discord.MessageEmbed()
                            .setColor(0xFF0000)
                            .setTitle(":x: An error has occurred, please try again.")
                            message.channel.send(ErrorCccurred)
                        });
                    }
                }).catch(function(err){
                    var NotInGroup = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTitle(`:x: ${username} isn't in the group!`)
                    message.channel.send(NotInGroup)
                });
            }).catch(function(err){
                var UserDoesntExist = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle(`:x: The player you tried to demote (${username}) doesn't exist on ROBLOX!`)
                message.channel.send(UserDoesntExist)
          });
      } else {
        var InvalidFormat = new Discord.MessageEmbed()
        .setColor(0xE1E127)
        .setTitle(":warning: The format of this command is ``;demote [ROBLOX USERNAME] [RANK NUMBER]``. To see the ranks, say ;ranks.")
        message.channel.send(InvalidFormat)
      }
      return;
  }
})

client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
   
    if(isCommand('promote', message)){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**:x: You're not allowed to use this command!**")
        var username = args[1]
        //var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
        //if (!rankIdentifier) return message.channel.send("**:warning: The format is ``!rank [ROBLOX USERNAME] [RANK NUMBER]``.**");
        if (username){
            var SearchingUser = new Discord.MessageEmbed()
            .setColor(0xE1E127)
            .setTitle(`:warning: Searching ${username} on ROBLOX...`)
            message.channel.send(SearchingUser)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        var CantManage = new Discord.MessageEmbed()
                        .setColor(0xFF0000)
                        .setTitle(`:x: I can't manage ${username}!`)
                        message.channel.send(CantManage)
                    } else {
                        var UserFound = new Discord.MessageEmbed()
                        .setColor(0x38EE0E)
                        .setTitle(`:white_check_mark: User found in the group, changing rank for ${username}...`)
                        message.channel.send(UserFound)
                        roblox.setRank(groupId, id, rank + 1)
                        .then(function(newRole){
                            var UserRanked = new Discord.MessageEmbed()
                            .setColor(0x38EE0E)
                            .setTitle(`:white_check_mark: Successfully promoted ${username} to ${newRole.name}!`)
                            message.channel.send(UserRanked)
                        }).catch(function(err){
                            var ErrorCccurred = new Discord.MessageEmbed()
                            .setColor(0xFF0000)
                            .setTitle(":x: An error has occurred, please try again.")
                            message.channel.send(ErrorCccurred)
                        });
                    }
                }).catch(function(err){
                    var NotInGroup = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTitle(`:x: ${username} isn't in the group!`)
                    message.channel.send(NotInGroup)
                });
            }).catch(function(err){
                var UserDoesntExist = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle(`:x: The player you tried to promote (${username}) doesn't exist on ROBLOX!`)
                message.channel.send(UserDoesntExist)
          });
      } else {
        var InvalidFormat = new Discord.MessageEmbed()
        .setColor(0xE1E127)
        .setTitle(":warning: The format of this command is ``;promote [ROBLOX USERNAME] [RANK NUMBER]``. To see the ranks, say ;ranks.")
        message.channel.send(InvalidFormat)
      }
      return;
  }
})

client.on("message", (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    let args = message.content.trim().split(/ +/g)

    if(isCommand('shout', message)) {
        if (!message.member.hasPermission("STREAM")) return message.channel.send("**:x: You're not allowed to use this command!**")
        var newshout = args.slice(1).join(" ")
        var InvalidFormat = new Discord.MessageEmbed()
        .setColor(0xE1E127)
        .setTitle(":warning: The format of this command is ``;shout [MESSAGE]``.")
        if (!newshout) return message.channel.send(InvalidFormat);
        roblox.shout(groupId, "[Shout by " + message.author.username + "] " + newshout)
        var ShoutSent = new Discord.MessageEmbed()
        .setColor(0x38EE0E)
        .setTitle(`:white_check_mark: Group shout successfully modified.`)
        .setDescription(newshout)
        message.channel.send(ShoutSent)
    }
})

client.on("message", (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    let args = message.content.trim().split(/ +/g)

    if(isCommand('post', message)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**:x: You're not allowed to use this command!**")
        var newshout = args.slice(1).join(" ")
        var InvalidFormat = new Discord.MessageEmbed()
        .setColor(0xE1E127)
        .setTitle(":warning: The format of this command is ``;post [MESSAGE]``.")
        if (!newshout) return message.channel.send(InvalidFormat);
        roblox.post(groupId, newshout)
        var ShoutSent = new Discord.MessageEmbed()
        .setColor(0x38EE0E)
        .setTitle(`:white_check_mark: Message successfully posted on group wall.`)
        .setDescription(newshout)
        message.channel.send(ShoutSent)
    }
})

client.on("message", message =>{
    if(message.content === ";embed") {
        var Embed = new Discord.MessageEmbed()
        .setTitle("Worked!")
        message.channel.send(Embed)
    }
})

var Trello = require("trello");
var trello = new Trello("aff42b030b2c9e009b9fa35dd171faf8", "2541baf0c4f5b7f7b63f62578b1ccbb2a91fbcfff9d326fa48857f68ab380b6c");

const BoardID = "5e2ecac45b2937296cb6db81";
const ListID = "5e88a3578ac78b537366afd9";

client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    let args2 = args.slice(2).join(" ")
   
    if(isCommand('ban', message)){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**:x: You're not allowed to use this command!**")
        var username = args[1]
        var evidence = Number(args[2]) ? Number(args[2]) : args[2];
        var reason = args.slice(3).join(" ")
        //if (!rankIdentifier) return message.channel.send("**:warning: The format is ``!rank [ROBLOX USERNAME] [RANK NUMBER]``.**");
        if (username){
            var SearchingUser = new Discord.MessageEmbed()
            .setColor(0xE1E127)
            .setTitle(`:warning: Searching ${username} on ROBLOX...`)
            message.channel.send(SearchingUser)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        var CantManage = new Discord.MessageEmbed()
                        .setColor(0xFF0000)
                        .setTitle(`:x: I can't ban ${username}!`)
                        message.channel.send(CantManage)
                    } else {
                        var UserFound = new Discord.MessageEmbed()
                        .setColor(0x38EE0E)
                        .setTitle(`:white_check_mark: User found on ROBLOX, banning ${username}...`)
                        message.channel.send(UserFound)
                        trello.addCard(username, "Administrator: " + message.author.username + " (Discord Ban)\n Reason: " + reason + "\n Evidence: " + evidence, ListID)
                        .then(function(newRole){
                            var UserBanned = new Discord.MessageEmbed()
                            .setColor(0x38EE0E)
                            .setTitle(":white_check_mark: Player successfully banned.")
                            .setDescription(`Successfully banned **${username}** for the reason **`  + reason + `**. To see the proof, [click here.](` + evidence + ")")
                            message.channel.send(UserBanned)
                            message.delete()
                        }).catch(function(err){
                            var ErrorCccurred = new Discord.MessageEmbed()
                            .setColor(0xFF0000)
                            .setTitle(":x: An error has occurred, please try again.").then(console.log)
                            message.channel.send(ErrorCccurred)
                        });
                    }
                });
            }).catch(function(err){
                var UserDoesntExist = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle(`:x: The player you tried to ban (${username}) doesn't exist on ROBLOX!`)
                message.channel.send(UserDoesntExist)
          });
      } else {
        var InvalidFormat = new Discord.MessageEmbed()
        .setColor(0xE1E127)
        .setTitle(":warning: The format of this command is ``;ban [ROBLOX USERNAME] [EVIDENCE (LINK)] [REASON]``.")
        message.channel.send(InvalidFormat)
      }
      return;
  }
})
