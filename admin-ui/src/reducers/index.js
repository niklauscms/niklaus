const SESSION_DEFAULT = { loggedIn: false }; 

export const DROP_SESSION = Symbol('DROP_SESSION');
export const SET_SESSION = Symbol('SET_SESSION');

function sessionReducer(state = SESSION_DEFAULT, action) {
  switch (action.type) {
    case SET_SESSION:
      return { loggedIn: true };
    case DROP_SESSION:
      return SESSION_DEFAULT;
    default:
      return state;
  }
}

export default {
  session: sessionReducer,
};
