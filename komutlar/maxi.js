const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
      .setDescription("**MaxiBot**")
      .setThumbnail("https://www.google.com/search?q=minecraft+image&tbm=isch&source=lnt&tbs=isz:lt,islt:qsvga&sa=X&ved=0ahUKEwj5krvunfLfAhUSpYsKHWpABVEQpwUIHw&biw=1920&bih=938&dpr=1#imgrc=jS9ZgoHn9r2i9M:")
      .setColor(0x00AE86)
      .addField("İsmi", "MaxiNWBOT", true)
      .addField("İşleri",'Otomatik Bir cevaplayıcı', true)
      .addField("Kurucuları", 'Enes ve Ozan' )
      .addField("Neden Burdayım", 'MaxiNW için 1DeliRekt7 tarafından yapılmış amatör bir botum!', true)

      message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'MaxiBot',
  description: 'MaxiBot Hakkında Bilgi Verir',
  usage: 'MaxiBOT'
};
