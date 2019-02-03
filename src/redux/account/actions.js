import { UPDATE_BALANCE, EXCHANGE_CURRENCY } from './types';

export const updateBalance = (currency, balance) => ({
    type: UPDATE_BALANCE,
    payload: { currency, balance },
});

export const exchangeCurrency = (pocketFrom, pocketTo) => ({
    type: EXCHANGE_CURRENCY,
    payload: { pocketFrom, pocketTo },
});
