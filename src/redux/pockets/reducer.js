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
import { GET_RATES_SUCCESS } from '../rates/types';

import { roundNumber } from '../../utils';
import { getPocketAmount } from './helpers';
import { getRawRates } from '../rates/helpers';

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
            const { pocketKey, currency, rates } = action.payload;

            const currencyPocket1 = pocketKey === POCKET_KEY_1 ? currency : state[POCKET_KEY_1].currency;
            const currencyPocket2 = pocketKey === POCKET_KEY_2 ? currency : state[POCKET_KEY_2].currency;

            const ratePocket1 = rates[currencyPocket2][currencyPocket1];
            const ratePocket2 = rates[currencyPocket1][currencyPocket2];

            return {
                ...state,
                [POCKET_KEY_1]: {
                    ...state[POCKET_KEY_1],
                    currency: currencyPocket1,
                    amount: 0,
                    rate: ratePocket1,
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    currency: currencyPocket2,
                    amount: 0,
                    rate: ratePocket2,
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
        case GET_RATES_SUCCESS: {
            const { rates: serverData } = action.payload;
            const currencyPocket1 = state[POCKET_KEY_1].currency;
            const currencyPocket2 = state[POCKET_KEY_2].currency;

            const ratesPocket1 = getRawRates([currencyPocket1], serverData);
            const ratesPocket2 = getRawRates([currencyPocket2], serverData);

            const ratePocket1 = ratesPocket2[currencyPocket2][currencyPocket1];
            const ratePocket2 = ratesPocket1[currencyPocket1][currencyPocket2];

            const amountPocket1 = state[POCKET_KEY_1].active ? state[POCKET_KEY_1].amount : state[POCKET_KEY_2].amount * ratePocket1;
            const amountPocket2 = state[POCKET_KEY_2].active ? state[POCKET_KEY_2].amount : state[POCKET_KEY_1].amount * ratePocket2;

            return {
                ...state,
                [POCKET_KEY_1]: {
                    ...state[POCKET_KEY_1],
                    rate: ratePocket1,
                    amount: roundNumber(amountPocket1),
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    rate: ratePocket2,
                    amount: roundNumber(amountPocket2),
                },
            };
        }
        default:
            return state
    }
}
