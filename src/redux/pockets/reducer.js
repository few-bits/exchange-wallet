import {
    CURRENCY_EUR,
    CURRENCY_USD,
} from '../../Constants';

export default (state = {
    pocket1: {
        currency: CURRENCY_EUR,
    },
    pocket2: {
        currency: CURRENCY_USD,
    }
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}
