import axios from "axios";
import CapsulesActionTypes from './capsules.type';


export const fetchCapsuleDataStart = () => ({
    type: CapsulesActionTypes.FETCH_CAPSULES_START
});

export const fetchCapsuleDataSuccess = (capsuleData) => ({
    type: CapsulesActionTypes.FETCH_CAPSULES_SUCCESS,
    payload:capsuleData
});

export const fetchCapsuleDataFailure = (errorMessage) => ({
    type:CapsulesActionTypes.FETCH_CAPSULES_FAILURE,
    payload:errorMessage
});

export const fetchCapsuleDataStartAsync = () => async(dispatch) =>  {
    try {
        dispatch(fetchCapsuleDataStart());
        const capsuleData = await axios.get('https://api.spacexdata.com/v3/capsules');
        console.log(capsuleData);
        dispatch(fetchCapsuleDataSuccess(capsuleData))
    } catch (error) {
        dispatch(fetchCapsuleDataFailure(error))
    }
   
};
