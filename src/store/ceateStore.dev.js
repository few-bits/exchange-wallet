import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../redux';

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, createLogger())
    );

    if (module.hot) {
        module.hot.accept('../redux', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store;
};
