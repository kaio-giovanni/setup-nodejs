## Base Setup for nodejs Applications

- Basic setup of a NodeJS project with javascript, ESLint and Prettier for code standardization and formatting, Jest for tests and sqlite as a test bank, and Sequelize as ORM using the Postgres database.

## Run

- `yarn dev`

## Run Tests

- `yarn test`

## Tutorial

### Initialize project

- Create Project => `mkdir project-name` and `cd project-name`
- Initialize Project => `yarn init`

### ESLint, Prettier

- Install Plugins on VScode => `ESLint` and `Prettier - Code Formatter`
- Enable Format on Save => `Ctrl + SHIFT + p` and enable 'Format on Save'
- Install devDependecies => `yarn add -D eslint eslint-config-prettier eslint-plugin-prettier prettier`
- Set Prettier Configs => Create file `.prettierrc.json` and add properties
- Initialize ESLint => `yarn run eslint --init`

### Sequelize

- Install Sequelize and Postgres => `yarn add sequelize pg pg-hstore`
- Install sequelize-cli => `yarn add -D sequelize-cli`
- Create file `.sequelizerc` and set configuration

### Jest

- Install jest => `yarn add -D jest`
- Execute `jest --init`
