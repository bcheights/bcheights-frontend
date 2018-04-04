import axios from "axios"
import { api } from "../services"

export function fetchPost(slug) {
  return {type: "FETCH_ARTICLE_REQUEST", slug}
}

export function fetchFeatured() {
  return { type: 'FETCH_FEATURED_REQUEST' }
}