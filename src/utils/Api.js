const apiUrl = 'http://localhost:8080/api/';

const post = (uri, params) => fetch(`${apiUrl}${uri}`, {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params)
})
  .then(response => response.json())
  .then(data => data);

export const login = (email, password) => post(`authorize`, {
  email: email,
  password: password
});

export default {
  login,
};
