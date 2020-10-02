const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize: connection,
        modelName: 'User',
        tableName: 'user',
      },
    );
  }

  // static associate(models) {}
}

User.prototype.checkPassword = async function (password) {
  return this.password === password;
};

module.exports = User;
