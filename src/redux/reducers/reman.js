import { GET_RESAURANT } from '../actions/types';

const defaultState = {
    restaurant: null,
    restaurantStatus: null,
};

export default function(state = defaultState, action){
    switch (action.type) {
        case GET_RESAURANT:
            return {
                ...state,
                restaurant: action.payload,
                restaurantStatus: action.status
            };

        default:
            return state;
    }
}