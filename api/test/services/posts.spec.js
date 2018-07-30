const assert = require('assert');

const { request } = require('../utility');

const testPost = {
  title: 'My post',
  content: 'My post\'s content',
};

describe('services/posts', () => {
  it('handles POST /post', async () => {
    const response = await request('/post', {
      method: 'POST',
      body: testPost,
    });

    assert.equal(response.title, testPost.title, 'title is correct');
    assert.equal(response.content, testPost.content, 'content is correct');
  });

  it('handles GET /post/<id>', async () => {
    const response = await request('/post/1');

    assert.equal(response.title, testPost.title, 'title is correct');
    assert.equal(response.content, testPost.content, 'content is correct');
  });

  it('handles GET /posts', async () => {
    const response = await request('/posts');

    assert.equal(response.length, 1, 'one post returned');
    assert.equal(response[0].title, testPost.title, 'title is correct');
    assert.equal(response[0].content, testPost.content, 'content is correct');
  });
});
