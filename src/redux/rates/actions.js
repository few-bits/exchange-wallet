import { REFRESH_RATES_INTERVAL } from '../../Constants';
import { GET_RATES_FAIL, GET_RATES_SUCCESS } from './types';
import { patchRates } from './helpers';

import { getRate } from '../../transport/rates';

let refreshInterval = null;

export const startRatesRefreshing = async (dispatch, getState) => {
    const { account } = getState();
    const currencies = Object.keys(account);

    await getRates(currencies, dispatch);

    refreshInterval = setInterval(async () => {
        const { system } = getState();
        await getRates(currencies, dispatch, system.randomRates);
    }, REFRESH_RATES_INTERVAL);
};

export const stopRatesRefreshing = () => {
    clearInterval(refreshInterval);
};

const getRates = async (currencies, dispatch, randomRates) => {
    try {
        const rates = await Promise.all(currencies.map(getRate));
        const patchedRates = randomRates ? patchRates(rates) : rates;

        dispatch({
            type: GET_RATES_SUCCESS,
            payload: { rates: patchedRates }
        });
    } catch (e) {
        console.error(e);
        dispatch({ type: GET_RATES_FAIL });
    }

};
