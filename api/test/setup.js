const fs = require('fs');

const index = require('../src');

const DB = 'nikolaus_test.db';

function dropDb() {
  try {
    fs.unlinkSync(DB);
  } catch (e) { /* do nothing */ }
}

before(async () => {
  dropDb();

  const config = {
    db: `sqlite:${DB}`,
    port: 8001,
  };

  global.app = await index.main(config);
  global.app.config = config;
});

after(dropDb);
