import axios from 'axios';

const { user: { token } = {} } = localStorage.getItem('user') || {};

const AuthorizationHeader = token ? { Autorization: `Bearer ${token}` } : {};

const api = axios.create({
  baseURL: 'http://karo-dev.ru:3000/api/',
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

export const logout = () => localStorage.removeItem('user');

export default api;
