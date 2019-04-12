import constants from "./constants";

/* constants */
import PlayerState from "@constants/playerState";

const initialState = {
  state: PlayerState.NULL,
  station: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_PLAYER_STATE:
      return Object.assign({}, state, { state: payload });

    case constants.PLAYER_PLAY_STATION:
      return Object.assign({}, state, { station: payload });

    default: {
      return state;
    }
  }
};
