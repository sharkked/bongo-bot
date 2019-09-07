module.exports.run = (client, message, args) => {
    if (args.length == 0) {
        message.channel.send(`**${message.author.tag}** rolled a ${Math.floor(Math.random() * 100) + 1}`)
    } else if (args.length == 1) {
        if (/^\d*$/.test(args[0])) {
            let i = parseInt(args[0]);
            if (i >= 1000000000 || i <= 1) {
                message.channel.send(`**${message.author.tag}** Pick a valid number! (between 1 and 999,999,999)`);
                return;
            }
            message.channel.send(`**${message.author.tag}** rolled a ` + (Math.floor(Math.random() * i) + 1) + '!');
        } else if (/^\d+d\d+$/gi.test(args[0])) {
            let d = args[0].toUpperCase().split('D').map(Number);
            if (d[0] > 10 || d[0] < 1 || d[1] > 100 || d[1] < 1) {
                message.channel.send(`**${message.author.tag}** Pick a valid number of dice! (Limit 10D100)`);
                return;
            }
            let str = `**${message.author.tag}** rolled ${args[0]}: `;
            let sum = 0;
            for (var i = 0; i < d[0]; i++) {
                let roll = Math.floor(Math.random() * d[1]) + 1;
                str += roll;
                if (i + 1 < d[0]) {
                    str += ' + ';
                }
                sum += roll;
            }
            message.channel.send(str + ` = **${sum}**` + (sum == 69 ? ' _(nice)_' : ''));
        } else {
            message.channel.send(`**${message.author.tag}** Invalid input! Pick a valid number or valid dice.`);
        }
    } else {
        message.channel.send(`**${message.author.tag}** Too many arguments!`)
    }
}

module.exports.conf = {
    enabled: true,
    aliases: ["r"]
}

module.exports.help = {
    name: "roll"
}