module.exports.register = function (db, datatypes) {
  // eslint-disable-next-line no-param-reassign
  db.Post = db.define('post', {
    id: {
      type: datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: datatypes.BLOB,
    },
    content: {
      type: datatypes.BLOB,
    },
  }, {
    tableName: 'post',
  });

  // eslint-disable-next-line no-param-reassign
  db.Post.export = ({ dataValues: p }) => ({
    ...p,
    title: p.title.toString(),
    content: p.content.toString(),
  });
};
