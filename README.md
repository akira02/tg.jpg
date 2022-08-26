# TG.jpg

A telegram bot that search and return first google search image when you type `something.jpg`. This project was refactored using
[Bottender](https://github.com/Yoctol/bottender) from https://github.com/ray851107/image-support-bot

只要在telegram上偵測到有人打 `xxx.jpg` ，這個機器人就會幫你去Google搜尋xxx的第一張圖片，然後傳給你～

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
Please remember to set up webhook when using `npm start`.

```sh
npm start
yarn start
```

## Webhook​
Set Up Webhook for Development​
Before setting the webhook, please make sure you have set your access token correctly in .env.

By the following command, Bottender runs a bot server by ngrok, which makes your local bot server accessible from the Internet:

# in development
```
npm run dev
```
When you run bottender in development mode, Bottender automatically run up a Ngrok client, and then you can get the information of webhook URL from the console like this:

```
App has started
telegram webhook url: https://42bbf602.ngrok.io/webhooks/telegram
server is running on 5000 port...
```
Then, you can open a new tab in the terminal and finish the webhook setting by the below command:

npx bottender telegram webhook set
Finally, press Y to allow Bottender set ngrok temporary URL as the webhook. Now you are ready to interact with your bot on Telegram :)

Set Up Webhook for Production​
Before setting the webhook, please make sure you have set your access token correctly as the environment variable.

Then, you can run Bottender on your hosting by the following command:

# in production
```
npm start
```
By the following command, you can finish the Telegram webhook setting. (If you deployed your bot with the default webhook setting, you webhook for Telegram bot supposed to be https://example.com/webhooks/telegram )

```
npx bottender telegram webhook set -w https://example.com/webhooks/telegram
```
Now you are ready to interact with your bot on Telegram :)
