module.exports.run = (client, message) => {
    message.reply('Pong!');
}

module.exports.conf = {
    enabled: true,
    aliases: []
}

module.exports.help = {
    name: "ping"
}