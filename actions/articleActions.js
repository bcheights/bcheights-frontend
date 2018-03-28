import axios from "axios";

export function fetchArticle(slug) {
  return async (dispatch) => {
    dispatch({type: "FETCH_ARTICLE_START"});
    
    try {
      // GET Initial post data by matching the slug
      const url = 
        `http://18.219.114.43/wp-json/wp/v2/posts?slug=${slug}`;
      const res = await axios.get(url);
      const data = await res.data[0];

      // Update URL Strings with post data
      const mediaURL = 
        `http://18.219.114.43/wp-json/wp/v2/media/${data.featured_media}`;
      const authorURL = 
        `http://18.219.114.43/wp-json/wp/v2/users/${data.author}`;

      // GET Featured Image 
      const mediaRes = await axios.get(mediaURL);
      const mediaData = await mediaRes.data;

      // GET Author name
      const authorRes = await axios.get(authorURL);
      const authorData = await authorRes.data;

      // Set data to be dispatched
      const articleData = {
        title: data.title.rendered,
        featured: mediaData.guid.rendered,
        author: authorData.name,
        date: data.modified,
        content: data.content.rendered
      };

      dispatch({
        type: "FETCH_ARTICLE_FULFILLED",
        payload: articleData,
      });
    } catch(err) {
      dispatch({
        type: "FETCH_ARTICLE_REJECTED",
        payload: err,
      });
    }
  }
}