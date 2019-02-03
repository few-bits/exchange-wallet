import { roundNumber } from '../../utils';

export const getPocketAmount = (sourcePocket, value) => {
    const doubleValue = Number(value);
    const { active, rate } = sourcePocket;

    if (active) {
        return {
            amount: roundNumber(doubleValue),
        };
    } else {
        return {
            amount: roundNumber(doubleValue * rate),
        };
    }
};
