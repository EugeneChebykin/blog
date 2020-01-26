import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import pageSettingsReducer from './pageSettingsReducer';
import errorsReducer from './errorsReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  errors: errorsReducer,
  articles: articlesReducer,
  pageSettings: pageSettingsReducer,
});
