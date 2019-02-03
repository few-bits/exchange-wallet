import { combineReducers } from 'redux';

import account from './account/reducer';
import pockets from './pockets/reducer';
import rates from './rates/reducer';
import network from './network/reducer';
import system from './system/reducer';

export default combineReducers({
    account,
    pockets,
    rates,
    network,
    system,
});
