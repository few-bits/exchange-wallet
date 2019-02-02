import { getPocketAmount } from '../helpers';

describe('getPocketAmount', () => {
    it('pocket1 && pocket2', () => {
        const result = {
            amount: 10* 0.5,
        };
        expect(getPocketAmount({ active: false, rate: 0.5 }, '10')).toEqual(result);
    });

    it('pocket1 && pocket1', () => {
        const result = {
            amount: 10,
        };
        expect(getPocketAmount({ active: true, rate: 0.5 }, '10')).toEqual(result);
    });

    it('pocket1 credit as string', () => {
        const result = {
            amount: 10.26,
        };
        expect(getPocketAmount({ active: true, rate: 0.5 }, '10.26')).toEqual(result);
    });
});
