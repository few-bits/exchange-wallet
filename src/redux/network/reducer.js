import { GET_RATES_SUCCESS, GET_RATES_FAIL} from '../rates/types';
import {
    RESPONSE_STATUS_SUCCESS,
    RESPONSE_STATUS_FAIL,
} from '../../Constants';

export default (state = {
    getRatesStatus: null,
}, action) => {
    switch (action.type) {
        case GET_RATES_SUCCESS: {
            return {
                ...state,
                getRatesStatus: RESPONSE_STATUS_SUCCESS,
            };
        }
        case GET_RATES_FAIL: {
            return {
                ...state,
                getRatesStatus: RESPONSE_STATUS_FAIL,
            };
        }
        default:
            return state
    }
}
