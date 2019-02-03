import { roundNumber } from '../../utils';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';

import { UPDATE_BALANCE, EXCHANGE_CURRENCY } from './types';

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
        case EXCHANGE_CURRENCY: {
            const { pocketFrom, pocketTo } = action.payload;
            const { currencyFrom, amountFrom } = pocketFrom;
            const { currencyTo, amountTo } = pocketTo;

            if (currencyFrom === currencyTo) {
                return state;
            }

            return {
                ...state,
                [currencyFrom]: {
                    balance: roundNumber(state[currencyFrom].balance - amountFrom),
                },
                [currencyTo]: {
                    balance: roundNumber(state[currencyTo].balance + amountTo),
                }
            }
        }
        default:
            return state
    }
}
