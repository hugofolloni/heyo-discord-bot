let i = 0;

module.exports = {
	name: 'gadeou',
	description: 'Adiciona um ao número de vezes que alguém gadeou',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
		} 

        i++

        var name = args[0]

        message.channel.send(`${name} já foi gado por ${i} vezes.`);
	},
};