import { SET_RANDOM_RATES_MODE } from './types';

export default (state = {
    randomRates: false,
}, action) => {
    switch (action.type) {
        case SET_RANDOM_RATES_MODE: {
            const { randomRates } = action.payload;
            return {
                ...state,
                randomRates,
            };
        }
        default:
            return state
    }
}
