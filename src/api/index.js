import axios from 'axios';

const { token } = JSON.parse(localStorage.getItem('user')) || {};
const AuthorizationHeader = token ? { Authorization: `Token ${token}` } : {};

const api = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
  headers: { ...AuthorizationHeader, 'Content-type': 'application/json' },
});

export const login = async user => {
  const body = JSON.stringify({ user });
  const response = await api.post('/users/login', body);
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data.user;
};
export const registration = async user => {
  const body = JSON.stringify({ user });
  const response = await api.post('/users', body);
  return response.data.user;
};

export const getArticles = async params => {
  const response = await api.get('/articles', { params });
  return response.data;
};

export const getOneArticle = async slug => {
  const response = await api.get(`/articles/${slug}`);
  const {
    data: { article },
  } = response;
  return article;
};

export const editArticle = async (slug, body) => {
  const response = await api.put(`/articles/${slug}`, JSON.stringify({ article: body }));
  const {
    data: { article },
  } = response;
  return article;
};

export const addArticle = async body => {
  const response = await api.post('/articles', JSON.stringify({ article: body }));
  const {
    data: { article },
  } = response;
  return article;
};

export const deleteArticle = async slug => {
  const response = await api.delete(`/articles/${slug}`);
  return response;
};

export const setFavorite = async slug => {
  const response = await api.post(`/articles/${slug}/favorite`);
  const {
    data: { article },
  } = response;
  return article;
};

export const unsetFavorite = async slug => {
  const response = await api.delete(`/articles/${slug}/favorite`);
  const {
    data: { article },
  } = response;
  return article;
};

export default api;
