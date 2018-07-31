import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
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

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

function App(props) {
  const { session } = props;

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
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col Main">
            <Route exact path="/" component={Dashboard} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/posts" component={Posts} />
            <Route path="/users" component={Users} />
            <Route path="/users/@:id" component={User} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  session: PropTypes.shape({
    loggedIn: PropTypes.bool,
  }).isRequired,
};

const ConnectedApp = connect(({ session }) => ({ session }))(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
