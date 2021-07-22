module.exports = {
	name: 'random',
	description: 'Informe dois números (maior e menor, nesta ordem) que calcularei um valor inteiro aleatório entre eles.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
		} 
        var min = args[0];
        var max = args[1];
		min = Math.ceil(min);
  		max = Math.floor(max);
        var random = Math.floor(Math.random() * (max - min)) + min;
        message.channel.send(`Seu número aleatório entre ${min} e ${max} é ${random}`);
	},
};