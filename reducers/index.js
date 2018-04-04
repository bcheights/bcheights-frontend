import { combineReducers } from "redux"

import singleArticle from "./singleArticleReducer";
import featuredArticle from "./featuredArticleReducer";

export default combineReducers({
  singleArticle,
  featuredArticle
});