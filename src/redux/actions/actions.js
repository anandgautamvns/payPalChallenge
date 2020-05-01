import Axios from "axios";

import { LOADING, ERROR, SUCCESS } from '../../constant';

import { GET_RESAURANT } from './types';

export function getResaurants() {
    return async (dispatch) => {
        dispatch({ type: GET_RESAURANT, status: LOADING });
        try {
            let response;
            response = await Axios.get('http://starlord.hackerearth.com/TopRamen', {
            });
            dispatch({ type: GET_RESAURANT, status: SUCCESS, payload: response.data });
        }
        catch (error) {
            dispatch({ type: GET_RESAURANT, status: ERROR });
        }
    }
}
