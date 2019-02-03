import { UPDATE_BALANCE } from './types';

export const updateBalance = (currency, balance) => ({
    type: UPDATE_BALANCE,
    payload: { currency, balance },
});
