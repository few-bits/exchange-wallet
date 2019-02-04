export const roundNumber = (number, digitsAfterDecimal = 2) => {
    return Number(Number(number).toFixed(digitsAfterDecimal));
};
