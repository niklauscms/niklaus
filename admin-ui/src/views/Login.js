import React from 'react';

import Button from '~/components/Button';
import Card from '~/components/Card';
import Form from '~/components/Form';
import Input from '~/components/Input';

export default class extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { username: '', password: '' };
  }

  onSubmit() {
    const aaa = fetch('http://localhost:8000/session', {
      method: 'POST',
      body: JSON.stringify({
        username: 'niklaus',
        password: 123456,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {console.log(res.json()); return false}).catch(error => console.error('Error': error)).then(response => console.log('Success: ', response));
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <Card title="Sign in">
        <Form onSubmit={this.onSubmit}>
          <Input
            value={username}
            label="Username"
            name="username"
            onChange={this.onChange}
          />
          <Input
            value={password}
            label="Password"
            type="password"
            name="password"
            onChange={this.onChange}
          />
          <Button primary>Sign in</Button>
        </Form>
      </Card>
    );
  }
}
