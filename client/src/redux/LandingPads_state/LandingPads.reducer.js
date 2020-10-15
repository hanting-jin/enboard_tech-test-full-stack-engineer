import LandingPadsActionTypes from './LandingPads.type'

const INITIAL_STATE = {
    landingPad: null,
    errorMessage: true,
    isFetching: false,
    landingPadID:null
}

const landingPadReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        case LandingPadsActionTypes.FETCH_LANDINGPADS_START:
        return { 
            ...state, 
            isFetching: true
        };
        case LandingPadsActionTypes.FETCH_LANDINGPADS_SUCCESS:
            return {
              ...state,
              isFetching: false,
              landingPad: action.payload
            };    
            case LandingPadsActionTypes.FETCH_LANDINGPADS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage:action.payload,
            };
    
        default:
            return state;
    }
    
}

export default landingPadReducer;