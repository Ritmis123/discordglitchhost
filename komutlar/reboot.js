const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("MaxiBot yeniden başlatılıyor").then(msg => {
        console.log("[MaxiBOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
