import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

const userReducer = handleActions(
  {
    [actions.loginSuccess](state, { payload: { userData } }) {
      return { loggedIn: true, user: userData };
    },
    [actions.loginFailure]() {
      return { loggedIn: false };
    },
    [actions.logout]() {
      localStorage.removeItem('user');
      return { loggedIn: false };
    },
  },
  initialState
);

export default userReducer;
