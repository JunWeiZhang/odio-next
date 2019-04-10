import constants from "./constants";

const initialState = {
  array: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_COUNTRY_STATIONS:
      return Object.assign({}, state, { array: payload });

    default: {
      return state;
    }
  }
};
