import { createStore, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import reducers from '../reducers';

const store = createStore(
  reducers,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    autoRehydrate(),
  ),
);

persistStore(store);

export default store;
