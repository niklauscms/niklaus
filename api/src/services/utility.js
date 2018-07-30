module.exports.requireSession = (app, callback) => async (req, res) => {
  function unauthorized() {
    res.status(403).json({ error: 'Unauthorized request' });
  }

  const { sessionId } = req.cookies || {};
  if (!sessionId) {
    unauthorized();
    return;
  }

  const sessions = await app.db.Session.findAll({
    where: { id: sessionId },
  });

  if (!sessions.length) {
    unauthorized();
    return;
  }

  const [session] = sessions;
  if (new Date() > new Date(session.createdAt) + session.expires) {
    unauthorized();
    return;
  }

  callback(req, res);
};
