import {
  ACCOUNTS_FETCH_STARTED,
  ACCOUNTS_FETCH_COMPLETED,
  ACCOUNTS_FETCH_FAILED,
} from '../actions/accounts';

const initialState = {
  accounts: [],
  isLoading: false,
  isError: false,
};

const accounts = (currentState = initialState, action) => {
  switch (action.type) {
    case ACCOUNTS_FETCH_STARTED:
      return {
        ...currentState,
        accounts: [],
        isLoading: true,
        isError: false,
      };
    case ACCOUNTS_FETCH_COMPLETED:
      return {
        ...currentState,
        accounts: action.payload,
        isLoading: false,
        isError: false,
      };
    case ACCOUNTS_FETCH_FAILED:
      return {
        ...currentState,
        accounts: [],
        isLoading: false,
        isError: true,
      };
    default:
      return currentState;
  }
};

export default accounts;
