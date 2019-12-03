const config = require('../config.json');
const l = require('../util/logger.js');

module.exports = member => {
    if (member.guild.id == config.srvrID && member.id == config.gwID) {
        member.addRole("499449604232970242");
        l.log(`GREENWOOD JOINED. FUCK YOU.`);
    }    
}