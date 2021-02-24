const dbd = require('dbd.js'); //opps, almost imported discord.js

const bot = new dbd.Bot({
token: process.env.TOKEN, //put your bot token here, I am using a .env file
prefix: '!' //your bot token
})

//time to make a command
bot.onMessage();

bot.command({
name: "embed",
code: `$title[Cool Embed] $description[super cool embed] $color[yellow]`
})

//i am going to invite it now.
