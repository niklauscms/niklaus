import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

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

const App = connect(({ session }) => { session })((props) => {
  return (
    <React.Fragment>
      {props.session && <Header />}
      <div className="container">
        <div className="row">
          <div className="col Main">
            <Route exact path="/" component={Dashboard} />
            <Route path="/create-post" component={Login} />
            <Route path="/posts" component={Posts} />
            <Route path="/users" component={Users} />
            <Route path="/users/@:id" component={User} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
