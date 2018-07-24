export function fetchPost(slug) {
  return {type: "FETCH_POST_REQUEST", slug}
}

export function fetchCollection(tagID) {
  return {type: 'FETCH_COLLECTION_REQUEST', tagID}
}

export function fetchSearch(searchString) {
  return {type: 'FETCH_SEARCH_REQUEST', searchString}
}

export function fetchCategory(categoryId) {
  return {type: 'FETCH_CATEGORY_REQUEST', categoryId}
}