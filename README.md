## Base Setup for nodejs Applications

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
