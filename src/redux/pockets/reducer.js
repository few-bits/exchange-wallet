import {
    CURRENCY_EUR,
    CURRENCY_USD,
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';
import {
    SET_ACTIVE,
    CURRENCY_CHANGE,
    AMOUNT_CHANGE,
} from './types';
import { SET_RATES } from '../rates/types';

import { getPocketAmount } from './helpers';
import { getRates } from '../rates/helpers';

export default (state = {
    [POCKET_KEY_1]: {
        active: true,
        amount: 0,
        currency: CURRENCY_EUR,
        rate: null,
    },
    [POCKET_KEY_2]: {
        active: false,
        amount: 0,
        currency: CURRENCY_USD,
        rate: null,
    }
}, action) => {
    switch (action.type) {
        case SET_ACTIVE: {
            const { pocketKey } = action.payload;
            return {
                ...state,
                [POCKET_KEY_1]: {
                    ...state[POCKET_KEY_1],
                    active: pocketKey === POCKET_KEY_1,
                    amount: 0,
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    active: pocketKey === POCKET_KEY_2,
                    amount: 0,
                },
            };
        }
        case CURRENCY_CHANGE: {
            const { pocketKey, currency } = action.payload;
            return {
                ...state,

                [POCKET_KEY_1]: {
                    ...state[POCKET_KEY_1],
                    currency: pocketKey === POCKET_KEY_1 ? currency : state[POCKET_KEY_1].currency,
                    amount: 0,
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    currency: pocketKey === POCKET_KEY_2 ? currency : state[POCKET_KEY_2].currency,
                    amount: 0,
                },
            };
        }
        case AMOUNT_CHANGE: {
            const { value } = action.payload;
            return {
                ...state,
                [POCKET_KEY_1]: {
                    ...state[POCKET_KEY_1],
                    ...getPocketAmount(state[POCKET_KEY_1], value),
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    ...getPocketAmount(state[POCKET_KEY_2], value),
                },
            };
        }
        case SET_RATES: {
            const { rates: serverData } = action.payload;
            const currencyPocket1 = state[POCKET_KEY_1].currency;
            const currencyPocket2 = state[POCKET_KEY_2].currency;

            const ratesPocket1 = getRates([currencyPocket1], serverData);
            const ratesPocket2 = getRates([currencyPocket2], serverData);

            const ratePocket1 = ratesPocket1[currencyPocket1][currencyPocket2];
            const ratePocket2 = ratesPocket2[currencyPocket2][currencyPocket1];

            return {
                ...state,
                [POCKET_KEY_1]: {
                    ...state[POCKET_KEY_1],
                    rate: ratePocket1,
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    rate: ratePocket2,
                },
            };
        }
        default:
            return state
    }
}
