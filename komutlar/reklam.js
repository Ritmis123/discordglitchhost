require('discord.js');


exports.run = function(client, message) {
      message.channel.bulkDelete(4);
      message.channel.send("Çok Mesaj Siliyorum Azcık Yavaş.").then(msg => {
        msg.delete(5000)
      });

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['sil'], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'temizle3', //adını belirledik (kullanmak için gereken komut)
  description: 'Chatteki artıkları temizler', //açıklaması
  usage: 'temizle3' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
