const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');

const SESSION_AGE = 1000 * 60 * 120; // 2 Hours

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
    
    console.log(req.body);
    
    const { password, username } = req.body;

    if (!password || !username) {
      unauthorized();
      console.log('here1');
      return;
    }

    const users = await app.db.User.findAll({ where: { username } });

    if (!users.length) {
      unauthorized();
      console.log('here2');
      return;
    }

    const [user] = users;
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      unauthorized();
      console.log('here3');
      return;
    }

    const { id } = await app.db.Session.create({
      id: uuidv4(),
      userId: user.id,
      expiresIn: SESSION_AGE,
    });
    console.log('here4');

    const options = { maxAge: SESSION_AGE, httpOnly: true };
   
    console.log('here5');
    res.cookie('sessionId', id, options).json({});
    console.log('login successful');
  });
};
