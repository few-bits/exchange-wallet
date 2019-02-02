import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';

import { SET_RATES } from './types';
import { getRates } from './helpers';

export default (state = {
    [CURRENCY_EUR]: {},
    [CURRENCY_USD]: {},
    [CURRENCY_GBP]: {},
}, action) => {
    switch (action.type) {
        case SET_RATES: {
            const { rates: serverData } = action.payload;
            const ratesArray = Object.keys(state);

            const newRates = getRates(ratesArray, serverData);

            return {
                ...state,
                ...newRates,
            };
        }
        default:
            return state
    }
}
