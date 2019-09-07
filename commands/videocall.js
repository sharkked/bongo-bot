module.exports.run = (client, message) => {
    if (message.member) {
        if (message.member.voiceChannel) {
            message.channel.send(`**${message.author.tag}** https://www.discordapp.com/channels/${message.guild.id}/${message.member.voiceChannelID}`);
        }
        else {
            message.channel.send(`**${message.author.tag}** You're not in a voice channel!`);
        }
    } else {
        message.channel.send('Something went wrong idk');
    }
}

module.exports.conf = {
    enabled: true,
    aliases: ['link', 'video']
}

module.exports.help = {
    name: 'videocall'
}