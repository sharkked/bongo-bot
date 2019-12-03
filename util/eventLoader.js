const reqEvent = (event) => require(`../events/${event}`);
const l = require('../util/logger.js');

module.exports = client => {
    client.on('ready', () => reqEvent('ready')(client));
    client.on('message', reqEvent('message'));
    client.on('guildMemberAdd', reqEvent('guildmemberAdd'));
};
