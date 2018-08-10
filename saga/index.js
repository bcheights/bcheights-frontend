import { takeEvery, put, call, fork, select, all } from "redux-saga/effects";
import { wp } from "../services";

function* loadPost({ slug }) {
  try {
    // GET post data by matching the slug
    const postData = yield call(wp.fetchPostData, slug);

    yield put({
      type: "FETCH_POST_SUCCESS",
      payload: postData
    });
  } catch (error) {
    yield put({
      type: "FETCH_POST_FAILURE",
      payload: error
    });
  }
}

function* loadCollection({ tagID }) {
  try {
    // ID: 3 --> Featured Tag ID
    const actionType = getCollectionType(tagID);
    yield put({
      type: `FETCH_${actionType}_REQUEST`
    });
    const data = yield call(wp.fetchCollection, tagID);
    const collection = yield call(parsePostsToArray, data);
    // const collection = yield parsePostsToArray(data, 'collection', tagID)
    // Once finished --> Send success message
    yield put({
      type: `FETCH_${actionType}_SUCCESS`,
      payload: collection
    });
  } catch (error) {
    yield put({
      type: `FETCH_${actionType}_FAILURE`,
      payload: error
    });
  }
}

function getCollectionType(tagID, forSection = false) {
  switch (tagID) {
    case 5: {
      return forSection ? "Featured" : "FEATURED";
    }
    case 3: {
      return forSection ? "Top Story" : "TOP_STORY";
    }
  }
}

function* loadCategory({ categoryId }) {
  try {
    const data = yield call(wp.fetchCategory, categoryId);
    const collection = yield call(parsePostsToArray, data);
    // const collection = yield parsePostsToArray(data, 'category', categoryId)

    yield put({
      type: "FETCH_CATEGORY_SUCCESS",
      payload: collection
    });
  } catch (error) {
    yield put({
      type: "FETCH_CATEGORY_FAILURE",
      payload: error
    });
  }
}

function* loadSearch({ searchString }) {
  try {
    const data = yield call(wp.fetchSearch, searchString);
    const searchResults = yield call(parsePostsToArray, data);
    yield put({
      type: "FETCH_SEARCH_SUCCESS",
      payload: searchResults
    });
  } catch (error) {
    yield put({
      type: "FETCH_SEARCH_FAILURE",
      payload: error
    });
  }
}

function* parsePostsToArray(posts, type = "", id = 0) {
  let collection = [];
  let parsedData = {};
  let section = "";

  // if (type === 'collection') {
  //   section = getCollectionType(id, true)
  // } else if (type === 'category') {
  //   section = wp.getCategory(id)
  // }

  for (let i = 0; i < posts.length; i++) {
    // parsedData = yield wp.parseEmbedForArray(posts[i], section)
    parsedData = yield call(wp.parsePostData, posts[i]);
    collection.push(parsedData);
  }
  return collection;
}

// Watch for FETCH_FEATURED_REQUEST action and call loadFeatured
export default function* rootSaga() {
  yield takeEvery("FETCH_CATEGORY_REQUEST", loadCategory);
  yield takeEvery("FETCH_COLLECTION_REQUEST", loadCollection);
  yield takeEvery("FETCH_POST_REQUEST", loadPost);
  yield takeEvery("FETCH_SEARCH_REQUEST", loadSearch);
}
