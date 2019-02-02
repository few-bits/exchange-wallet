import { getPocketData } from '../helpers';

describe('getPocketData', () => {
    it('pocket1 && pocket2', () => {
        const result = {
            credit: null,
            debit: 10* 0.5,
        };
        expect(getPocketData('pocket1', 'pocket2', '10', 0.5)).toEqual(result);
    });

    it('pocket1 && pocket1', () => {
        const result = {
            credit: 10,
            debit: null,
        };
        expect(getPocketData('pocket1', 'pocket1', '10', 0.5)).toEqual(result);
    });

    it('pocket1 credit as string', () => {
        const result = {
            credit: 10.26,
            debit: null,
        };
        expect(getPocketData('pocket1', 'pocket1', '10.26', 0.5)).toEqual(result);
    });
});
