// mapActions.js

import fetchRegionData from '../api/api';

// Define action types
export const UPDATE_REGION = 'UPDATE_REGION';
export const UPDATE_REGION_INFO = 'UPDATE_REGION_INFO';
export const TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE';

// Action creators
export const updateRegion = (selectedRegion) => ({
  type: UPDATE_REGION,
  payload: selectedRegion,
});

export const updateRegionInfo = (regionInfo) => ({
  type: UPDATE_REGION_INFO,
  payload: regionInfo,
});

export const toggleNightMode = () => ({
  type: TOGGLE_NIGHT_MODE,
});
export const fetchRegionInfo = (selectedRegion) => async (dispatch) => {
    try {
      // Perform the async operation here, e.g., fetching data from an API
      const regionInfo = await fetchRegionData(selectedRegion);
      // Dispatch regular action to update the Redux store with the fetched data
      dispatch(updateRegionInfo(regionInfo));
    } catch (error) {
      console.error('Error fetching region information:', error);
    }
  };
