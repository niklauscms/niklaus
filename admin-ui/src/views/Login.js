import React from 'react';
import { connect } from 'react-redux';

import api from '~/api';
import Button from '~/components/Button';
import Card from '~/components/Card';
import Form from '~/components/Form';
import Input from '~/components/Input';
import { SET_SESSION } from '~/reducers';

export class Login extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { username: '', password: '' };
  }

  async onSubmit() {
    const { username, password } = this.state;
    try {
      const r = await api.post('/session', {
        username,
        password,
      });

      this.props.dispatch({ type: SET_SESSION });
    } catch (e) {
      console.log('error on submit: ', e);
      // Bad request! Bad username must be
    }
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
          <Button primary>
Sign in
          </Button>
        </Form>
      </Card>
    );
  }
}

export default connect()(Login);
