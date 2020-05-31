require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.BOT_TOKEN;

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.on('message', message => {
    if (message.content.toUpperCase() === 'PING') {
      message.reply('pong !')
    } else if (message.content.toUpperCase()=== 'LOL') {
        message.reply('ptdr!')
    }
})

bot.login(TOKEN);
