const puppeteer = require('puppeteer')
const path = require('path')

const execute = async (message) => {
	message.reply("estou indo pegá-la!")
	message.channel.startTyping()
	const browser = await puppeteer.launch({ headless: true }, { args: ['--no-sandbox'] }, {ignoreDefaultArgs: ['--disable-extensions']})
	const page = await browser.newPage()
	await page.goto('https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria')
	await page.screenshot({ path: path.join(__dirname, '../../HeyOBot/assets/randompage.png') })
	await page.close()
	await browser.close()
	message.channel.stopTyping()
	message.channel.send('Aqui está a sua página aleatória da wikipédia:', { files: [path.join(__dirname, '../../HeyOBot/assets/randompage.png')] })
}

module.exports = {
  name: 'wiki',
  help: 'Exibe uma página aleatória da wikipedia',
  execute
}