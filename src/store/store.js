import { createStore } from 'react-redux';
import documentReducer from './document/documentReducer';

const store = createStore(
  documentReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
