require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.BOT_TOKEN;

bot.login(TOKEN);
