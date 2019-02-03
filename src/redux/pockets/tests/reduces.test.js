import reducer from '../reducer';
import * as types from '../types';

describe('rates reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            pocket1: {
                active: true,
                amount: 0,
                currency: 'EUR',
                rate: null,
            },
            pocket2: {
                active: false,
                amount: 0,
                currency: 'USD',
                rate: null,
            }
        })
    });

    it('should handle SET_ACTIVE ', () => {
        expect(
            reducer({
                pocket1: {
                    active: false,
                    amount: 10,
                    currency: 'EUR',
                },
                pocket2: {
                    active: true,
                    amount: 0,
                    currency: 'USD',
                }
            }, {
                type: types.SET_ACTIVE,
                payload: {
                    pocketKey: 'pocket1',
                }
            })
        ).toEqual({
            pocket1: {
                active: true,
                amount: 0,
                currency: 'EUR',
            },
            pocket2: {
                active: false,
                amount: 0,
                currency: 'USD',
            }
        });
    });

    it('should handle CURRENCY_CHANGE ', () => {
        expect(
            reducer({
                pocket1: {
                    active: false,
                    amount: 10,
                    currency: 'EUR',
                },
                pocket2: {
                    active: true,
                    amount: 0,
                    currency: 'USD',
                }
            }, {
                type: types.CURRENCY_CHANGE,
                payload: {
                    pocketKey: 'pocket1',
                    currency: 'GBP',
                    rates: {
                        'EUR': { 'USD': 0.3, 'GBP': 0.2 },
                        'USD': { 'EUR': 0.4, 'GBP': 0.1 },
                        'GBP': { 'EUR': 0.4, 'USD': 0.4 },
                    }
                }
            })
        ).toEqual({
            pocket1: {
                active: false,
                amount: 0,
                currency: 'GBP',
                rate: 0.1,
            },
            pocket2: {
                active: true,
                amount: 0,
                currency: 'USD',
                rate: 0.4
            }
        });
    });

    it('should handle AMOUNT_CHANGE ', () => {
        expect(
            reducer({
                pocket1: {
                    active: false,
                    amount: 10,
                    currency: 'EUR',
                    rate: 0.376,
                },
                pocket2: {
                    active: true,
                    amount: 0,
                    currency: 'USD',
                }
            }, {
                type: types.AMOUNT_CHANGE,
                payload: {
                    pocketKey: 'pocket2',
                    value: '51',
                }
            })
        ).toEqual({
            pocket1: {
                active: false,
                amount: 19.18,
                currency: 'EUR',
                rate: 0.376,
            },
            pocket2: {
                active: true,
                amount: 51,
                currency: 'USD',
            }
        });
    });
});
