import * as RequestActions from "@redux/request/actions";
import Config from "@config/config";

// export const getCountries = () => {
//   return get("countries").then(countries =>
//     Promise.resolve(Utils.normalizeCountries(countries))
//   );
// };

// export const stationsByCountry = (country, offset) => {
//   return get(
//     `stations/bycountryexact/${country}?limit=${
//       Config.STATIONS.LAZY_LOADING_COUNT
//     }${offset ? `&offset=${offset}` : ""}`
//   ).then(stations => Promise.resolve(Utils.setStationsISO(stations)));
// };

export const getCountries = (data = {}, options = {}) =>
  RequestActions.ApiCall({
    baseURL: Config.radio.baseURL,
    url: "/countries",
    method: "POST",
    data,
    ...options
  });

export const getStationsByCountry = (data = {}, options = {}) =>
  RequestActions.ApiCall({
    baseURL: Config.radio.baseURL,
    url: `stations/bycountryexact/${data.country}?limit=${
      Config.stations.load_limit
    }${data.offset ? `&offset=${data.offset}` : ""}`,
    method: "POST",
    data,
    ...options
  });
