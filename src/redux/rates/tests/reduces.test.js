import reducer from '../reducer';
import * as types from '../types';

describe('rates reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            'EUR': {},
            'USD': {},
            'GBP': {},
        })
    });

    it('should handle SET_RATES ', () => {
        expect(
            reducer({
                'EUR': { 'USD': 0.3, 'GBP': 0.2 },
                'USD': { 'EUR': 0.4, 'GBP': 0.1 },
                'GBP': { 'EUR': 0.4, 'USD': 0.4 },
            }, {
                type: types.SET_RATES,
                payload: {
                    rates: [
                        { base: 'EUR', rates: { 'USD': 0.8, 'GBP': 0.5 }},
                        { base: 'USD', rates: { 'EUR': 0.9, 'GBP': 0.6 }},
                    ],
                }
            })
        ).toEqual({
            'EUR': { 'USD': 0.8, 'GBP': 0.5 },
            'USD': { 'EUR': 0.9, 'GBP': 0.6 },
            'GBP': { 'EUR': 0.4, 'USD': 0.4 },
        });
    })
});
