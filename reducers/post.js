export default function reducer(state={
    title: "",
    featured: "",
    author: "",
    date: "",
    content: "",
    category: "",
    error: null,
    fetching: false,
    fetched: false,
  }, action) {
    switch(action.type) {
      case "FETCH_POST_REQUEST": {
        return {
          ...state,
          title: "",
          featured: "",
          author: "",
          date: "",
          content: "",
          category: "",
          related: [],
          fetching: true,
          fetched: false,
        };
      }
      case "FETCH_POST_SUCCESS": {
        return {
          ...state,
          title: action.payload.title,
          featured: action.payload.featured,
          author: action.payload.author,
          date: action.payload.date,
          content: action.payload.content,
          category: action.payload.category,
          fetching: false,
          fetched: true,
        };
      }
      case "FETCH_POST_FAILURE": {
        return {
          ...state,
          error: action.payload,
          fetching: false,
        };
      }
      default:
        return state;
    }
    return state;
}

