const Discord = require('discord.js');

const cevaplar = [
    "**EVET**",
    "**HAYIR**",
    "**TABİKİ**",
    "**BELKİ OLABİLİR KARDEŞİM**",
    "**BEN GELECEĞİ GÖREMEM**",
    "**BU NE SAYGISIZ BİR SORU**"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Düzgün Kullanım**: ?MaxiSor <soru>')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'MaxiSor',
  description: 'Maxi sorularınızı cevaplar',
  usage: 'MaxiSor <soru>'
};
