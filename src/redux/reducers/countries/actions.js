import constants from "./constants";

/* Utils */
import * as Normalize from "@utils/normalize";

/* API's */
import * as CountriesAPI from "@api/countries";

export const getCountries = () => dispatch => {
  return dispatch(CountriesAPI.getCountries()).then(countries => {
    dispatch(setCountries(Normalize.countries(countries)));
  });
};

const setCountries = payload => ({
  type: constants.SET_COUNTRIES,
  payload
});
