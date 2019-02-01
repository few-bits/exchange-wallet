import {
    CURRENCY_EUR,
    CURRENCY_USD,
} from '../Constants';

export default (state = {
    source: {
        currency: CURRENCY_EUR,
    },
    receiver: {
        currency: CURRENCY_USD,
    }
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}
