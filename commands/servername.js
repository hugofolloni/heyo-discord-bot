module.exports = {
	name: 'servername',
	description: 'Server name!',
	execute(message) {
		message.channel.send(`O nome do servidor é: ${message.guild.name}`);
	},
};