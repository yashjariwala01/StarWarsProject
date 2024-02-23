import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../Actions/actionTypes";

const intialState={
    loading:false,
    data: [],
    error: '',
}

const coursesReducer = (state=intialState, action)=>{
    switch (action.type) {
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                data: action.payload,
                error : '',
            }
        case FETCH_FAILURE:
            return{
                ...state,
                loading:false,
                data: [],
                error: action.payload,
            }
        default:
            return state;
    }
}

export default coursesReducer;