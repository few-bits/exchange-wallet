import axios from 'axios';

import { RATES_REQUEST_ENDPOINT } from '../Constants';

export const getRate = (base) => {
    const url = `${RATES_REQUEST_ENDPOINT}?base=${base}`;
    return axios.get(url).then((response) => {
        return response.data;
    });
};
