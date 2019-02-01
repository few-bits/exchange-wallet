import { combineReducers } from 'redux';

import account from './account';
import pockets from './pockets';

export default combineReducers({
    account,
    pockets,
});
