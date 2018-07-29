import React from 'react';
import Table, { IconColumn } from 'react-css-grid-table';

export default function () {
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
    { label: 'Last Modified', value: 'lastModified', width: '1fr' },
    {
      value: 'comments',
      width: '0.5fr',
      body: data => <IconColumn icon="icon ion-ios-chatbubbles-outline" data={data} />,
    },
    {
      value: 'hearts',
      width: '0.5fr',
      body: data => <IconColumn icon="icon ion-ios-heart-outline" data={data} />,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Carrot cake with a twist',
      publishedDate: 'Feb 10, 2017,',
      publishedBy: 'Rebecca Park',
      lastModified: '22 seconds ago',
      comments: 22,
      hearts: 10,
    },
    {
      id: 2,
      title: 'Green tea rice cake',
      publishedDate: 'Nov 27, 2017',
      publishedBy: 'Mumu Eaton',
      lastModified: '1 day ago',
      comments: 13,
      hearts: 11,
    },
  ];

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
