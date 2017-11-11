import config from '../config/config';

const apiUrl = config.API_URL;

const post = (uri, params) => fetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: config.POST_HEADERS,
  body: JSON.stringify(params),
})
  .then(response => response.json())
  .then(data => data);

const get = (uri, accessToken) => fetch(`${apiUrl}${uri}`, {
  headers: {
    ...config.POST_HEADERS,
    Authorization: `Bearer ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data => data);

export const login = (email, password) => post('authorize', {
  email,
  password,
});

export const register = (name, email, password) => post('users', {
  name,
  email,
  password,
});

export const getUserAccounts = (accessToken, userId) => get(`users/${userId}/accounts`, accessToken);

export default {
  login,
  register,
  getUserAccounts,
};
