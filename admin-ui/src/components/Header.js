import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function () {
  return (
    <header className="Header">
      <div className="row align-center">
        <Link className="Header__link col col-auto" activeStyle={{ color: 'red' }} to="/">
          Dashboard
        </Link>
        <Link className="Header__link col col-auto" to="/posts">
          Posts
        </Link>
        <Link className="Header__link col col-auto" to="/users">
          Users
        </Link>
        <Link className="Header__link col col-auto" to="/settings">
          Settings
        </Link>
        <div className="col">
          <div className="Header__user row">
            <div className="Header__blogName">
              Cakes by Rebecca
              <span className="icon ion-ios-arrow-down" />
            </div>
            <Link className="Header__createPost" to="/create-post">
              Create Post
            </Link>
            <div
              className="Header__profilePicture"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
