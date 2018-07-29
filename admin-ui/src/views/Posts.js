import React from 'react';
import Table, { IconColumn } from 'react-css-grid-table';

async function request(endpoint) {
  const response = await fetch(`http://localhost:8000/${endpoint}`);
  return response.json();
}

export default class extends React.Component {
  constructor() {
    super();

    this.state = { posts: [] };
  }

  async componentDidMount() {
    const posts = await request('posts');
    this.setState({ posts });
  }

  render() {
    const columns = [
      {
        value: 'check',
        width: '0.3fr',
        format: data => <IconColumn icon="icon ion-md-checkmark" data={data} />,
        className: 'justify-content-center',
      },
      { label: 'Title', value: 'title', width: '2fr' },
      { label: 'Published Date', value: 'publishedDate', width: '1fr' },
      { label: 'Published By', value: 'publishedBy', width: '1fr' },
      { label: 'Last Modified', value: 'updatedAt', width: '1fr' },
      {
        value: 'comments',
        width: '0.5fr',
        format: data => <IconColumn icon="icon ion-ios-chatbubbles-outline" data={data} />,
      },
      {
        value: 'hearts',
        width: '0.5fr',
        format: data => <IconColumn icon="icon ion-ios-heart-outline" data={data} />,
      },
    ];

    const { posts: data } = this.state;

    return (
      <div className="Posts">
        <h1>
          Posts
        </h1>
        <Table
          columns={columns}
          data={data}
        />
      </div>
    );
  }
}
