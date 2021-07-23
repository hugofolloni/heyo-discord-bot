module.exports = {
	name: 'elo',
	description: 'Te leva a página op.gg do invocador',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
		} 

        var regiao = args[0]

        var nick = args[1]

        message.reply(`aqui está a página do op.gg requerida:\nhttps://${regiao}.op.gg/summoner/userName=${nick}`);
	},
};