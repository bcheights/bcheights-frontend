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
  } catch(err) {
    yield put({
      type: "FETCH_POST_FAILURE",
      payload: err,
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
    let collection = []
    let parsedData = {}

    // Parse each collection article
    for (let i=0; i < data.length; i++) {
      parsedData = yield api.parsePostData(data[i])
      collection.push(parsedData)
    }
    // Once finished --> Send success message
    yield put({
      type: `FETCH_${actionType}_SUCCESS`, 
      payload: collection
    })
  } catch(error) {
    yield put({
      type: `FETCH_${actionType}_FAILURE`, 
      error
    })
  }
}

function getCollectionType(tagID) {
  switch(tagID) {
    case 3: {
      return 'FEATURED'
    }
    case 6: {
      return 'TOP_STORY'
    }
  }
}

// Watch for FETCH_FEATURED_REQUEST action and call loadFeatured
export default function* rootSaga() {
  yield takeEvery('FETCH_COLLECTION_REQUEST', loadCollection)
  yield takeEvery('FETCH_POST_REQUEST', loadPost)
}