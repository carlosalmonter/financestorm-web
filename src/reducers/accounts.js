import {
  ACCOUNTS_FETCH_STARTED,
  ACCOUNTS_FETCH_COMPLETED,
  ACCOUNTS_FETCH_FAILED,
  ACCOUNTS_SUBMIT_STARTED,
  ACCOUNTS_SUBMIT_COMPLETED,
  ACCOUNTS_SUBMIT_FAILED,
} from '../actions/accounts';
import config from '../config/config';

const initialState = {
  accounts: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: config.EMPTY_STRING,
};

const accounts = (currentState = initialState, action) => {
  switch (action.type) {
    case ACCOUNTS_FETCH_STARTED:
      return {
        ...currentState,
        accounts: [],
        isSuccess: false,
        isLoading: true,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case ACCOUNTS_FETCH_COMPLETED:
      return {
        ...currentState,
        accounts: action.payload,
        isLoading: false,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case ACCOUNTS_FETCH_FAILED:
      return {
        ...currentState,
        accounts: [],
        isLoading: false,
        isError: true,
        error: action.payload.error,
      };
    case ACCOUNTS_SUBMIT_STARTED:
      return {
        ...currentState,
        isSuccess: false,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case ACCOUNTS_SUBMIT_COMPLETED:
      return {
        ...currentState,
        isSuccess: true,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case ACCOUNTS_SUBMIT_FAILED:
      return {
        ...currentState,
        isSuccess: false,
        isError: true,
        error: action.payload.error,
      };
    default:
      return currentState;
  }
};

export default accounts;
