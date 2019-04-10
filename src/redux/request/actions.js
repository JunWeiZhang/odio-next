import Constants from "./constants";

export const ApiCall = payload => {
  return {
    type: Constants.API,
    payload: { ...payload }
  };
};
