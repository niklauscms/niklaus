module.exports.register = function (app) {
  app.get('/posts', async (req, res) => {
    const posts = await app.db.Post.findAll();
    res.json(posts.map(app.db.Post.export));
  });

  app.get('/post/:id', async (req, res) => {
    try {
      const post = await app.db.Post.findById(req.params.id);
      res.json(app.db.Post.export(post));
    } catch (e) {
      res.sendStatus(404);
    }
  });

  app.post('/posts', async (req, res) => {
    const post = await app.db.Post.create({
      id: 0,
      title: req.body.title,
      content: req.body.content,
    });

    res.json(post);
  });
};
