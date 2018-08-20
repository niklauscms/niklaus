const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const Sequelize = require('sequelize');

const migrations = require('./migrations');
const models = require('./models');
const services = require('./services');
const frontend = require('./frontend');

function initializeDatabase(connectionString) {
  return new Sequelize(connectionString);
}

function initializeApp(config) {
  const app = express();
  app.db = initializeDatabase(config.db);

  app.use(bodyParser.json());
  app.use(cookieParser());

  // React dev server is used in development, production build is on one server.
  if (!config.isProduction) {
    app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }));
  } else {
    frontend.register(app);
  }

  models.register(app);
  services.register(app);

  return app;
}

module.exports.main = async function (config) {
  const app = initializeApp(config);

  await migrations.migrateUp(app.db);
  await migrations.seedUp(app.db);

  return new Promise((done) => {
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Listening on port ${config.port}`);
      done(app);
    });
  });
};

if (process.env.NODE_ENV !== 'test') {
  const config = {
    db: 'sqlite:nikolaus.db',
    port: 8000,
  };

  module.exports.main(config).catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  });
}
