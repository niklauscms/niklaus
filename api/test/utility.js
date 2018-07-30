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
    return JSON.parse(text);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(text);
    return text;
  }
};
