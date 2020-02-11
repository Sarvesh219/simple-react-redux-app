import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const initialState = {};
const middleWare = [thunk];

const composedEnhancers = compose(
    applyMiddleware(...middleWare)
);

const store = createStore(reducers, initialState, composedEnhancers);

export default store;