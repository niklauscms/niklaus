const datatypes = require('sequelize');

const post = require('./post');
const session = require('./session');
const tag = require('./tag');
const user = require('./user');

module.exports.register = function (app) {
  post.register(app.db, datatypes);
  session.register(app.db, datatypes);
  user.register(app.db, datatypes);
  tag.register(app.db, datatypes);
};
