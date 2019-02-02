import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';

export default (state = {
    [CURRENCY_EUR]: {
        rates: {
            [CURRENCY_USD]: 1,
            [CURRENCY_GBP]: 2,
        },
    },
    [CURRENCY_USD]: {
        rates: {
            [CURRENCY_EUR]: 3,
            [CURRENCY_GBP]: 4,
        },
    },
    [CURRENCY_GBP]: {
        rates: {
            [CURRENCY_EUR]: 5,
            [CURRENCY_USD]: 6,
        },
    }
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}
