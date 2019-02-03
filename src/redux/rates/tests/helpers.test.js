import { getRawRates } from '../helpers';

describe('getRate', () => {
    it('full data', () => {
        const currencies = ['USD', 'EUR'];
        const serverData = [
            { base: 'EUR', rates: { 'USD': 1.2 } },
            { base: 'USD', rates: { 'EUR': 0.9 } },
        ];
        const result = {
            'EUR': { 'USD': 1.2 },
            'USD': { 'EUR': 0.9},
        };
        expect(getRawRates(currencies, serverData)).toEqual(result);
    });

    it('partial data', () => {
        const currencies = ['USD', 'EUR'];
        const serverData = [
            { base: 'USD', rates: { 'EUR': 0.9 } },
        ];
        const result = {
            'USD': { 'EUR': 0.9},
        };
        expect(getRawRates(currencies, serverData)).toEqual(result);
    });

    it('no data', () => {
        const currencies = ['USD', 'EUR'];
        const serverData = [];
        const result = {};
        expect(getRawRates(currencies, serverData)).toEqual(result);
    });

    it('wrong data', () => {
        const currencies = ['USD', 'EUR'];
        const serverData = [
            { base: 'USD', ratesw: { 'EUR': 0.9 } },
        ];
        const result = {};
        expect(getRawRates(currencies, serverData)).toEqual(result);
    });

    it('wrong data [undefined]', () => {
        const currencies = ['USD', 'EUR'];
        const serverData = undefined;
        const result = {};
        expect(getRawRates(currencies, serverData)).toEqual(result);
    });
});
