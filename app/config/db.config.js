const { Sequelize } = require('sequelize');

module.exports = {
  database: "testdb",
  username: "postgres",
  password: "mario123",
  host: "localhost",
  dialect: "postgres",
  port: 5433,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
