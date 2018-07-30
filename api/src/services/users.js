const bcrypt = require('bcrypt');

const requireSession = require('./utility');

module.exports.register = function (app) {
  app.get('/users', requireSession(app, async (req, res) => {
    const users = await app.db.User.findAll();
    res.json(users.map(app.db.User.export));
  }));

  app.get('/user/:id', requireSession(app,  (req, res) => {
    try {
      const user = await app.db.User.findById(req.params.id);
      res.json(app.db.User.export(user));
    } catch (e) {
      res.status(404).json({ error: 'Not found' });
    }
  }));

  app.post('/users', async (req, res) => {
    function callback(req, res) {
      const { password, username, name } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await app.db.User.create({
        name,
        username,
        password: hashedPassword,
      });

      res.json(app.db.User.export(user));
    }

    const users = await app.db.User.findAll();
    if (users.length) {
      requireSession(app, callback);
      return;
    }

    callback(req, res);
  });
};
