import { createAction } from 'redux-actions';
import * as API from '../../api';
import history from '../../history';

export const loginRequest = createAction('USER_LOGIN_REQUEST');
export const loginSuccess = createAction('USER_LOGIN_SUCCESS');
export const loginFailure = createAction('USER_LOGIN_FAILURE');

export const logout = createAction('USER_LOGOUT');

export const registrRequest = createAction('USER_REGISTR_REQUEST');
export const registrSuccess = createAction('USER_REGISTR_SUCCESS');
export const registrFailure = createAction('USER_REGISTR_FAILURE');

export const loginAction = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await API.login(user);
    dispatch(loginSuccess({ user: response }));
    history.push('/home');
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const registrAction = user => async dispatch => {
  dispatch(registrRequest());
  try {
    const response = await API.registration(user);
    dispatch(registrSuccess({ user: response }));
    history.push('/login');
  } catch (err) {
    dispatch(registrFailure(err));
  }
};
