import { takeEvery, put, call, fork, select, all } from 'redux-saga/effects'
import { api } from '../services'


function* loadPost({ slug }) {
  try {
    // GET post data by matching the slug
    const postData = yield api.fetchPostData(slug)

    yield put({
      type: "FETCH_POST_SUCCESS",
      payload: postData,
    })
  } catch(error) {
    yield put({
      type: "FETCH_POST_FAILURE",
      payload: error,
    })
  }
}

function* loadCollection({ tagID }) {
  try {
    // ID: 3 --> Featured Tag ID
    const actionType = getCollectionType(tagID)
    yield put({
      type: `FETCH_${actionType}_REQUEST`
    })
    const data = yield api.fetchCollection(tagID)
    const collection = yield parsePostsToArray(data)
    // Once finished --> Send success message
    yield put({
      type: `FETCH_${actionType}_SUCCESS`, 
      payload: collection
    })
  } catch(error) {
    yield put({
      type: `FETCH_${actionType}_FAILURE`, 
      payload: error
    })
  }
}

function getCollectionType(tagID) {
  switch(tagID) {
    case 3: { return 'FEATURED' }
    case 6: { return 'TOP_STORY' }
  }
}

function* loadCategory({ categoryId }) {
  try {
    const data = yield api.fetchCategory(categoryId)
    const collection = yield parsePostsToArray(data)

    yield put({
      type: 'FETCH_CATEGORY_SUCCESS',
      payload: collection
    })
  } catch(error) {
    yield put({
      type: 'FETCH_CATEGORY_FAILURE',
      payload: error
    })
  }
}

function* loadSearch({ searchString }) {
  try {
    const data = yield api.fetchSearch(searchString)
    const searchResults = yield parsePostsToArray(data)
    yield put({
      type: 'FETCH_SEARCH_SUCCESS',
      payload: searchResults
    })
  } catch(error) {
    yield put({
      type: 'FETCH_SEARCH_FAILURE',
      payload: error
    })
  }
}

function* parsePostsToArray(posts) {
  let collection = []
  let parsedData = {}

  for (let i=0; i < posts.length; i++) {
    parsedData = yield api.parsePostData(posts[i])
    collection.push(parsedData)
  }
  return collection
}

// Watch for FETCH_FEATURED_REQUEST action and call loadFeatured
export default function* rootSaga() {
  yield takeEvery('FETCH_CATEGORY_REQUEST', loadCategory)
  yield takeEvery('FETCH_COLLECTION_REQUEST', loadCollection)
  yield takeEvery('FETCH_POST_REQUEST', loadPost)
  yield takeEvery('FETCH_SEARCH_REQUEST', loadSearch)
}