const { makeExporter } = require('./utility');

module.exports.register = function (db, datatypes) {
  // eslint-disable-next-line no-param-reassign
  db.User = db.define('nc_user', {
    id: {
      type: datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: datatypes.STRING,
      allowNull: false,
    },
    name: {
      type: datatypes.STRING,
    },
    password: {
      type: datatypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: datatypes.DATE,
      defaultValue: datatypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: datatypes.DATE,
      defaultValue: datatypes.NOW,
      allowNull: false,
    },
  });

  // eslint-disable-next-line no-param-reassign
  db.User.export = u => ({
    ...makeExporter()(u),
    password: undefined,
  });
};
