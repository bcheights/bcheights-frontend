export function fetchPost(slug) {
  return {type: "FETCH_POST_REQUEST", slug}
}

export function fetchCollection(tagID) {
  return {type: 'FETCH_COLLECTION_REQUEST', tagID}
}