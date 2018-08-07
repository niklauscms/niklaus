module.exports.register = function (db, datatypes) {
  // eslint-disable-next-line no-param-reassign
  db.User = db.define('nc_user', {
    id: {
      type: datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
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

  db.User.export = u => ({
    ...u,
    password: undefined,
  });
};
