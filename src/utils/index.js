export const roundNumber = (number, digitsAfterDecimal = 2) => {
    return Number(number.toFixed(digitsAfterDecimal));
};
