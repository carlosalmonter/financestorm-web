import { createUserAccount, getUserAccounts } from '../utils/Api';

export const ACCOUNTS_FETCH_STARTED = 'ACCOUNTS_FETCH_STARTED';
export const ACCOUNTS_FETCH_COMPLETED = 'ACCOUNTS_FETCH_COMPLETED';
export const ACCOUNTS_FETCH_FAILED = 'ACCOUNTS_FETCH_FAILED';

export const ACCOUNTS_SUBMIT_STARTED = 'ACCOUNTS_SUBMIT_STARTED';
export const ACCOUNTS_SUBMIT_COMPLETED = 'ACCOUNTS_SUBMIT_COMPLETED';
export const ACCOUNTS_SUBMIT_FAILED = 'ACCOUNTS_SUBMIT_FAILED';

const initAccountsFetch = () => ({
  type: ACCOUNTS_FETCH_STARTED,
  payload: [],
});

const accountsFetchCompleted = ({ data }) => ({
  type: ACCOUNTS_FETCH_COMPLETED,
  payload: data,
});

const accountsFetchFailed = err => ({
  type: ACCOUNTS_FETCH_FAILED,
  isError: true,
  payload: err,
});

const initAccountsSubmit = () => ({
  type: ACCOUNTS_SUBMIT_STARTED,
});

const accountsSubmitCompleted = () => ({
  type: ACCOUNTS_SUBMIT_COMPLETED,
});

const accountsSubmitFailed = err => ({
  type: ACCOUNTS_SUBMIT_FAILED,
  payload: err,
});

export const accountsActions = {
  getAccounts(dispatch, accessToken, userId) {
    dispatch(initAccountsFetch());

    return getUserAccounts(accessToken, userId)
      .then(data => dispatch(accountsFetchCompleted(data)))
      .catch((err) => {
        dispatch(accountsFetchFailed(err));
      });
  },

  createAccount(dispatch, accessToken, userId, name, type) {
    dispatch(initAccountsSubmit());

    return createUserAccount(accessToken, userId, name, type)
      .then(data => dispatch(accountsSubmitCompleted(data)))
      .catch((err) => {
        dispatch(accountsSubmitFailed(err));
      });
  },
};
