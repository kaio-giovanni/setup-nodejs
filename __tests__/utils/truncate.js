const sequelize = require('../../src/database/index');

module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map((key) => {
      console.log('Truncate');
      return sequelize.models[key].destroy({ truncate: true, force: true });
    }),
  );
};
