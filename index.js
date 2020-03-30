const discord = require("discord.js"); //implements discord.js dependency
const client = new discord.Client(); //adds the bot
const { token } = require("./settings"); //bot token
const { prefix } = require("./settings"); //prefix required to summon the bot

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

    
    //bot commands that starts with the prefix
    //you can find many examples on github, just search for discord.js examples

    }
});