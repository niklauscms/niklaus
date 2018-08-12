import React from 'react';



const CreatePost = () => (
  <div className="CreatePost">
    <h1>
          Create Post
    </h1>
    <div className="CreatePost__container">
      <div className="CreatePost__field">
        <Form>
          <Input label="Title" type="text">
          <Input label="content" type="textarea">
          <Input label="tags">
          <Button>Create Post</button>
        </Form>
      </div>
    </div>
  </div>
);

export default CreatePost;
