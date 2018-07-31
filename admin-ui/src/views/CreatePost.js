import React from 'react';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div class="CreatePost">
        <h1>Create Post</h1>
        <div className="CreatePost__container">
          <div className="CreatePost__field">
            <label>Title</label>
            <input />
            <label>Content</label>
            <textarea rows='20' />
            <label>Tags</label>
            <input />
          </div>
        </div>
      </div>
    );
  }
}
