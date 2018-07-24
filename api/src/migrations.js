const path = require('path');

const Umzug = require('umzug');

module.exports.addColumnMigration = function (table, column, description) {
  return {
    up: (queryInterface) =>
      queryInterface.addColumn(table, column, description),
    down: (queryInterface) =>
      queryInterface.removeColumn(table, column),
  };
};

function getMigrator(sequelize, path) {
  return new Umzug({
    storage: 'sequelize',
    storageOptions: {
      sequelize,
    },
    migrations: {
      params: [sequelize.getQueryInterface(), sequelize.constructor, function() {
        throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
      }],
      path,
      pattern: /\.js$/,
    },
  });
}

const migrator = (sequelize) => getMigrator(sequelize, path.join(__dirname, '..', 'migrations'));

module.exports.migrateUp = function (sequelize) {
  return migrator(sequelize).up();
};

module.exports.migrateDown = function (sequelize) {
  return migrator(sequelize).down();
};

const seeder = (sequelize) => getMigrator(sequelize, path.join(__dirname, '..', 'migrations', 'seeders'), undefined);

module.exports.seedUp = function (sequelize) {
  return seeder(sequelize).up();
};

module.exports.migrateDown = function (sequelize) {
  return seeder(sequelize).down();
};
