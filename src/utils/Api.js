import config from '../config/config';

const apiUrl = config.API_URL;

/**
 * A wrapper to fetch to handle the error responses
 * @param {string} uri
 * @param {object} options
 */
const wrappedFetch = (uri, options) => fetch(uri, options)
  .then((response) => {
    if (response.status !== config.SUCCESS_CODE) {
      return response.json().then((data) => { throw data; });
    }
    return response.json();
  })
  .then(data => data);

/**
 * Makes a post request to the api
 * @param {string} uri
 * @param {object} params
 */
const post = (uri, params) => wrappedFetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: config.POST_HEADERS,
  body: JSON.stringify(params),
});

/**
 * Makes an authorized post request to the api
 * @param {string} uri
 * @param {string} accessToken
 * @param {object} params
 */
const postAuthorized = (uri, accessToken, params) => wrappedFetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: {
    ...config.POST_HEADERS,
    Authorization: `Bearer ${accessToken}`,
  },
  body: JSON.stringify(params),
});

/**
 * Makes an authorized get request to the api
 * @param {string} uri
 * @param {string} accessToken
 */
const getAuthorized = (uri, accessToken) => wrappedFetch(`${apiUrl}${uri}`, {
  headers: {
    ...config.POST_HEADERS,
    Authorization: `Bearer ${accessToken}`,
  },
});

/**
 * Makes a call to the authorization route of the api
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => post('authorize', {
  email,
  password,
});

/**
 * Makes a call to the register route of the api
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */
export const register = (name, email, password) => post('users', {
  name,
  email,
  password,
});

/**
 * Fetches the accounts for the passed user id
 * @param {string} accessToken
 * @param {number} userId
 */
export const getUserAccounts = (accessToken, userId) => getAuthorized(`users/${userId}/accounts`, accessToken);

/**
 * Creates an account for the passed user id
 * @param {string} accessToken
 * @param {number} userId
 * @param {string} name
 * @param {string} type
 */
export const createUserAccount = (accessToken, userId, name, type) => (
  postAuthorized(`users/${userId}/accounts`, accessToken, { name, type })
);

/**
 * Fetches the transactions for the passed user id
 * @param {string} accessToken
 * @param {number} userId
 */
export const getUserTransactions = (accessToken, userId) => getAuthorized(`users/${userId}/transactions`, accessToken);

/**
 * Creates a transaction for the passed user id
 * @param {string} accessToken
 * @param {number} userId
 * @param {object} params
 */
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
