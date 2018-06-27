import { combineReducers } from "redux"

import post from "./postReducer";
import collections from "./collectionsReducer";

export default combineReducers({
  post,
  collections
});