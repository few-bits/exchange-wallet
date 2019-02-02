import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../redux';

export default () => createStore(rootReducer, applyMiddleware(thunk));
