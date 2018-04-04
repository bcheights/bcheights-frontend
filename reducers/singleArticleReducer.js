export default function reducer(state={
    title: "",
    featured: "",
    author: "",
    date: "",
    content: "",
    error: null,
    fetching: false,
    fetched: false,
  }, action) {
    switch(action.type) {
      case "FETCH_ARTICLE_REQUEST": {
        return {
          ...state,
          title: "",
          featured: "",
          author: "",
          date: "",
          content: "",
          fetching: true,
          fetched: false,
        };
      }
      case "FETCH_ARTICLE_SUCCESS": {
        return {
          ...state,
          title: action.payload.title,
          featured: action.payload.featured,
          author: action.payload.author,
          date: action.payload.date,
          content: action.payload.content,
          fetching: false,
          fetched: true,
        };
      }
      case "FETCH_ARTICLE_FAILURE": {
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

