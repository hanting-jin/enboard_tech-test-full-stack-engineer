import axios from "axios";
import LandingPadsActionTypes from './LandingPads.type'

const fetchLandingPadStart = () => ({
    type: LandingPadsActionTypes.FETCH_LANDINGPADS_START,
  });

const fetchLandingPadSuccess = (landingPad) => ({
    type: LandingPadsActionTypes.FETCH_LANDINGPADS_SUCCESS,
    payload: landingPad,
});

const fetchLandingPadFailure = (errorMessage) => ({
    type: LandingPadsActionTypes.FETCH_LANDINGPADS_FAILURE,
    payload: { errorMessage },
  });

  export const fetchLandingPadDataStartAsync = () => async (dispatch) => {
    try {
      dispatch(fetchLandingPadStart());
      const landingPad  = await axios.get("https://api.spacexdata.com/v3/landpads");
      dispatch(fetchLandingPadSuccess())
  } catch (error) {
      dispatch(fetchLandingPadFailure(error))
  }
  };