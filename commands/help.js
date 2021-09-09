module.exports = {
	name: 'help',
	description: 'Te mostra os comandos até agora computados do bot',
	execute(message) {
		message.channel.send("LISTA COM MEUS COMANDOS\n\n.alarm (xx:yy): cria uma alarme para a hora selecionada em até um dia de validade, no qual xx são horas e yy minutos, neste formato.\n\n.avatar (arg) : mostra o avatar do usuário selecionado '@...'.\n\n.champ (campeão) : retorna a página do op.gg coreana acerca do boneco do LoL.\n\n.blackjack (arg) : um mini-game de Blackjack para passar o tempo. arg ='start' começa o jogo, arg = 'pedir' pede carta, arg = 'parar' para e arg = 'help' abre ajuda do comando.\n\n.cotacao (arg): Mostra a cotação atual de certa moeda convertida para reais (BRL). Por enquanto suporto o dólar americano (arg = USD), euro (arg = EUR) e bitcoin (arg = BTC).\n\n.criador : retorna meu nome, com meu link para o github.\n\n.docs : retorna para o site do projeto, mostrando readme e documentação.\n\n.feedou (arg) : fala que (arg) feedou pela x vez (x é o número de vezes que o comando foi usado).\n\n.freegame : mostra os jogos que estão grátis por conta de promoções para PC.\n\n.gadeou (arg) : fala que (arg) gadeou pela x vez (x é o número de vezes que o comando foi usado).\n\n.help : retorna uma lista com todos os comandos aceitos e modo de uso.\n\n.leave : tira o bot da sala de voz em que estava.\n\n.lol (nick) : mostra dados do lol sobre o invocador.\n\n.nasa (arg): retorna alguma imagem obtida pela API da NASA. 'daily' = foto do dia. 'mars' = foto")
		message.channel.send("de sonda em solo marciano. 'pic (arg2)' = foto da pesquisa 'arg2' (use '-' para separar palavras). 'iss' = posição da Estação Espacial Internacional.\n\n.obrigado : agradecimento nosso por estar em seu servidor.\n\n.ping : mostra sua latência em relação a mim (sou hospedado em solo estadunidense, vale ressaltar).\n\n.pokemon : retorna um pokemon aleatório, com a página de pokedex dele.\n\n.p/.play (arg) : o bot entra no canal que você está e toca a sua música escolhida (arg). Infelizmente, so funciona com links e com o youtube (pretendo consertar isto depois).\n\n.quit : exclui o bot do seu servidor, antes deixando uma mensagem caso queira reintregrá-lo.\n\n.random (arg1) (arg2) : retorna um número aleatório entre o (arg1) e o (arg2).\n\n.server : retorna o nome do servidor, número total de pessoas e número de onlines (excluso bots).\n\n.sorteio (arg1) (arg2) (arg3)... : sorteia um dos argumentos que você colocou, separados por espaços.\n\n.spacex: retorna uma foto aleatória do último lançamento da SpaceX\n\n.tempo (local) : retorn as condições climáticas para a área desejada.\n\n.user : sorteia um usuário aleatório do servidor.\n\n.wiki: retorna uma página da wikipédia, aleatória (sem args) ou escolhida (sem acentuação ou pontuação).");
	},
};
