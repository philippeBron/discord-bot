require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.BOT_TOKEN;

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    } else if (message.content === 'lol') {
        message.reply('ptdr')
    }
})

bot.login(TOKEN);
