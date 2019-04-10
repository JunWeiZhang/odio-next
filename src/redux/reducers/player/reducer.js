import constants from "./constants";

/* constants */
import PlayerState from "@constants/playerState";

const initialState = {
  state: PlayerState.NULL
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_PLAYER_STATE:
      return Object.assign({}, state, { state: payload });

    default: {
      return state;
    }
  }
};
