import constants from "./constants";

/* constants */
import PlayerState from "@constants/playerState";

const initialState = {
  state: PlayerState.NULL,
  station: {},
  colors: {
    darkMuted: "",
    darkVibrant: "",
    lightMuted: "",
    lightVibrant: "",
    muted: "",
    vibrant: ""
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_PLAYER_STATE:
      return Object.assign({}, state, { state: payload });

    case constants.PLAYER_PLAY_STATION:
      return Object.assign({}, state, { station: payload });

    case constants.SET_PLAYER_COLORS:
      return Object.assign({}, state, { colors: payload });

    default: {
      return state;
    }
  }
};
