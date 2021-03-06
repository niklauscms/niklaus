module.exports = {
  up: async (queryInterface, datatypes) => {
    await queryInterface.createTable('nc_users', {
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

    await queryInterface.createTable('nc_sessions', {
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

    await queryInterface.createTable('nc_posts', {
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
      publishedAt: {
        type: datatypes.DATE,
        defaultValue: datatypes.NOW,
        allowNull: false,
      },
      publishedBy: {
        type: datatypes.INTEGER,
        references: {
          model: 'nc_users',
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
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('nc_posts');
    await queryInterface.dropTable('nc_users');
  },
};
