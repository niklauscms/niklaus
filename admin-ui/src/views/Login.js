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
    // TODO: fill in
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
