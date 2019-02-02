export const getPocketData = (sourcePocket, destPocket, value, rate) => {
    const filtredValue = value.match(/^\d+(?:\.\d{1,2})?/);
    const doubleValue = Number(filtredValue ? filtredValue[0] : 0);

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
