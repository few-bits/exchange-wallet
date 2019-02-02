import {
    SET_ACTIVE,
    SET_CURRENCY,
    CREDIT_CHANGE
} from './types';

export const setActive = (pocketKey) => (dispatch) => dispatch({
    type: SET_ACTIVE,
    payload: { pocketKey },
});

export const setCurrency = (currency, pocketKey) => (dispatch) => dispatch({
    type: SET_CURRENCY,
    payload: { pocketKey, currency },
});

export const onCreditChange = (pocketKey, value, rate) => (dispatch) => {
    console.log(pocketKey, value, rate);
    dispatch({
        type: CREDIT_CHANGE,
        payload: {
            pocketKey,
            value,
            rate
        },
    });
};
