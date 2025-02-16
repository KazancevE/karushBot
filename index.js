const TelegramBot = require('node-telegram-bot-api');
const { token, urlWeb } = require('./config.js');
// const token = '6600094203:AAEWGt9GWvkAkgAKIkEP3A5xP3vQzNqrON0'; //токен
const bot = new TelegramBot(token, { polling: true });

const commands = [
    {command: '/order', description: 'Сделать заказ'}
]
const options = {
    reply_markup: JSON.stringify({
        keyboard: [
            [
                {
                    text: 'Сделать заказ',
                    web_app: {url: urlWeb} // url сайта
                }
            ]
        ]
    })
};

const start = async () => {
    bot.setMyCommands(commands)

    bot.onText(/\/start/, (msg) => {
        try {
            const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Привет!');
        } catch (error) {
            console.log(error)
        }
        
    });
    
    bot.onText(/\/order/, (msg)=>{
        try {
            const chatId = msg.chat.id;
            bot.sendMessage(chatId, 'Нажми на кнопку', options)
        } catch (error) {
            console.log(error)
        }
        // const chatId = msg.chat.id;
        
    })
}

start();

