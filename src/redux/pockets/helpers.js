export const getPocketData = (sourcePocket, destPocket, value, rate) => {
    const doubleValue = Number(value);

    if (sourcePocket === destPocket) {
        return {
            credit: Number(doubleValue.toFixed(2)),
            debit: null,
        };
    } else {
        return {
            credit: null,
            debit: Number((doubleValue * rate).toFixed(2)),
        };
    }
};
