module.exports = {
	name: 'user',
	description: 'Escolhe um usuário aleatório do servidor',
	execute(message) {
		let randomPer = message.guild.members.cache.random().user;
        message.channel.send(`${randomPer}`)
	},
};