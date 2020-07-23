# TG.jpg

A telegram bot that search and return first google search image when you type `something.jpg`. This project was refactored using
[Bottender](https://github.com/Yoctol/bottender) from https://github.com/ray851107/image-support-bot

輸入 `xxx.jpg` ，這個機器人就會幫你去Google搜尋xxx的第一張圖片，然後傳給你～

![Jul-23-2020 15-51-50](https://user-images.githubusercontent.com/4176802/88263528-bf357d00-ccfc-11ea-95cf-639e68fe97b9.gif)

### You can add this bot to your telegram group via link https://t.me/tgjpg_bot

## Command

### Search picture
`xxx.jpg`
`xxx.png`
`xxx.bmp`
### Search gif
`xxx.gif`

## Host this bot by yourself
### Configuration The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work locally, you must put required environment variables into your `.env` file.
Your `.env` file should looks like:
`TELEGRAM_ACCESS_TOKEN=<Telegram bot api token>`

But if you deploy this bot on heroku, you can just edit environment variables via heroku web interface "Settings" -> "Config Vars", and add `TELEGRAM_ACCESS_TOKEN`.



### Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```
