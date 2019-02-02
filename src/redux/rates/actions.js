import { REFRESH_RATES_INTERVAL } from '../../Constants';
import { SET_RATES } from './types';

let refreshInterval = null;

export const startRatesRefreshing = async (dispatch, getState) => {
    const { account } = getState();
    const currencies = Object.keys(account);

    await getRates(currencies, dispatch);

    refreshInterval = setInterval(async () => {
        await getRates(currencies, dispatch);
    }, REFRESH_RATES_INTERVAL);
};

export const stopRatesRefreshing = () => {
    clearInterval(refreshInterval);
};

const getRates = async (currencies, dispatch) => {
    const rates = await Promise.all(currencies.map(getRate));

    dispatch({
        type: SET_RATES,
        payload: { rates }
    });
};

const getRate = async (base) => {
    const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`);
    return await response.json();
};
