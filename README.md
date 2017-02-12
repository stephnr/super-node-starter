## Super Node Starter

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/stephn-r/super-node-starter)

### Details

A complete NodeJS server starter template. This template is designed to give any NodeJS project an extreme running start that includes some of the most common features vital to the Client/Server relationship model while providing various other tools, and resources for quickly building out any part of the server development stack.

Please refer to the [CONTRIBUTING.md](https://github.com/stephn-r/super-node-starter/blob/master/CONTRIBUTING.md) doc for any questions, concerns, or suggestions

#### Running For Development

**a. Install dependencies**

```sh
yarn install
```

**b. Provide a `.env` file (copy the template) and provide you own values**

```sh
cp .env.example .env
```

Create a local relational database in MySQL/Postgres/etc (see sequelize for supported dialects) and fill out the env values to connect there.

**c. Run the database migrations**

```sh
sequelize db:migrate
```

Note: You may want to install an editor plugin to automatically do this for you on file save, like atom-typescript

**d. Run the app!**

```sh
npm start
```

#### Local Docker Deployment

Build using Docker Compose by executing the following command:

```sh
npm run deploy
```
