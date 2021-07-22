var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.listen(port);

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity('.help para ver os comandos!')
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;
	channel.send(`Welcome to the server, ${member}`);
  });

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('ocorreu um erro ao tentar executar esse comando! :c');
	}
    
});

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
try {
    if (!message.guild) return;

    if (message.content.startsWith('.play') || message.content.startsWith('.p ') ) {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
			const voiceChannel = message.member.voice.channel
            const connection = await voiceChannel.join();
            const args = message.content.split(' ').slice(1)
            const ytdl = require('ytdl-core')
            const dispatcher = connection.play(ytdl(args.join(" ")))
			dispatcher.on('finish', () => voiceChannel.leave())
			message.reply(`tocando ${args}.`)
        } else {
            message.reply('você precisa estar em um canal de voz!');
        }
    }
} catch(e){
console.log(e)
}
});

client.on("message", async message => {
  if(message.content === `${prefix}ping`) {
    const m = await message.channel.send("Pong!");

    message.reply(`o seu ping está em ${m.createdTimestamp - message.createdTimestamp}ms.`);
  }
  
});

client.login(token);