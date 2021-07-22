module.exports = {
	name: 'quit',
	description: 'Force the bot to quit the server!',
	execute(message) {
		message.channel.send("Entendo a sua escolha e peço desculpas por qualquer coisa. Caso queira me adicionar de novo, deixo aqui meu link:\nhttps://discord.com/oauth2/authorize?client_id=867456901716246538&permissions=8&scope=bot")
        message.guild.leave();
	},
};