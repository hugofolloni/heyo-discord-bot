const Discord = require('discord.js')

module.exports = {
	name: 'spacex',
	description: 'Envie',
	execute(message) {
        const fetch = require("node-fetch")

        var api = `https://api.spacexdata.com/v4/launches/latest`
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            var diretorio = data.links.flickr.original
            var max = diretorio.length
            var sorteado = Math.floor(Math.random() * (max - 0)) + 0;
            var img = diretorio[sorteado]
            const embed = new Discord.MessageEmbed()
                .setImage(img)
            message.reply("aqui está uma imagem do último lançamento da SpaceX:");
            message.channel.send(embed);
        
        });

},
};