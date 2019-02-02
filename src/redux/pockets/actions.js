import {
    SET_ACTIVE,
    CURRENCY_CHANGE,
    AMOUNT_CHANGE
} from './types';

export const setActive = (pocketKey) => (dispatch) => dispatch({
    type: SET_ACTIVE,
    payload: { pocketKey },
});

export const currencyOnChange = (currency, pocketKey) => (dispatch) => dispatch({
    type: CURRENCY_CHANGE,
    payload: { pocketKey, currency },
});

export const amountOnChange = (value) => (dispatch) => {
    dispatch({
        type: AMOUNT_CHANGE,
        payload: { value },
    });
};
