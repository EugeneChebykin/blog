import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = { articles: [], articlesCount: 0, params: { limit: 10 } };

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
    [actions.editArticleSuccess](state, { payload: { article: newArticle } }) {
      const articles = state.articles.map(article =>
        article.slug === newArticle.slug ? newArticle : article
      );
      return { ...state, articles };
    },
    [actions.addArticleSuccess](state, { payload: { article: newArticle } }) {
      const articles = [...state.articles, newArticle];
      return { ...state, articles };
    },
    [actions.deleteArticleSuccess](state, { payload: { slug } }) {
      const articles = state.srticles.filter(article => article.slug !== slug);
      return { ...state, articles };
    },
    [actions.articlesSuccess](state, { payload: { articles, articlesCount } }) {
      return { ...state, articles, articlesCount };
    },
    [actions.articlesFailure](state) {
      return { ...state, articles: [] };
    },
  },
  initialState
);

export default articlesReducer;
