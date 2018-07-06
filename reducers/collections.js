export default function reducer(state={
  featured: [],
  topStory: [],
  related: [],
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
    case "FETCH_TOP_STORY_REQUEST": {
      return {
        ...state,
        topStory: [],
        fetching: true,
        fetched: false
      }
    }
    case "FETCH_TOP_STORY_SUCCESS": {
      return {
        ...state,
        topStory: action.payload,
        fetching: false,
        fetched: true
      }
    }
    case "FETCH_TOP_STORY_FAILURE": {
      return {
        ...state,
        topStory: [],
        error: action.payload,
        fetching: false,
        fetched: true
      }
    }
    default:
      return state
  }
  return state
}

