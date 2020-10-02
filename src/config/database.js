require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  host: process.env.HOST,
  username: process.env.USERNAME || 'postgres',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dialect: process.env.DIALECT,
  storage: './__tests__/database.sqlite',
  port: process.env.DB_PORT,
  logging: false,
  define: {
    timestamps: true,
    underscored: true, // not work (bug)
    underscoredAll: true, // not work (bug)
  },
};
