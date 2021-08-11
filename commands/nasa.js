const Discord = require('discord.js')

module.exports = {
	name: 'nasa',
	description: 'Te mostra uma foto aleatoria do banco de dados da nasa.',
	execute(message, args) {
        if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}!`);
		} 
        var busca = (args[0]).toLowerCase()

        if(busca === "daily"){
            const fetch = require("node-fetch")

            var api = `https://api.nasa.gov/planetary/apod?api_key=N66cUduqd00HfD4316gSgSsyWxO6FpfwloxOOcvZ`
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                var foto = data.hdurl;
                const embed = new Discord.MessageEmbed()
                    .setImage(foto)
                var dataAtual = data.date.split('-');
                var dia = dataAtual[2] + "/" + dataAtual[1] + "/" + dataAtual[0]
                var description = data.explanation;
                message.reply(`aqui está a sua foto do dia ${dia}:`);
                message.channel.send(embed)
                message.channel.send(`Temos ainda uma explicação em inglês do que ela é:\n"${description}"`)});
        }
        if(busca === "mars"){
            const fetch = require("node-fetch")

            var api = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=N66cUduqd00HfD4316gSgSsyWxO6FpfwloxOOcvZ`
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                var max = data.photos.length
                var sorteio = Math.floor(Math.random() * (max - 0)) + 0;
                var sorteado = data.photos[sorteio];
                var foto = sorteado.img_src;
                const embed = new Discord.MessageEmbed()
                    .setImage(foto)
                var dataAtual = sorteado.earth_date.split('-');
                var dia = dataAtual[2] + "/" + dataAtual[1] + "/" + dataAtual[0]
                var rover = sorteado.rover.name;
                message.reply(`aqui está a sua foto de Marte:`);
                message.channel.send(embed)
                message.channel.send(`Ela foi tirada pelo rover ${rover} no dia ${dia}.`)

            })
        }
        if(busca === "pic"){
            console.log(args)
            if(args.length < 2){
                args.push('galaxy')
            }
            var pesquisa = (args[1]).toLowerCase()  
            console.log(pesquisa)
            const fetch = require("node-fetch")

            var api = `https://images-api.nasa.gov/search?q=${pesquisa}&media_type=image`
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                var length = data.collection.items.length;
                var sorteio = Math.floor(Math.random() * (length - 0)) + 0; 
                var foto = data.collection.items[sorteio].links[0].href;
                const embed = new Discord.MessageEmbed()
                    .setImage(foto)
                var description = data.collection.items[sorteio].data[0].description;
                message.reply(`aqui está a sua foto para a pesquisa "${pesquisa}":`);
                message.channel.send(embed)
                message.channel.send(`Essa é a descrição em inglês dessa foto:\n${description}`);
            })
        }
        if(busca === "iss"){
            const fetch = require("node-fetch")

            var api = `http://api.open-notify.org/iss-now.json`
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                var latitude = data.iss_position.latitude;
                var longitude = data.iss_position.longitude;
                var mapApi = `https://www.mapquestapi.com/staticmap/v5/map?key=Ni2ADHDUCU3MFwVbERoz6VC0jiYwgpI2&center=${latitude},${longitude}&zoom=2&type=hyb&size=600,400@2x`
                const embed = new Discord.MessageEmbed()
                    .setImage(mapApi)
                message.reply(`a ISS está sobre a latitude ${latitude} e a longitude ${longitude}. Ela está sobre centro desta imagem:`)
                message.channel.send(embed);

            })
        }
    },
};
