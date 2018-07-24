const express = require('express');
const Sequelize = require('sequelize');

const migrations = require('./migrations');
const models = require('./models');
const services = require('./services');

function initializeDatabase() {
  return new Sequelize('sqlite:nikolaus.db');
}

function main() {
  const app = express();
  app.db = initializeDatabase();

  migrations.migrateUp(app.db);
  migrations.seedUp(app.db);

  models.register(app);
  services.register(app);

  // eslint-disable-next-line no-console
  app.listen(3000, () => console.log('Listening on port 3000'));
}

main();
