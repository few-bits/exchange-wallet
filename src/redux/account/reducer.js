import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';

import { UPDATE_BALANCE } from './types';

export default (state = {
    [CURRENCY_EUR]: {
        balance: 100
    },
    [CURRENCY_USD]: {
        balance: 101
    },
    [CURRENCY_GBP]: {
        balance: 102
    }
}, action) => {
    switch (action.type) {
        case UPDATE_BALANCE: {
            const {currency, balance} = action.payload;
            return {
                ...state,
                [currency]: {
                    ...state[currency],
                    balance,
                }
            };
        }
        default:
            return state
    }
}
