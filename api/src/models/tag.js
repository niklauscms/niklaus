module.exports.register = function (db, datatypes) {
  // eslint-disable-next-line no-param-reassign
  db.Tag = db.define('nc_tag', {
    id: {
      type: datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: datatypes.TEXT,
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
  db.Tag.export = a => a;
};
