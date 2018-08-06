import { createStore } from 'redux'
import rootReducer from './redux/reducers';

export function initializeStore() {
    return createStore(rootReducer);
}