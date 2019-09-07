const config = require('../config.json');
const l = require('../util/logger.js');

module.exports = message => {
    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) == 0) {
        console.log('??')
        let client = message.client;
        let command = message.content.split(/ +/g)[0].slice(config.prefix.length);
        let args = message.content.split(/ +/g).slice(1);
        let cmd;
        if (client.commands.has(command)) {
            cmd = client.commands.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command));
        }
        if (cmd) {
            cmd.run(client, message, args);
        }

    } else {
        let words = message.content.split(/ +/g);

        if (/n+\W*[il1]+\W*[g9]+\W*[g9]+\W*[e3]+\W*r+/gi.test(message.content) ||
            /n+\W*[il1]+\W*[g9]+\W*[g9]+\W*[a4]+/gi.test(message.content)) {
            if (config.pass.includes(message.author.id)) {
                return;
            }

            message.channel.send({
                files: [
                    './images/really.png'
                    ]
            });
        }
        else if (/[^ ]{2,}er$/gi.test(message.content)) {
            message.channel.send(`${words[words.length - 1].toLowerCase().replace(/^\w/, c => c.toUpperCase())}? I hardly know her!`);
        }
        else if (/^i['`]?m$/gi.test(words[0]) && words.length > 1) {
            message.channel.send(`Hi ${message.content.slice(words[0].length + 1).toLowerCase()}, I'm dad!`);
        }

        if (/^n[-n ]*[wy ]*[o0][ o0]*\W*$/gi.test(message.content)) {
            message.channel.send('Yes!');
        }
        else if (/negative\W*/gi.test(message.content)) {
            message.channel.send("Affirmitive!");
        }
        else if (/nope\W*/gi.test(message.content)) {
            message.channel.send("Yep!");
        }

        
    }
}