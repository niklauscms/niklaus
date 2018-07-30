const SESSION_AGE = 1000 * 60 * 120; // 2 Hours

module.exports.register = function (app) {
  app.post('/session', async (req, res) => {
    const { password, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const users = await app.db.User.find({ username });

    if (users.length) {
      const [user] = users;
      const { id } = await app.db.Session.create({
        userId: user.id,
        expiresIn: SESSION_AGE,
      });

      const options = { maxAge: SESSION_AGE, httpOnly: true };
      res.cookie('sessionId', id, options).sendStatus(200);
    } else {
      req.status(401).json({ error: 'Invalid username or password' });
    }
  });
};
