export default function reducer(
  state = {
    category: [],
    featured: [],
    topStory: [],
    search: [],
    related: [],
    error: null,
    fetching: false,
    fetched: false
  },
  action
) {
  switch (action.type) {
    case "FETCH_FEATURED_REQUEST": {
      return {
        ...state,
        featured: [],
        fetching: true,
        fetched: false
      };
    }
    case "FETCH_FEATURED_SUCCESS": {
      return {
        ...state,
        featured: action.payload,
        fetching: false,
        fetched: true
      };
    }
    case "FETCH_FEATURED_FAILURE": {
      return {
        ...state,
        featured: [],
        error: action.payload,
        fetching: false,
        fetched: false
      };
    }
    case "FETCH_TOP_STORY_REQUEST": {
      return {
        ...state,
        topStory: [],
        fetching: true,
        fetched: false
      };
    }
    case "FETCH_TOP_STORY_SUCCESS": {
      return {
        ...state,
        topStory: action.payload,
        fetching: false,
        fetched: true
      };
    }
    case "FETCH_TOP_STORY_FAILURE": {
      return {
        ...state,
        topStory: [],
        error: action.payload,
        fetching: false,
        fetched: true
      };
    }
    case "FETCH_SEARCH_REQUEST": {
      return {
        ...state,
        search: [],
        fetching: true,
        fetched: false
      };
    }
    case "FETCH_SEARCH_SUCCESS": {
      return {
        ...state,
        search: action.payload,
        fetching: false,
        fetched: true
      };
    }
    case "FETCH_SEARCH_FAILURE": {
      return {
        ...state,
        search: [],
        error: action.payload,
        fetching: false,
        fetched: true
      };
    }
    case "FETCH_CATEGORY_REQUEST": {
      return {
        ...state,
        category: [],
        fetching: true,
        fetched: false
      };
    }
    case "FETCH_CATEGORY_SUCCESS": {
      return {
        ...state,
        category: action.payload,
        fetching: false,
        fetched: true
      };
    }
    case "FETCH_CATEGORY_FAILURE": {
      return {
        ...state,
        category: [],
        error: action.payload,
        fetching: false,
        fetched: true
      };
    }
    default:
      return state;
  }
}
