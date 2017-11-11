import {
  TRANSACTIONS_FETCH_STARTED,
  TRANSACTIONS_FETCH_COMPLETED,
  TRANSACTIONS_FETCH_FAILED,
  TRANSACTIONS_SUBMIT_STARTED,
  TRANSACTIONS_SUBMIT_COMPLETED,
  TRANSACTIONS_SUBMIT_FAILED,
} from '../actions/transactions';
import config from '../config/config';

const initialState = {
  transactions: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: config.EMPTY_STRING,
};

const transactions = (currentState = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS_FETCH_STARTED:
      return {
        ...currentState,
        transactions: [],
        isSuccess: false,
        isLoading: true,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case TRANSACTIONS_FETCH_COMPLETED:
      return {
        ...currentState,
        transactions: action.payload,
        isLoading: false,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case TRANSACTIONS_FETCH_FAILED:
      return {
        ...currentState,
        accounts: [],
        isLoading: false,
        isError: true,
        error: action.payload.error,
      };
    case TRANSACTIONS_SUBMIT_STARTED:
      return {
        ...currentState,
        isSuccess: false,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case TRANSACTIONS_SUBMIT_COMPLETED:
      return {
        ...currentState,
        isSuccess: true,
        isError: false,
        error: config.EMPTY_STRING,
      };
    case TRANSACTIONS_SUBMIT_FAILED:
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

export default transactions;
