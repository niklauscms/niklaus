const assert = require('assert');

const { login, logout, request } = require('./utility');

const testUser = {
  username: 'test@gmail.com',
  name: 'Test User',
  password: 'test password',
};

describe('services/users', () => {
  let cookie;

  beforeEach(async () => {
    cookie = await login();
  });

  afterEach(logout);

  it('handles POST /user', async () => {
    const { json: response } = await request('/user', {
      method: 'POST',
      body: testUser,
      headers: { cookie },
    });

    assert.equal(response.username, testUser.username, 'username is correct');
    assert.equal(response.name, testUser.name, 'name is correct');
    assert.equal(response.password, undefined, 'password is not set');
  });
});
