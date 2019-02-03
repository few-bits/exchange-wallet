import { REFRESH_RATES_INTERVAL } from '../../Constants';
import {GET_RATES_FAIL, GET_RATES_SUCCESS} from './types';

import { getRate } from '../../transport/rates';

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
    try {
        const rates = await Promise.all(currencies.map(getRate));

        dispatch({
            type: GET_RATES_SUCCESS,
            payload: { rates }
        });
    } catch (e) {
        console.error(e);
        dispatch({ type: GET_RATES_FAIL });
    }

};
