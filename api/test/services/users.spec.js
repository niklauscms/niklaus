const assert = require('assert');

const { request } = require('../utility');

const testUser = {
  email: 'test@gmail.com',
  name: 'Test User',
  password: 'test password',
};

describe('services/users', () => {
  it('handles POST /user', async () => {
    const response = await request('/user', {
      method: 'POST',
      body: testUser,
    });

    assert.equal(response.email, testUser.email, 'email is correct');
    assert.equal(response.name, testUser.name, 'name is correct');
    assert.equal(response.password, undefined, 'password is not set');
  });
});
