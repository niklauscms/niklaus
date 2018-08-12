import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import CreatePost from './views/CreatePost';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Posts from './views/Posts';
import Users from './views/Users';
import User from './views/User';
import Settings from './views/Settings';
import './scss/index.scss';
import reducers from './reducers';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  connectRouter(history)(combineReducers(reducers)),
  {},
  applyMiddleware(middleware),
);

function App({ session }) {
  if (!session.loggedIn) {
    return (
      <div className="row">
        <div className="col Main">
          <Login />
        </div>
      </div>
    );
  }

  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col Main">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/posts/create" component={CreatePost} />
                <Route path="/posts" component={Posts} />
                <Route path="/users" component={Users} />
                <Route path="/user/@:id" component={User} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    </ConnectedRouter>
  );
}

const ConnectedApp = connect(({ session }) => ({ session }))(App);

App.propTypes = {
  session: PropTypes.shape({
    loggedIn: PropTypes.bool,
  }).isRequired,
};

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'),
);
