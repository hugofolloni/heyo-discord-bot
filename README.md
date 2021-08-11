# Olá, este é o HeyO

## Um bot interativo e descontraído para servidores no discord. 

### Foi programado por Hugo Folloni, tendo como tecnologia principal o Node.js (Discord.js).

[<img src="https://cdn.discordapp.com/attachments/867457879047929918/867830621467967578/ErG18llWMAAIziI.jpeg" alt="botpic" width="150"  />](https://discord.com/oauth2/authorize?client_id=867456901716246538&permissions=8&scope=bot)

Para me adicionar ao seu servidor, clique na imagem acima:

## COMANDOS
#### Por enquanto não possui muitos comandos. Os atuais são:

.alarm (xx:yy): cria uma alarme para a hora selecionada em até um dia de validade, no qual xx são horas e yy minutos, neste formato.

.champ (campeão) : retorna a página do op.gg coreana acerca do boneco do LoL.

.cotacao (arg): Mostra a cotação atual de certa moeda convertida para reais (BRL). Por enquanto suporto o dólar americano (arg = USD), euro (arg = EUR) e bitcoin (arg = BTC).

.criador : retorna meu nome, com meu link para o github.

.docs : retorna para este site, mostrando projeto e documentação.

.elo (região) (nick) : te retorna para a página do op.gg do jogador escolhido.

.feedou (arg) : fala que (arg) feedou pela x vez (x é o número de vezes que o comando foi usado).

.gadeou (arg) : fala que (arg) gadeou pela x vez (x é o número de vezes que o comando foi usado).

.help : retorna uma lista com todos os comandos aceitos e modo de uso.

.leave : tira o bot da sala de voz em que estava.

.nasa (arg): retorna alguma imagem obtida pela API da NASA. 'daily' = foto do dia. 'mars' = foto de sonda em solo marciano. 'pic (arg2) = foto da pesquisa 'arg2'. 'iss' = posição da Estação Espacial Internacional.

.obrigado : agradecimento nosso por estar em seu servidor.

.ping : mostra sua latência em relação a mim (sou hospedado em solo estadunidense, vale ressaltar).

.pokemon : retorna um pokemon aleatório, com a página de pokedex dele.

.p/.play (arg) : o bot entra no canal que você está e toca a sua música escolhida (arg). Infelizmente, so funciona com links e com o youtube (pretendo consertar isto depois).

.quit : exclui o bot do seu servidor, antes deixando uma mensagem caso queira reintregrá-lo.

.random (arg1) (arg2) : retorna um número aleatório entre o (arg1) e o (arg2).

.server : retorna o nome do servidor, número total de pessoas e número de onlines (excluso bots).

.sorteio (arg1) (arg2) (arg3)... : sorteia um dos argumentos que você colocou, separados por espaços.

.spacex: retorna uma foto aleatória do último lançamento da SpaceX

.user : sorteia um usuário aleatório do servidor.

.wiki : retorna uma página aleatória da wikipédia.

## APIs

Cotação: utilizo a api https://economia.awesomeapi.com.br/ para as conversões com cotaçoes em tempo real.

NASA: utilizo a api https://api.nasa.gov/ para coleta de imagens do banco de dados da NASA. Utilizamos a APOD, Mars Rover e Image Library.

ISS: utilizo a api http://api.open-notify.org/iss-now.json para encontrar a posição da ISS em tempo real. Utilizamos também a API https://https://mapquestapi.com para encontrar sua posição no mapa.


SpaceX: utilizo a api https://api.spacexdata.com/v4/launches/latest para encontrar dados sobre o último lançamento da SpaceX.


