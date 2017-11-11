import config from '../config/config';

const apiUrl = config.API_URL;

const wrappedFetch = (uri, options) => fetch(uri, options)
  .then((response) => {
    if (response.status !== config.SUCCESS_CODE) {
      return response.json().then((data) => { throw data; });
    }
    return response.json();
  })
  .then(data => data);


const post = (uri, params) => wrappedFetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: config.POST_HEADERS,
  body: JSON.stringify(params),
});

const postAuthorized = (uri, accessToken, params) => wrappedFetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: {
    ...config.POST_HEADERS,
    Authorization: `Bearer ${accessToken}`,
  },
  body: JSON.stringify(params),
});

const getAuthorized = (uri, accessToken) => wrappedFetch(`${apiUrl}${uri}`, {
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

export const getUserAccounts = (accessToken, userId) => getAuthorized(`users/${userId}/accounts`, accessToken);

export const createUserAccount = (accessToken, userId, name, type) => (
  postAuthorized(`users/${userId}/accounts`, accessToken, { name, type })
);

export const getUserTransactions = (accessToken, userId) => getAuthorized(`users/${userId}/transactions`, accessToken);

export const createUserTransaction = (accessToken, userId, params) => (

  postAuthorized(`users/${userId}/transactions`, accessToken, params)
);

export default {
  login,
  register,
  getUserAccounts,
  createUserAccount,
  getUserTransactions,
  createUserTransaction,
};
