const datatypes = require('sequelize');

const post = require('./post');
const session = require('./session');
const user = require('./user');

module.exports.register = function (app) {
  post.register(app.db, datatypes);
  session.register(app.db, datatypes);
  user.register(app.db, datatypes);
};
