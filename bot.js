const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
require('dotenv').config();

const l = require('./util/logger.js');
const fs = require('fs');
const http = require('http')
require('./util/eventLoader')(client);


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    l.log(`Loading ${files.length} commands.`);
    files.forEach(file => {
        let cmd = require(`./commands/${file}`);
        l.log(`Loading: "${cmd.help.name}"...`);
        client.commands.set(cmd.help.name, cmd);
        cmd.conf.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name)
        });
    });
});

client.login(process.env.CLIENT_TOKEN);

setInterval(function () { // Keeps the bot awake
    http.get('http://bongobongobot.herokuapp.com');
}, 300000);
