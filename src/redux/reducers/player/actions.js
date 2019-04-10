import constants from "./constants";

export const setPlayerState = state => ({
  type: constants.SET_PLAYER_STATE,
  payload: state
});
