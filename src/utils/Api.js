import config from '../config/config';

const apiUrl = config.API_URL;

const wrappedFetch = (uri, options) => {
  return fetch(uri, options)
    .then(response => {
      if (response.status !== config.SUCCESS_CODE) {
        return response.json().then(data => { throw data });
      }
      return response.json();
    })
    .then(data => data);
};

const post = (uri, params) => wrappedFetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: config.POST_HEADERS,
  body: JSON.stringify(params),
});

const get = (uri, accessToken) => wrappedFetch(`${apiUrl}${uri}`, {
  headers: {
    ...config.POST_HEADERS,
    Authorization: `Bearer ${accessToken}`,
  },
});

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
