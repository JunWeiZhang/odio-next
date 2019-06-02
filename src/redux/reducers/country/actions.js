import * as CountriesAPI from "@api/countries";
import constants from "./constants";

/* Utils */
import * as Normalize from "@utils/normalize";

/* Constants */
import Fetch from "@constants/fetch";

export const getStations = (country, offset = 0) => dispatch => {
  dispatch(setFetchingStatus(Fetch.FETCHING));
  return dispatch(CountriesAPI.getStationsByCountry({ country, offset }))
    .then(stations => {
      offset
        ? dispatch(addStations(Normalize.stations(stations)))
        : dispatch(setStations(Normalize.stations(stations)));
      dispatch(setFetchingStatus(Fetch.FETCHED));
      return Promise.resolve(stations);
    })
    .catch(e => {
      dispatch(setFetchingStatus(Fetch.FETCHING_ERROR));
    });
};

export const reset = () => ({ type: constants.RESET_COUNTRY_REDUCER });

export const setFetchingStatus = status => ({
  type: constants.COUNTRY_FETCH_STATUS,
  payload: status
});

export const setStations = stationsArray => ({
  type: constants.SET_COUNTRY_STATIONS,
  payload: stationsArray
});

export const addStations = stationsArray => ({
  type: constants.ADD_COUNTRY_STATIONS,
  payload: stationsArray
});
