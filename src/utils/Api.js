import config from '../config/config';

const apiUrl = config.API_URL;

const post = (uri, params) => fetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: config.POST_HEADERS,
  body: JSON.stringify(params)
})
  .then(response => response.json())
  .then(data => data);

export const login = (email, password) => post('authorize', {
  email: email,
  password: password
});

export default {
  login,
};
