import { takeEvery, put, call, fork, select, all } from 'redux-saga/effects'
import { api } from '../services'


function* loadFeatured() {
  try {
    // ID: 3 --> Featured Tag ID
    const data = yield api.fetchFeaturedArticles(3)
    var featured = []
    var parsedData = {}

    // Parse each featured article
    for (let i=0; i < data.length; i++) {
      parsedData = yield api.parsePostData(data[i])
      featured.push(parsedData)
    }
    // Once finished --> Send success message
    yield put({type: 'FETCH_FEATURED_SUCCESS', payload: featured})
  } catch(error) {
    yield put({type: 'FETCH_FEATURED_FAILURE', error})
  }
}

// Watch for FETCH_FEATURED_REQUEST action and call loadFeatured
export default function* rootSaga() {
  yield takeEvery('FETCH_FEATURED_REQUEST', loadFeatured)
}