const discord = require("discord.js"); //implements discord.js dependency
const bot = new discord.Client(); //adds the bot
// const config = require("./config.js"); //bot prefix and token
const { token } = require("./config.js");   //bot token
const { prefix } = require("./config.js");  //prefix

console.log(token);
console.log(prefix);

//contoll function
bot.on("ready", () => {
    console.log("It works!");
  });

//bot joined
bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});
  
//bot left
bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

//bot commands
bot.on("message", message => {
    //split function to define when the bot is summoned
    let args = message.content.substring(prefix.length).split(" ");
    switch (args[0]) {
        //ping command
        case "ping":
            message.reply("pong!");
        break;
    
    //bot commands that starts with the prefix
    //you can find many examples on github, just google discord.js examples

    }
});