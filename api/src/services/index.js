const posts = require('./posts');
const sessions = require('./sessions');
const users = require('./users');

module.exports.register = function (app) {
  posts.register(app);
  sessions.register(app);
  users.register(app);
};
