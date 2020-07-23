# TG.jpg

A telegram bot that search and return first img reply your .jpg search.
You can add this bot to your telegram group via link https://t.me/tgjpg_bot

This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

## Configuration

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.
If you deploy to heroku, you can just edit env vars via heroku web interface "Settings" -> "Config Vars"

Currently TG.jpg only support telegram, so you only need to add telegram bot token.
Google custom search api is not required.

`TELEGRAM_ACCESS_TOKEN=<Telegram bot api token>`

## Available Scripts

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

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).
