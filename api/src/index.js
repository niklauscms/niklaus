const express = require('express');
const Sequelize = require('sequelize');

const migrations = require('./migrations');
const models = require('./models');
const services = require('./services');

function initializeDatabase() {
  return new Sequelize('sqlite:nikolaus.db');
}

async function main() {
  const app = express();
  app.db = initializeDatabase();

  await migrations.migrateUp(app.db);
  await migrations.seedUp(app.db);

  models.register(app);
  services.register(app);

  // eslint-disable-next-line no-console
  app.listen(8000, () => console.log('Listening on port 3000'));
}

main().catch(e => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
