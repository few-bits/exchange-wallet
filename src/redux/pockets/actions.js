import { SET_ACTIVE, SET_CURRENCY } from './types';

export const setActive = (pocketKey) => (dispatch) => dispatch({
    type: SET_ACTIVE,
    payload: { pocketKey },
});

export const setCurrency = (currency, pocketKey) => (dispatch) => dispatch({
    type: SET_CURRENCY,
    payload: { pocketKey, currency },
});
