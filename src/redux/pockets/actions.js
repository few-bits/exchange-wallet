import {
    SET_ACTIVE,
    CURRENCY_CHANGE,
    AMOUNT_CHANGE
} from './types';

export const setActive = (pocketKey) => (dispatch) => dispatch({
    type: SET_ACTIVE,
    payload: { pocketKey },
});

export const currencyOnChange = (pocketKey, currency, rates) => (dispatch) => dispatch({
    type: CURRENCY_CHANGE,
    payload: { pocketKey, currency, rates },
});

export const amountOnChange = (value) => (dispatch) => {
    dispatch({
        type: AMOUNT_CHANGE,
        payload: { value },
    });
};
