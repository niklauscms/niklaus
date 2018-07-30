const { makeExporter } = require('./utility');

module.exports.register = function (db, datatypes) {
  // eslint-disable-next-line no-param-reassign
  db.Session = db.define('nc_session', {
    id: {
      type: datatypes.UUID,
      primaryKey: true,
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
    userId: {
      type: datatypes.INTEGER,
      references: {
        model: 'nc_users',
        key: 'id',
      },
    },
  });

  // eslint-disable-next-line no-param-reassign
  db.Session.export = makeExporter();
};
