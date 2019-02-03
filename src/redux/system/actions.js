import { SET_RANDOM_RATES_MODE } from './types';

export const setRandomRatesMode = (randomRates) => ({
    type: SET_RANDOM_RATES_MODE,
    payload: { randomRates },
});
