const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription('**Dostum Şehir Girmeye Ne Dersin? Yoksa Boş Havayı mı öğreniceksin!.**').setColor('RANDOM'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} Bu şehir için Maxi'nin söylediği hava durumu!`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Zaman,Saat',`UTC${location.timezone}`, true)
          .addField('Derece',location.degreetype, true)
          .addField('Sıcaklık',`${current.temperature} Derece`, true)
          .addField('Hava', `${current.feelslike}`, true)
          .addField('Rüzgar Hızı',current.winddisplay, true)
          .addField('Nem Oranı', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: "0"
};

exports.help = {
  name: "MaxiHava",
  description: "Maxi Hava durumunu gösterir",
  usage: "MaxiHava"
};
