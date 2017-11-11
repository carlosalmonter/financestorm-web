import { createUserTransaction, getUserTransactions } from '../utils/Api';

export const TRANSACTIONS_FETCH_STARTED = 'TRANSACTIONS_FETCH_STARTED';
export const TRANSACTIONS_FETCH_COMPLETED = 'TRANSACTIONS_FETCH_COMPLETED';
export const TRANSACTIONS_FETCH_FAILED = 'TRANSACTIONS_FETCH_FAILED';

export const TRANSACTIONS_SUBMIT_STARTED = 'TRANSACTIONS_SUBMIT_STARTED';
export const TRANSACTIONS_SUBMIT_COMPLETED = 'TRANSACTIONS_SUBMIT_COMPLETED';
export const TRANSACTIONS_SUBMIT_FAILED = 'TRANSACTIONS_SUBMIT_FAILED';

const initTransactionsFetch = () => ({
  type: TRANSACTIONS_FETCH_STARTED,
  payload: [],
});

const transactionsFetchCompleted = ({ data }) => ({
  type: TRANSACTIONS_FETCH_COMPLETED,
  payload: data,
});

const transactionsFetchFailed = err => ({
  type: TRANSACTIONS_FETCH_FAILED,
  isError: true,
  payload: err,
});

const initTransactionsSubmit = () => ({
  type: TRANSACTIONS_SUBMIT_STARTED,
});

const transactionsSubmitCompleted = () => ({
  type: TRANSACTIONS_SUBMIT_COMPLETED,
});

const transactionsSubmitFailed = err => ({
  type: TRANSACTIONS_SUBMIT_FAILED,
  payload: err,
});

export const transactionsActions = {
  getTransactions(dispatch, accessToken, userId) {
    dispatch(initTransactionsFetch());

    return getUserTransactions(accessToken, userId)
      .then(data => dispatch(transactionsFetchCompleted(data)))
      .catch((err) => {
        dispatch(transactionsFetchFailed(err));
      });
  },

  createTransaction(dispatch, accessToken, userId, name, type) {
    dispatch(initTransactionsSubmit());

    return createUserTransaction(accessToken, userId, name, type)
      .then(data => dispatch(transactionsSubmitCompleted(data)))
      .catch((err) => {
        dispatch(transactionsSubmitFailed(err));
      });
  },
};
