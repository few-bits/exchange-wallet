import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';

import { GET_RATES_SUCCESS, GET_RATES_FAIL } from './types';
import { getRawRates } from './helpers';

const initialState = {
    [CURRENCY_EUR]: {},
    [CURRENCY_USD]: {},
    [CURRENCY_GBP]: {},
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case GET_RATES_SUCCESS: {
            const { rates: serverData } = action.payload;
            const ratesArray = Object.keys(state);

            const newRates = getRawRates(ratesArray, serverData);

            return {
                ...state,
                ...newRates,
            };
        }
        case GET_RATES_FAIL: {
            return { ...initialState };
        }
        default:
            return state
    }
}
