import React from 'react';
import { Link } from 'react-router-dom';

import Table, { IconColumn } from 'react-css-grid-table';

export default function () {
  const columns = [
    {
      value: 'check',
      width: '0.3fr',
      format: check => <IconColumn icon="icon ion-md-checkmark" data={check} />,
      className: 'justify-content-center',
    },
    {
      label: 'User',
      value: 'user',
      width: '2fr',
      format: user => <Link to="/users:id">{user}</Link>,
      className: 'Table__user',
    },
    {
      label: '# Published',
      value: 'numberPublished',
      width: '1fr',
    },
    {
      label: 'Email',
      value: 'email',
      width: '2fr',
    },
    {
      label: 'Permissions',
      value: 'permissions',
      width: '1fr',
    },
    {
      label: 'Actions',
      value: 'actions',
      width: '0.7fr',
      format: multipleData => multipleData.map(
        actions => (
          <span className="Table__action pr-2">
            {actions}
          </span>
        ),
      ),
    },
  ];

  const data = [
    {
      id: 1,
      user: 'Rebecca Park',
      numberPublished: 42,
      email: 'burugirl93@gmail.com',
      permissions: 'Admin, Writer',
      actions: ['Edit', 'More'],
    },
    {
      id: 2,
      user: 'Effie Eaton',
      numberPublished: 3,
      email: 'effie@gmail.com',
      permissions: 'Writer',
      actions: ['Edit', 'More'],
    },
  ];

  return (
    <div className="Users">
      <h1>
        Users
      </h1>
      <Table
        columns={columns}
        data={data}
      />
    </div>
  );
}
