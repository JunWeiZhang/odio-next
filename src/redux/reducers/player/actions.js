import constants from "./constants";

export const setPlayerState = state => ({
  type: constants.SET_PLAYER_STATE,
  payload: state
});

export const setStation = station => ({
  type: constants.PLAYER_PLAY_STATION,
  payload: station
});

export const setPlayerColors = colors => ({
  type: constants.SET_PLAYER_COLORS,
  payload: colors
});
