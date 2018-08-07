module.exports.register = function (db, datatypes) {
  // eslint-disable-next-line no-param-reassign
  db.Post = db.define('nc_post', {
    id: {
      type: datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: datatypes.TEXT,
    },
    content: {
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
    publishedAt: {
      type: datatypes.DATE,
      defaultValue: datatypes.NOW,
      allowNull: false,
    },
    publishedBy: {
      type: datatypes.INTEGER,
      references: {
        model: 'nc_user',
        key: 'id',
      },
    },
    revision: {
      type: datatypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    revisionParent: {
      type: datatypes.INTEGER,
      references: {
        model: 'nc_posts',
        key: 'id',
      },
    },
  });

  // eslint-disable-next-line no-param-reassign
  db.Post.export = a => a;
};
