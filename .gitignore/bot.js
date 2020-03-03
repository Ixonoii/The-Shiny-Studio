// ---------------------------------------------------------------------------------------- //
// ----------------------------------------- SETTINGS ----------------------------------------- //
// ---------------------------------------------------------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
var GameName = "[⭐EVENT] Cookie Simulator 2!";
var GroupDescription = "Our Roblox group is a vital part of the game. Our group is the way you get access to the discord and much more. There will be possible perks if you are in the group coming soon.";
var GameDescription = "Our game is one of the best games with state of the art security. We have invisible walls stopping exploiters, active staff to correctly punish people disobeying rules.";
var LogChannel = "680455637687205895";
var SuggestionChannel = "638831121496276994";
var NotAllowed = ":warning: You don't have the necessary permissions to use this command.";
client.login(process.env.TOKENBOT)
