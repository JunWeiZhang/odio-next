import constants from "./constants";

/* Constants */
import Fetch from "@constants/fetch";

const initialState = {
  stations: [],
  fetchStatus: Fetch.INITIAL
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_COUNTRY_STATIONS:
      return Object.assign({}, state, { stations: payload });

    case constants.ADD_COUNTRY_STATIONS: {
      return Object.assign({}, state, {
        stations: [...state.stations, ...payload]
      });
    }

    case constants.COUNTRY_FETCH_STATUS: {
      return Object.assign({}, state, { fetchStatus: payload });
    }

    case constants.RESET_COUNTRY_REDUCER: {
      return Object.assign({}, state, { stations: [], fetchStatus: null });
    }

    default: {
      return state;
    }
  }
};
