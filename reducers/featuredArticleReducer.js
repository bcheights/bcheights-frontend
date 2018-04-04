export default function reducer(state={
  featured: [],
  error: null,
  fetching: false,
  fetched: false,
}, action) {
  switch(action.type) {
    case "FETCH_FEATURED_REQUEST": {
      return {
        ...state,
        featured: [],
        fetching: true,
        fetched: false
      }
    }
    case "FETCH_FEATURED_SUCCESS": {
      return {
        ...state,
        featured: action.payload,
        fetching: false,
        fetched: true
      }
    }
    case "FETCH_FEATURED_FAILURE": {
      return {
        ...state,
        featured: [],
        error: action.payload,
        fetching: false,
        fetched: false
      }
    }
    default:
      return state
  }
  return state
}

