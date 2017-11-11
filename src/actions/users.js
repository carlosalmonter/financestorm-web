import { login, register } from '../utils/Api';

export const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED';
export const USER_LOGIN_COMPLETED = 'USER_LOGIN_COMPLETED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGOUT_COMPLETED = 'USER_LOGOUT_COMPLETED';
export const USER_REGISTER_STARTED = 'USER_REGISTER_STARTED';
export const USER_REGISTER_COMPLETED = 'USER_REGISTER_COMPLETED';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
export const PERSIST_REHYDRATE = 'persist/REHYDRATE';

const initUserLogin = () => ({
  type: USER_LOGIN_STARTED,
  payload: {},
});

const userLogout = () => ({
  type: USER_LOGOUT_COMPLETED,
});

const userLoginCompleted = ({ data }) => ({
  type: USER_LOGIN_COMPLETED,
  payload: data,
});

const userLoginFailed = err => ({
  type: USER_LOGIN_FAILED,
  isError: true,
  payload: err,
});

const initUserRegister = () => ({
  type: USER_REGISTER_STARTED,
  payload: {},
});

const userRegisterCompleted = ({ data }) => ({
  type: USER_REGISTER_COMPLETED,
  payload: data,
});

const userRegisterFailed = err => ({
  type: USER_REGISTER_FAILED,
  isError: true,
  payload: err,
});

export const usersActions = {
  loginUser(dispatch, email, password) {
    dispatch(initUserLogin());

    return login(email, password)
      .then(data => dispatch(userLoginCompleted(data)))
      .catch((err) => {
        dispatch(userLoginFailed(err));
      });
  },
  logoutUser(dispatch) {
    dispatch(userLogout());
  },
  registerUser(dispatch, name, email, password) {
    dispatch(initUserRegister());

    return register(name, email, password)
      .then(data => dispatch(userRegisterCompleted(data)))
      .catch((err) => {
        dispatch(userRegisterFailed(err));
      });
  },
};
