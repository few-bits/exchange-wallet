import {
    CURRENCY_EUR,
    CURRENCY_USD,
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';
import { SET_ACTIVE, SET_CURRENCY } from './types';

export default (state = {
    pocket1: {
        active: false,
        credit: null,
        debit: null,
        currency: CURRENCY_EUR,
    },
    pocket2: {
        active: false,
        credit: null,
        debit: null,
        currency: CURRENCY_USD,
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
                    credit: null,
                    debit: null,
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    active: pocketKey === POCKET_KEY_2,
                    credit: null,
                    debit: null,
                },
            };
        }
        case SET_CURRENCY: {
            const { pocketKey, currency } = action.payload;
            return {
                ...state,
                [POCKET_KEY_1]: {
                    ...state[POCKET_KEY_1],
                    currency: pocketKey === POCKET_KEY_1 ? currency : state[POCKET_KEY_1].currency,
                },
                [POCKET_KEY_2]: {
                    ...state[POCKET_KEY_2],
                    currency: pocketKey === POCKET_KEY_2 ? currency : state[POCKET_KEY_2].currency,
                },
            };
        }
        default:
            return state
    }
}
