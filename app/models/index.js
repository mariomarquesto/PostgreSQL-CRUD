const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize( {
  database: "testdb", // Nombre de la base de datos
  username: "postgres",  // Nombre de usuario de la base de datos
  password: "mario123",  // Contraseña de la base de datos
  host: "localhost",     // Host de la base de datos
  dialect: "postgres",   // Tipo de base de datos (PostgreSQL en este caso)
  port: 5433,            // Puerto de la base de datos
  logging: false,        // Desactivar la salida de registros SQL en la consola

  
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
