import reducer from '../reducer';
import * as types from '../types';

describe('rates reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            pocket1: {
                active: true,
                credit: null,
                debit: null,
                currency: 'EUR',
            },
            pocket2: {
                active: false,
                credit: null,
                debit: null,
                currency: 'USD',
            }
        })
    });

    it('should handle SET_ACTIVE ', () => {
        expect(
            reducer({
                pocket1: {
                    active: false,
                    credit: 10,
                    debit: null,
                    currency: 'EUR',
                },
                pocket2: {
                    active: true,
                    credit: null,
                    debit: 2,
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
                credit: null,
                debit: null,
                currency: 'EUR',
            },
            pocket2: {
                active: false,
                credit: null,
                debit: null,
                currency: 'USD',
            }
        });
    });

    it('should handle SET_CURRENCY ', () => {
        expect(
            reducer({
                pocket1: {
                    active: false,
                    credit: 10,
                    debit: null,
                    currency: 'EUR',
                },
                pocket2: {
                    active: true,
                    credit: null,
                    debit: 2,
                    currency: 'USD',
                }
            }, {
                type: types.SET_CURRENCY,
                payload: {
                    pocketKey: 'pocket1',
                    currency: 'GBR'
                }
            })
        ).toEqual({
            pocket1: {
                active: false,
                credit: 10,
                debit: null,
                currency: 'GBR',
            },
            pocket2: {
                active: true,
                credit: null,
                debit: 2,
                currency: 'USD',
            }
        });
    });

    it('should handle CREDIT_CHANGE ', () => {
        expect(
            reducer({
                pocket1: {
                    active: false,
                    credit: 10,
                    debit: null,
                    currency: 'EUR',
                },
                pocket2: {
                    active: true,
                    credit: null,
                    debit: 2,
                    currency: 'USD',
                }
            }, {
                type: types.CREDIT_CHANGE,
                payload: {
                    pocketKey: 'pocket2',
                    value: '51',
                    rate: 0.376
                }
            })
        ).toEqual({
            pocket1: {
                active: false,
                credit: null,
                debit: 19.18,
                currency: 'EUR',
            },
            pocket2: {
                active: true,
                credit: 51,
                debit: null,
                currency: 'USD',
            }
        });
    });
});
