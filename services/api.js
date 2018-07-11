import axios from "axios"


const API_ROOT = 'http://18.219.114.43/wp-json/wp/v2'

async function callApi(endpoint) {
  const fullUrl = 
    (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  try {
    const res = await axios.get(fullUrl)
    return await res.data
  } catch(err) {
    console.log(err)
  }
}


// Main api services
export const fetchPost = slug => callApi(`/posts?slug=${slug}`)
export const fetchAuthor = id => callApi(`/users/${id}`)
export const fetchFeaturedImage = id => callApi(`/media/${id}`)
export const fetchCollection = id => callApi(`/posts?tags=${id}`)
export const fetchSearch = search => callApi(`/posts?search=${search}`)

// Returns post info from slug id
export const fetchPostData = async slug => {
  // GET Article Data & Featured Image & Author
  const post = await fetchPost(slug)
  return parsePostData(post[0])
}

// Extract the information from WP GET Request for single post
export const parsePostData = async post => {
  // GET Article Data & Featured Image & Author
  const mediaData  = await fetchFeaturedImage(post.featured_media)  
  const authorData = await fetchAuthor(post.author)

  // Set data to be dispatched
  return {
    title    : post.title.rendered,
    featured : mediaData.guid.rendered,
    author   : authorData.name,
    date     : post.modified,
    content  : changeRoute(post.content.rendered),
    excerpt  : changeRoute(post.excerpt.rendered),
    slug     : post.slug,
    category : post.category
  }
}

// Replace WP Instance endpoint with Front-End Route
export const changeRoute = string => {
  const endpoint = "http://18.219.114.43"

  return string.replace(endpoint, "http://localhost:3000")
}
