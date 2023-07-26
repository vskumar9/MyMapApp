// mapReducer.js

import { UPDATE_REGION, UPDATE_REGION_INFO, TOGGLE_NIGHT_MODE } from '../actions/mapActions';


const initialState = {
  selectedRegion: '',
  regionInfo: null,
  isNightMode: false,
  // other initial state properties
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case UPDATE_REGION_INFO:
      return {
        ...state,
        regionInfo: action.payload,
      };
      case TOGGLE_NIGHT_MODE:
        return {
          ...state,
          isNightMode: !state.isNightMode,
        };
    // handle other cases if needed
    default:
      return state;
  }
};

export default mapReducer;
