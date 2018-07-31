import { combineReducers } from 'redux';

function sessionReducer() {
  return { loggedIn: false };
}

export default combineReducers({
  session: sessionReducer,
});
