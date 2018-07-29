module.exports = {
  up: (queryInterface, datatypes) => queryInterface.createTable('post', {
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
  }),
  down: queryInterface => queryInterface.dropTable('post'),
};
