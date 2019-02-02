export const getPocketAmount = (sourcePocket, value) => {
    const doubleValue = Number(value);
    const { active, rate } = sourcePocket;

    if (active) {
        return {
            amount: Number(doubleValue.toFixed(2)),
        };
    } else {
        return {
            amount: Number((doubleValue * rate).toFixed(2)),
        };
    }
};
