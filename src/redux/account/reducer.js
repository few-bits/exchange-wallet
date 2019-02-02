import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';

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
        default:
            return state
    }
}
