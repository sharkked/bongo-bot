module.exports.run = message => {
    message.reply('Pong!');
}

module.exports.conf = {
    enabled: true,
    aliases: []
}

module.exports.help = {
    name: "ping"
}