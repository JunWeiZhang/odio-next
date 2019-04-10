import * as CountriesAPI from "@api/countries";
import constants from "./constants";

/* Utils */
import * as Normalize from "@utils/normalize";

export const getStations = country => dispatch => {
  return dispatch(CountriesAPI.getStationsByCountry({ country })).then(
    stations => {
      dispatch(setStations(Normalize.stations(stations)));
    }
  );
};

export const setStations = stations => ({
  type: constants.SET_COUNTRY_STATIONS,
  payload: stations
});
