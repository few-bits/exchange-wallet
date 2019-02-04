import { roundNumber } from '../../utils';

export const getRawRates = (currencies, serverData) => {
    if (!Array.isArray(serverData)) {
        return {};
    }

    return currencies.reduce((memo, baseCurrency) => {
        const currentRates = serverData.find(({ base }) => base === baseCurrency);

        if (currentRates !== undefined && currentRates.rates) {
            const roundedRates = Object.keys(currentRates.rates).reduce((memo, key) => {
                memo[key] = roundNumber(currentRates.rates[key]);
                return memo;
            }, {});
            memo = {
                ...memo,
                [baseCurrency]: roundedRates,
            };
        }
        return memo;
    }, {});
};

export const patchRates = (rates) => {
    const delta = getDelta();
    return rates.map((rate) => {
        const patchedRate = Object.keys(rate.rates).reduce((memo, currency) => {
            memo[currency] = rate.rates[currency] + delta;
            return memo;
        },{});

        return {
            ...rate,
            rates: patchedRate,
        }
    });
};

const getDelta = (min = 0.1, max = 0.5) => {
    return Math.random() * (max - min);
};
