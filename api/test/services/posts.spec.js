const assert = require('assert');

const { login, logout, request } = require('./utility');

const testPost = {
  title: 'My post',
  content: 'My post\'s content',
};

describe('services/posts', () => {
  let cookie;

  beforeEach(async () => {
    cookie = await login();
  });

  afterEach(logout);

  it('handles POST /post', async () => {
    const { json: response } = await request('/post', {
      method: 'POST',
      body: testPost,
      headers: { cookie },
    });

    assert.equal(response.title, testPost.title, 'title is correct');
    assert.equal(response.content, testPost.content, 'content is correct');
  });

  it('handles GET /post/<id>', async () => {
    const { json: response } = await request('/post/1', { headers: { cookie } });

    assert.equal(response.title, testPost.title, 'title is correct');
    assert.equal(response.content, testPost.content, 'content is correct');
  });

  it('handles GET /posts', async () => {
    const { json: response } = await request('/posts', { headers: { cookie } });

    assert.equal(response.length, 1, 'one post returned');
    assert.equal(response[0].title, testPost.title, 'title is correct');
    assert.equal(response[0].content, testPost.content, 'content is correct');
  });
});
