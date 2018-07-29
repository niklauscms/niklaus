const assert = require('assert');

const { request } = require('../utility');

const testPost = {
  title: 'My post',
  content: 'My post\'s content',
};

describe('services/posts', () => {
  it('handles POST /posts', async () => {
    const response = await request('/posts', {
      method: 'POST',
      body: testPost,
    });

    assert.deepEqual(response.title, testPost.title, 'title is correct');
    assert.deepEqual(response.content, testPost.content, 'content is correct');
  });

  it('handles GET /post/<id>', async () => {
    const response = await request('/post/1');

    assert.deepEqual(response.title, testPost.title, 'title is correct');
    assert.deepEqual(response.content, testPost.content, 'content is correct');
  });

  it('handles GET /posts', async () => {
    const response = await request('/posts');

    assert.deepEqual(response.length, 1, 'one post returned');
    assert.deepEqual(response[0].title, testPost.title, 'title is correct');
    assert.deepEqual(response[0].content, testPost.content, 'content is correct');
  });
});
