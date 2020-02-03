import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { loggedIn: true, isLoading: false, user }
  : { loggedIn: false, isLoading: false };

const userReducer = handleActions(
  {
    [actions.loginRequest](state) {
      return { ...state, isLoading: true };
    },
    [actions.loginSuccess](state, { payload: { userData } }) {
      return { isLoading: false, loggedIn: true, user: userData };
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
