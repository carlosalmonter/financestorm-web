import { createStore, compose } from 'redux';
import reducers from '../reducers';
import { autoRehydrate, persistStore } from 'redux-persist';

const store = createStore(
  reducers,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    autoRehydrate()
  ),
);

persistStore(store);

export default store;
