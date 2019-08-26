import { combineReducers } from "redux";
import changeApiData from "./changeApiData";

const allReducers = combineReducers({
  apiData: changeApiData
});

export default allReducers;
