export default function reducer(state={
    articles: [],
    articleContent: {
      title: "",
      featured: "",
      author: "",
      date: "",
      content: "",
    },
    error: null,
    fetching: false,
    fetched: false,
  }, action) {
    switch(action.type) {
      case "FETCH_ARTICLE_START": {
        return {
          ...state, 
          fetching: true,
          fetched: false,
        };
      }
      case "FETCH_ARTICLE_FULFILLED": {
        return {
          ...state,
          articleContent: {
            title: action.payload.title,
            featured: action.payload.featured,
            author: action.payload.author,
            date: action.payload.date,
            content: action.payload.content,
          },
          fetching: false,
          fetched: true,
        };
      }
      case "FETCH_ARTICLE_REJECTED": {
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

