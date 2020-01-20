import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const userData = JSON.parse(localStorage.getItem('user'));
const initialState = userData ? { loggedIn: true, userData } : { loggedIn: false };

const userReducer = handleActions(
  {
    [actions.loginSuccess](state, { payload: { user } }) {
      return { loggedIn: true, user };
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

export default combineReducers({ userReducer });
