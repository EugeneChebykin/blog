import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = { currentPage: 1, pageSize: 10 };

const pageSettingsReducer = handleActions(
  {
    [actions.changePage](state, { payload: { pageNumber } }) {
      return { ...state, currentPage: pageNumber };
    },
  },
  initialState
);

export default pageSettingsReducer;
