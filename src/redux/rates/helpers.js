export const getRawRates = (currencies, serverData) => {
    if (!Array.isArray(serverData)) {
        return {};
    }

    return currencies.reduce((memo, baseCurrency) => {
        const currentRates = serverData.find(({ base }) => base === baseCurrency);

        if (currentRates !== undefined && currentRates.rates) {
            memo = {
                ...memo,
                [baseCurrency]: currentRates.rates,
            };
        }
        return memo;
    }, {});
};
