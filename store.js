import { createStore, compose } from 'redux';
import rootReducer from './redux/reducers';

const composeEnhancers = (
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose
);

export function initializeStore() {
    return createStore(rootReducer, composeEnhancers());
};