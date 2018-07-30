const bcrypt = require('bcrypt');

const SESSION_AGE = 1000 * 60 * 120; // 2 Hours

module.exports.register = function (app) {
  app.post('/session', async (req, res) => {
    function unauthorized() {
      req.status(401).json({ error: 'Invalid username or password' });
    }

    const { password, username } = req.body;

    if (!password || !username) {
      unauthorized();
      return;
    }

    const users = await app.db.User.find({ username });

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
      userId: user.id,
      expiresIn: SESSION_AGE,
    });

    const options = { maxAge: SESSION_AGE, httpOnly: true };

    res.cookie('sessionId', id, options).sendStatus(200);
  });
};
