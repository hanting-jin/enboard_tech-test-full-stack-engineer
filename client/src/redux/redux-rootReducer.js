import {combineReducers} from 'redux';

import capsuleReducer from './Capsules_state/capsules.reducer';
import landingPadsReducer from './LandingPads_state/LandingPads.reducer'

const rootReducer = combineReducers({
    capsule: capsuleReducer,
    landingPad:landingPadsReducer
})

export default rootReducer;