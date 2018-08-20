const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');

const SESSION_AGE = 1000 * 60 * 60 * 2; // 2 Hours

module.exports.register = function (app) {
  app.delete('/session', async (req, res) => {
    const { sessionId } = req.cookies;

    if (!sessionId) {
      res.json({});
      return;
    }

    try {
      await app.db.Session.update(
        { expires: 0 },
        { where: { id: sessionId } },
      );
    } catch (e) { /* do nothing */ }

    res.json({});
  });

  app.post('/session', async (req, res) => {
    function unauthorized() {
      res.status(401).json({ error: 'Invalid username or password' });
    }

    const { password, username } = req.body;

    if (!password || !username) {
      unauthorized();
      return;
    }

    const users = await app.db.User.findAll({ where: { username } });

    if (!users.length) {
      unauthorized();
      return;
    }

    const [user] = users;
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      unauthorized();
      return;
    }

    const { id } = await app.db.Session.create({
      id: uuidv4(),
      userId: user.id,
      expiresIn: SESSION_AGE,
    });

    const options = { maxAge: SESSION_AGE, httpOnly: true };

    res.cookie('sessionId', id, options).json({});
  });
};
