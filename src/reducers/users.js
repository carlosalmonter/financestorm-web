import {
  USER_LOGIN_STARTED,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_FAILED,
  USER_LOGOUT_COMPLETED,
  USER_REGISTER_STARTED,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_FAILED,
  PERSIST_REHYDRATE
} from '../actions/users';
import config from '../config/config';
import * as _ from "lodash";

const initialState = {
  user: {},
  accessToken: config.EMPTY_STRING,
  isLogin: false,
  isError: false,
};

const users = (currentState = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_STARTED:
      return {
        ...currentState,
        user: {},
        accessToken: config.EMPTY_STRING,
        isLogin: true,
        isError: false,
      };
    case USER_LOGIN_COMPLETED:
      return {
        ...currentState,
        user: action.payload.user,
        accessToken: action.payload.token,
        isLogin: false,
        isError: false,
      };
    case USER_LOGIN_FAILED:
      return {
        ...currentState,
        user: {},
        accessToken: config.EMPTY_STRING,
        isLogin: false,
        isError: true,
      };
    case USER_LOGOUT_COMPLETED:
      return {
        ...currentState,
        user: {},
        accessToken: config.EMPTY_STRING,
        isLogin: false,
        isError: false,
      };
    case USER_REGISTER_STARTED:
      return {
        ...currentState,
        user: {},
        accessToken: config.EMPTY_STRING,
        isError: false,
      };
    case USER_REGISTER_COMPLETED:
      return {
        ...currentState,
        user: action.payload.user,
        accessToken: action.payload.token,
        isError: false,
      };
    case USER_REGISTER_FAILED:
      return {
        ...currentState,
        user: {},
        accessToken: config.EMPTY_STRING,
        isError: true,
      };
    case PERSIST_REHYDRATE:
      return {
        ...currentState,
        user: _.get(action, 'payload.users.user', {}),
        accessToken: _.get(action, 'payload.users.accessToken', config.EMPTY_STRING),
      };
    default:
      return currentState;
  }
};

export default users;
