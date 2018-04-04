import axios from "axios"
import { api } from "../services"

export function fetchSingleArticle(slug) {
  return async (dispatch) => {
    dispatch({type: "FETCH_ARTICLE_REQUEST"})
    
    try {
      // GET Initial post data by matching the slug
      const articleData = await api.getSingleArticle(slug)

      dispatch({
        type: "FETCH_ARTICLE_SUCCESS",
        payload: articleData,
      })
    } catch(err) {
      dispatch({
        type: "FETCH_ARTICLE_FAILURE",
        payload: err,
      })
    }
  }
}

export function fetchFeatured() {
  return { type: 'FETCH_FEATURED_REQUEST' }
}