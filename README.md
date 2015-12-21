## node-starter

[![Code Climate](https://codeclimate.com/repos/567779db7df1497f6c004c1d/badges/e873373aad89c2eca43e/gpa.svg)](https://codeclimate.com/repos/567779db7df1497f6c004c1d/feed) [![Circle CI](https://circleci.com/gh/Stephn-R/super-node-starter.svg?style=svg&circle-token=15cb369d08b433d47648e998cf8eac8e369ca858)](https://circleci.com/gh/Stephn-R/super-node-starter) [![dependencies](https://david-dm.org/stephn-r/super-node-starter.svg)](https://david-dm.org/stephn-r/super-node-starter) [![devDependencies](https://david-dm.org/stephn-r/super-node-starter/dev-status.svg)](https://david-dm.org/stephn-r/super-node-starter#info=devDependencies)

A complete NodeJS starter template. This template is designed to give any NodeJS project an extreme running start that includes some of the most common features vital to the Client/Server relationship model while providing various other tools, and resources for quickly building out any part of the server development stack.

Please refer to the [CONTRIBUTING.md](https://github.com/stephn-r/super-node-starter/blob/master/CONTRIBUTING.md) doc for any questions, concerns, or suggestions

#### Getting Started

1. Install Modules

```sh
npm install
```

2. Export the Node Environment on the system environment variables

```sh
export NODE_ENV=development
```

3. Provide a `.env` file (copy the template)

```sh
cp .env.example .env
```

4. Run the app

```sh
npm start
```

Below is a list of all the supported features. Refer to the [Wiki](https://github.com/stephn-r/super-node-starter/wiki) for more information on how to use them along with configuration options:

#### Middleware Tools
1. Application Logging using Winston
2. CORS Security Headers
3. PassportJS for Session Management
4. Cookie Modules for Session Management using Cookies
5. Reading Cookies in the Request
6. HTTP Method Overriding for customer headers
7. Body Parsing to provide all content as JSON in `req` object

#### Server Side Tools
1. Sample Web Filter
2. Sample Response Handler with HTTP Status Codes
3. Basic Folder Structure to support easy Table Management for Knex.js
4. Configuration Management for multiple environments (i.e. Development/Staging/Production)
5. KnexJS for SQL query building + connecting to relational DBs
6. Foreman for managing multiple NodeJS processes

#### Code Quality Tools
1. Basic CodeClimate yaml file
2. Basic CircleCI yaml file
3. ESLint Config File to manage code consistency
4. Editor Config File to enforce code indentation
5. Git dotfiles to better manage git history
6. Apiary for API Documentation tracking

#### Additional
1. Basic CRON Job template
2. Gulp for task management + additional tasks for:
	a. Linting the project
	b. Detecting vulnerable modules in `package.json`
	c. Building JSDoc library
