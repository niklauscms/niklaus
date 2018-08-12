import React from 'react';

const CreatePost = () => (
  <div className="CreatePost">
    <h1>
          Create Post
    </h1>
    <div className="CreatePost__container">
      <div className="CreatePost__field">
        <label htmlFor="title">
              Title
        </label>
        <input />
        <label htmlFor="content">
              Content
        </label>
        <textarea rows="20" />
        <label htmlFor="tags">
              Tags
        </label>
        <input />
      </div>
    </div>
  </div>
);

export default CreatePost;
