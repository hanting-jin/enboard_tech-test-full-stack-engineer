import CapsulesActionTypes from './capsules.type';

const INITIAL_STATE = {
    allCapsules: null,
    isFetching: false,
    errorMessage: null,
}

const capsulesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CapsulesActionTypes.FETCH_CAPSULES_START:
            return {
                ...state,
                isFetching:true,
            };
        case CapsulesActionTypes.FETCH_CAPSULES_SUCCESS:
            return {
                ...state,
                isFetching:false,
                allCapsules: action.payload,
            };
        case CapsulesActionTypes.FETCH_CAPSULES_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload,
            }
        default:
            return state;
    }
}

export default capsulesReducer;