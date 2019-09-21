const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.app__sequelize_host,
  port: parseInt(process.env.app__sequelize_port, 10) || 5432,
  database: process.env.app__database,
  username: process.env.app__database_user,
  password: process.env.app__database_password,
  dialect: 'postgres',
  benchmark: true,
  logging: false,
  define: {
    underscored: true,
    charset: 'utf8',
    timestamps: true,
  },
  pool: {
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

// Define All Models
const models = {
  sequelize,
  Op: sequelize.Op,
  Hotspot: sequelize.import('hotspots', require('./hotspot')),
};

module.exports = models;
