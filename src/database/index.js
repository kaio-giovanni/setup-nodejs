const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const ModelUser = require('../models/User');

class Connection {
  static conn = null;

  static modelDefiners = [ModelUser];

  /**
   * Get connection database
   */
  static getInstance() {
    if (Connection.conn === null || Connection.conn === undefined) {
      Connection.conn = new Sequelize(dbConfig);
      Connection.assertDatabaseConnectionOk();
      Connection.initModels(Connection.modelDefiners);
      // Connection.associateModels(Connection.modelDefiners);
    }
    return Connection.conn;
  }

  /**
   * Checks the database connection
   */
  static async assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
      await Connection.conn.authenticate();
      console.log('Database connection OK!');
    } catch (error) {
      console.error('Unable to connect to the database:');
      console.error(error.message);
      process.exit(1);
    }
  }

  /**
   * Initializes models
   * @param { Model } modelDefiners A list of models
   */
  static initModels(modelDefiners) {
    modelDefiners.forEach((item) => {
      item.init(Connection.conn);
    });
  }

  /**
   * Defines model associations
   * @param { Model } modelDefiners A list of models
   */
  static associateModels(modelDefiners) {
    modelDefiners.forEach((item) => {
      item.associate(Connection.conn);
    });
  }
}

module.exports = Connection.getInstance();
