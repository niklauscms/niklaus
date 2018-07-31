// The static admin frontend is served by the "API" in production mode.

const path = require('path');

const express = require('express');

module.exports.register = function (app) {
  const frontendFiles = path.join(__dirname, '..', 'dist', 'frontend');

  const frontendRouter = express.static(frontendFiles);
  const indexRouter = express.static(path.join(frontendFiles, 'index.html'));
  app.use('/', (req, res, next) => {
    const { url } = req;
    if (url === '/') {
      res.status(301).redirect('/admin');
    } else if (url.startsWith('/admin/static')) {
      frontendRouter(req, res, next);
    } else if (url.startsWith('/admin')) {
      indexRouter(req, res, next);
    } else {
      next();
    }
  });
};
