import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="Signin">
        <h4>
Sign in
        </h4>
        <label>
Email
        </label>
        <input />
        <label>
Password
        </label>
        <input type="password" />
        <button className="Signin__submit">
Sign in
        </button>
      </div>
    );
  }
}
