const Discord = require("discord.js");
const client = new Discord.Client();
const version = "1.0";
var allowedCommands = ["help", "ping", "echo"]; // do not remove "help"!
var allowedUsers = ["exampleUser#1234"]; // allowed users, duh!
var prefix = ">"; // the prefix you want the bot to listen for

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
const indentString = require('indent-string');
var cmd = require('node-cmd');

function allowedCommandsList() {
    return allowedCommands.toString().replace(/,/g, ', ');
}

function isAcceptableCommand(str) {
    return (allowedCommands.indexOf(str.replace(/ .*/, '')) > -1);
}

function isAllowedUser(str) {
    return (allowedUsers.indexOf(str) > -1);
}

client.on('message', msg => {
    if (msg.content.startsWith(prefix)) {

        var user = msg.author.username + "#" + msg.author.discriminator;

        if (isAllowedUser(user)) {
            var preCmd = msg.content;
            var cmdToRun = preCmd.substr(1).slice(0);
            if (cmdToRun == "") {
                msg.channel.send("**" + msg.author.username + "**, you did not enter a command after the '" + prefix + "' prefix.");

            } else if (!isAcceptableCommand(cmdToRun)) {
                msg.channel.send("**" + msg.author.username + "**, the command you entered has not been enabled. Allowed cmmands are available by using the 'help' command.");
            } else if (cmdToRun == "help") {
                msg.channel.send("**" + msg.author.username + "**, the bot is currently running version " + version + ". The bot is available on GitHub and the enabled commands are: " + allowedCommandsList() + " :)");
            } else {
                cmd.get(
                    cmdToRun,
                    function(err, data, stderr) {
                        console.log("Command executed (from " + user + "): " + cmdToRun);
                        if (data == "") {
                            data = "No response :(";
                        }
                        if (data.length > 2000) {
                            msg.channel.send("**" + msg.author.username + "**, the command you entered yielded a result over 2000 lines.");
                        } else {
                            msg.channel.send("**" + msg.author.username + "**, the command you sent has finished. \n\n" + msg + "\n```" + data + "```");
                        }
                    }
                );
            }
        }

    }


});
client.login('YOUR_DISCORD_TOKEN');
