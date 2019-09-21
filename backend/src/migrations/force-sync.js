require('dotenv').config();
const { Client } = require('pg');
const models = require('../models');

const client = new Client({
  host: process.env.app__sequelize_host,
  port: parseInt(process.env.app__sequelize_port, 10),
  database: process.env.app__database,
  username: process.env.app__database_user,
  password: process.env.app__database_password,
});

const force = process.env.NODE_ENV !== 'production';

client
  .connect()
  .then(() => client.query(`CREATE DATABASE "${process.env.app__database}"`))
  .catch(() => true)
  .then(() => client.end())
  .then(() => models.sequelize.sync({ force }))
  .then(() => console.log('Database Force Sync - Done'))
  .catch(console.error)
  .then(() => process.exit());
