import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const errorsReducer = handleActions(
  {
    [actions.loginSuccess]() {
      return '';
    },
    [actions.registrSuccess]() {
      return '';
    },
    [actions.loginFailure](state, { payload: { errors } }) {
      return errors;
    },
    [actions.registrFailure](state, { payload: { errors } }) {
      return errors;
    },
    [actions.editArticleFailure](state, { payload, payload: { errors } }) {
      return errors || payload;
    },
    [actions.addArticleFailure](state, { payload, payload: { errors } }) {
      return errors || payload;
    },
    [actions.deleteArticleFailure](state, { payload, payload: { errors } }) {
      return errors || payload;
    },
  },
  {}
);

export default errorsReducer;
