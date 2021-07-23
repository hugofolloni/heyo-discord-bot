module.exports = {
	name: 'sorteio',
	description: 'Sorteia um valor dentre os diversos indicados',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
		} 

        var max = args.length
        var sorteado = Math.floor(Math.random() * (max - 0)) + 0;
        message.reply(`o argumento sorteado foi ${args[sorteado]}`)
        
	},
};
