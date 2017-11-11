import { getUserAccounts } from '../utils/Api';

export const ACCOUNTS_FETCH_STARTED = 'ACCOUNTS_FETCH_STARTED';
export const ACCOUNTS_FETCH_COMPLETED = 'ACCOUNTS_FETCH_COMPLETED';
export const ACCOUNTS_FETCH_FAILED = 'ACCOUNTS_FETCH_FAILED';

const initAccountsFetch = () => ({
  type: ACCOUNTS_FETCH_STARTED,
  payload: [],
});

const accountsFetchCompleted = ({data}) => ({
  type: ACCOUNTS_FETCH_COMPLETED,
  payload: data,
});

const accountsFetchFailed = err => ({
  type: ACCOUNTS_FETCH_FAILED,
  isError: true,
  payload: err,
});

export const accountsActions = {
  getAccounts(dispatch, accessToken, userId) {
    dispatch(initAccountsFetch());

    return getUserAccounts(accessToken, userId)
      .then(data => dispatch(accountsFetchCompleted(data)))
      .catch(err => {
        dispatch(accountsFetchFailed(err));
        throw err;
      });
  },
};
