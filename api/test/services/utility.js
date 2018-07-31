const fetch = require('node-fetch');

module.exports.request = async function (endpoint, config = {}) {
  const url = `http://localhost:${global.app.config.port}${endpoint}`;

  const { headers = {} } = config;
  let { body } = config;
  if (body) {
    body = JSON.stringify(body);
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    ...config,
    headers,
    body,
  });

  const text = await response.text();

  try {
    response.json = JSON.parse(text);
    return response;
  } catch (e) {
    throw new Error(text);
  }
};

const DEFAULT_USER = {
  username: 'test-user',
  password: 'test-pass',
  name: 'Test User',
};

module.exports.login = async function () {
  try {
    await module.exports.request('/user', {
      method: 'POST',
      body: DEFAULT_USER,
    });
  } catch (e) { /* ignore */ }

  const response = await module.exports.request('/session', {
    method: 'POST',
    body: DEFAULT_USER,
  });

  return response.headers.get('set-cookie');
};

module.exports.logout = function () {
  return module.exports.request('/session', { method: 'DELETE' });
};
