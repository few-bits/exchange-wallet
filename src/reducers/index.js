import { combineReducers } from 'redux';

import account from './account';
import pockets from './pockets';
import rates from './rates';

export default combineReducers({
    account,
    pockets,
    rates,
});
