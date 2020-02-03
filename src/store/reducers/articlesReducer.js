import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = { articles: [], articlesCount: 0, isLoading: false, params: { limit: 10 } };

const articlesReducer = handleActions(
  {
    [actions.setArticlesParams](state, { payload: { params } }) {
      return { ...state, params };
    },
    [actions.setFavoriteSuccess](state, { payload: { article: newArticle } }) {
      const articles = state.articles.map(article =>
        article.slug === newArticle.slug ? newArticle : article
      );
      return { ...state, articles };
    },
    [actions.unsetFavoriteSuccess](state, { payload: { article: newArticle } }) {
      const articles = state.articles.map(article =>
        article.slug === newArticle.slug ? newArticle : article
      );
      return { ...state, articles };
    },
    [actions.editArticleRequest](state) {
      return { ...state, isLoading: true };
    },
    [actions.editArticleSuccess](state, { payload: { article: newArticle } }) {
      const articles = state.articles.map(article =>
        article.slug === newArticle.slug ? newArticle : article
      );
      return { ...state, articles, isLoading: false };
    },
    [actions.addArticleRequest](state) {
      return { ...state, isLoading: true };
    },
    [actions.addArticleSuccess](state, { payload: { article: newArticle } }) {
      const articles = [...state.articles, newArticle];
      return { ...state, articles, isLoading: false };
    },
    [actions.deleteArticleSuccess](state, { payload: { slug } }) {
      const articles = state.articles.filter(article => article.slug !== slug);
      return { ...state, articles };
    },
    [actions.articlesRequest](state) {
      return { ...state, isLoading: true };
    },
    [actions.articlesSuccess](state, { payload: { articles, articlesCount } }) {
      return { ...state, articles, articlesCount, isLoading: false };
    },
    [actions.articlesFailure](state) {
      return { ...state, articles: [] };
    },
  },
  initialState
);

export default articlesReducer;
