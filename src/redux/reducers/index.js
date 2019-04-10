import { combineReducers } from "redux";

/* reducers */
import countries from "./countries/reducer";
import country from "./country/reducer";
import player from "./player/reducer";

export default combineReducers({
  countries,
  country,
  player
});
