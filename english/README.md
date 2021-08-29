# Hi, I'm HeyO

## An interactive and fun bot for discord servers.

### I was made by Hugo Folloni, and he used Node.js (Discord.js).

[<img src="https://cdn.discordapp.com/attachments/867457879047929918/867830621467967578/ErG18llWMAAIziI.jpeg" alt="botpic" width="150"  />](https://discord.com/oauth2/authorize?client_id=867456901716246538&permissions=8&scope=bot)

If you want me on your server, just click the image above.

Since it is a brazilian bot, it was made in portuguese. But here I explain the function of every command from this bot.

## COMMANDS

.alarm (xx:yy): sets an alarm for the selected time. xx = hours, yy = minutes. You can only set it for a range of 23 hours and 59 minutes.

.avatar (arg) : returns the profile picture from an user "@...".

.champ (campeão) : returns the op.gg page from the League champion.

.cotacao (arg): returns the current price for the selected currency converted to BRL (reais). BTC = Bitcoin, USD = Dolar, EUR = Euro. 

.criador : shows my github link.

.docs : returns to the portuguese documentation for this bot.

.elo (region) (nick) : shows the op.gg page from the selected player.

.feedou (arg) : returns (arg) feedou (kill himself too much) for the current iteration of a variable, where (arg) is the name of a person.

.freegame : shows the current free games for PC.

.gadeou (arg) : returns (arg) gadeou (he love women too much) for the current iteration of a variable, where (arg) is the name of a person.

.help : returns a list from all commands.

.leave : kicks the bot from the current voice channel.

.nasa (arg): returns some image get from NASA API. 'daily' = Astronomic Picture of the Day. 'mars' = Mars rover photo. 'pic' (arg2) = searches a 'arg2' photo (uses '-' to separate words). iss = current position from International Space Station.

.obrigado : A thanks for being in your server.

.ping : shows your latency.

.pokemon : returns a random pokemon, with pokedex page.

.p/.play (arg) : the bot enters on your voice channel and plays the (arg) music. Unfortunately, we only work with youtube and links (I will fix it later).

.quit : kicks the bot from the server, but leaves a message if you want to add me again.

.random (arg1) (arg2) : returns a random number between (arg1) and (arg2).

.server : returns the server name, with the amount of people (not bots) in there and online.

.sorteio (arg1) (arg2) (arg3)... : choose one random (arg).

.spacex: returns a random picture from the latest SpaceX mission.

.user : choose a random user from the server.

.wiki : returns a wikipedia page, random (no args) or choosen (please, just letters, no signals).

## APIs

Cotação: I use the https://economia.awesomeapi.com.br/  api to convert currency.

NASA: I use https://api.nasa.gov/ api to get images from NASA database. We use APOD, Mars Rover and Image Library.

ISS: I use http://api.open-notify.org/iss-now.json api to get the current ISS position. We use the https://mapquestapi.com API too, to show it on the map.

SpaceX: I use https://api.spacexdata.com/v4/launches/latest API, to find data from the latest SpaceX mission.
