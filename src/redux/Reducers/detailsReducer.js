import { PLANET_DETAILS } from "../Actions/actionTypes";

const initialState= null;

const detailsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case PLANET_DETAILS:
            return action.payload;
    
        default:
            return state;
    }
}
export default detailsReducer