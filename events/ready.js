const l = require('../util/logger.js')

module.exports = client => {
    l.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity('Vine Compilations', { type: 'WATCHING' });
}