## Super Node Starter

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/stephn-r/super-node-starter)

### Details

A complete NodeJS server starter template. This template is designed to give any NodeJS project an extreme running start that includes some of the most common features vital to the Client/Server relationship model while providing various other tools, and resources for quickly building out any part of the server development stack.

Please refer to the [CONTRIBUTING.md](https://github.com/stephn-r/super-node-starter/blob/master/CONTRIBUTING.md) doc for any questions, concerns, or suggestions

#### Running For Development

**a. Install dependencies**

```sh
npm install
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

**e. Linting your code while developing**

Linting is dealt with by eslint, jshint and tslint. There are config files for those in the repo. You should install editor plugins to do this easily and automatically for you as you code and save files (e.g. for atom):

```sh
apm install eslint
apm install linter
apm install linter-jshint
apm install linter-eslint
apm install linter-tslint
```

#### Local Docker Deployment

**a. Build the Docker Image**

```sh
docker build -t super-node-starter .
```

**b. Provide a `.env` file (copy the template) and provider you own values**

```sh
cp .env.example .env
```

**c. Run the app**

```sh
docker run -d -P --name web super-node-starter
```
