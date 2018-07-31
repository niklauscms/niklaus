import { combineReducers } from 'redux';

function sessionReducer(state, action) {
  return { loggedIn: false };
}

export default combineReducers({
  session: sessionReducer,
});
