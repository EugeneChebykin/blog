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

export const articlesRequest = createAction('ARTICLES_REQUEST');
export const articlesSuccess = createAction('ARTICLES_SUCCESS');
export const articlesFailure = createAction('ARTICLES_FAILURE');

export const editArticleRequest = createAction('EDIT_ARTICLE_REQUEST');
export const editArticleSuccess = createAction('EDIT_ARTICLE_SUCCESS');
export const editArticleFailure = createAction('EDIT_ARTICLE_FAILURE');

export const deleteArticleRequest = createAction('DELETE_ARTICLE_REQUEST');
export const deleteArticleSuccess = createAction('DELETE_ARTICLE_SUCCESS');
export const deleteArticleFailure = createAction('DELETE_ARTICLE_FAILURE');

export const addArticleRequest = createAction('ADD_ARTICLE_REQUEST');
export const addArticleSuccess = createAction('ADD_ARTICLE_SUCCESS');
export const addArticleFailure = createAction('ADD_ARTICLE_FAILURE');

export const setFavoriteRequest = createAction('SET_FAVORITE_REQUEST');
export const setFavoriteSuccess = createAction('SET_FAVORITE_SUCCESS');
export const setFavoriteFailure = createAction('SET_FAVORITE_FAILURE');

export const unsetFavoriteRequest = createAction('UNSET_FAVORITE_REQUEST');
export const unsetFavoriteSuccess = createAction('UNSET_FAVORITE_SUCCESS');
export const unsetFavoriteFailure = createAction('UNSET_FAVORITE_FAILURE');

export const changePage = createAction('CHANGE_CURRENT_PAGE');
export const setArticlesParams = createAction('SET_ARTICLES_PARAMS');

export const setFavoriteAction = slug => async dispatch => {
  dispatch(setFavoriteRequest());
  try {
    const article = await API.setFavorite(slug);
    dispatch(setFavoriteSuccess({ article }));
  } catch (err) {
    dispatch(setFavoriteFailure(err.response.data));
  }
};

export const unsetFavoriteAction = slug => async dispatch => {
  dispatch(unsetFavoriteRequest());
  try {
    const article = await API.unsetFavorite(slug);
    dispatch(unsetFavoriteSuccess({ article }));
  } catch (err) {
    dispatch(unsetFavoriteFailure(err.response.data));
  }
};

export const changePageAction = pageNumber => async dispatch => {
  dispatch(changePage({ pageNumber }));
};

export const setArticlesParamsAction = params => async dispatch => {
  dispatch(setArticlesParams({ params }));
};

export const addArticleAction = body => async dispatch => {
  dispatch(addArticleRequest());
  try {
    const article = await API.addArticle(body);
    dispatch(addArticleSuccess({ article }));
    history.push(`/articles/${article.slug}`);
  } catch (err) {
    dispatch(addArticleFailure(err.response.data));
  }
};

export const deleteArticleAction = slug => async dispatch => {
  dispatch(deleteArticleRequest());
  try {
    await API.deleteArticle(slug);
    dispatch(deleteArticleSuccess({ slug }));
  } catch (err) {
    dispatch(deleteArticleFailure(err.response.data));
  }
};

export const editArticleAction = (slug, body) => async dispatch => {
  dispatch(editArticleRequest());
  try {
    const article = await API.editArticle(slug, body);
    dispatch(editArticleSuccess({ article }));
    history.push(`/articles/${slug}`);
  } catch (err) {
    dispatch(editArticleFailure(err.response.data));
  }
};

export const loginAction = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await API.login(user);
    dispatch(loginSuccess({ user: response }));
    history.push('/home');
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};

export const registrAction = user => async dispatch => {
  dispatch(registrRequest());
  try {
    const response = await API.registration(user);
    dispatch(registrSuccess({ user: response }));
    history.push('/login');
  } catch (err) {
    dispatch(registrFailure(err.response.data));
  }
};

export const articlesAction = params => async dispatch => {
  dispatch(articlesRequest());
  try {
    dispatch(setArticlesParams({ params }));
    const { articles, articlesCount } = await API.getArticles(params);
    dispatch(articlesSuccess({ articles, articlesCount }));
  } catch (err) {
    dispatch(articlesFailure(err.response.data));
  }
};
