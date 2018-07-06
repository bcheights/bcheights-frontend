import { combineReducers } from "redux"

import post from "./post";
import collections from "./collections";

export default combineReducers({
  post,
  collections
});