import API from "../api";
import { takeLatest, all, call, put, takeLeading} from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";
import { AddPostPayload, } from "src/redux/reducers/@types";
import { GetPostsPayload,SearchPostsPayload} from "../../utils";
import { 
  getBlogPosts,
  getBlogPostsCount,
  getPosts,
  getPostsBlogBtn,
  getPostsBtn,
  getPostsCount,
  getSingleBlogPost,
  getSinglePost,
  searchForBlogPosts,
  searchForPosts,
  setCardsCount,
  setCardsList,
  setPostsLoading,
  setSearchedPosts,
  setSearchedPostsCount,
  setSearchPostsLoading,
  setSinglePost,
  setSinglePostLoading,
} from "../reducers/postSlice";
import { AllPostsResponse } from "./@types";
import { CardListType, CardPostType } from "../../utils/@globalTypes";
import callCheckingAuth from "src/redux/sagas/callCheckingAuth";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));
  const { _start, _sort, publishedAt_gt } = action.payload;
  const { status, data, problem }: ApiResponse<CardListType> = yield call(
    API.getPostsList,
    _start,
    _sort,
    publishedAt_gt
  );
  if (status === 200 && data) {
    yield put(setCardsList(data ));
  } else {
    console.warn("Error getting all posts", problem);
  }
  yield getPostsCountWorker();
  yield put(setPostsLoading(false));
}
function* getPostsCountWorker() {
  const { data, status, problem } = yield call(API.getPostsCount);
  if (status === 200 && data) {
    yield put(setCardsCount(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
}
function* getSinglePostWorker(action:PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem}: ApiResponse<CardPostType> = yield call(
    API.getPost,action.payload
  );
  if (status === 200 && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error getting post", problem);
  }
  yield put(setSinglePostLoading(false));
}

function* getBlogPostsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));
  const { _start, _sort, publishedAt_gt } = action.payload;
  const { data, status, problem } = yield call(
    API.getBlogPostList,
    _start,
    _sort,
    publishedAt_gt
  );
  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
  yield getBlogPostsCountWorker();
  yield put(setPostsLoading(false));
}
function* getBlogPostsCountWorker() {
  const { data, status, problem } = yield call(API.getBlogPostCount);
  if (status === 200 && data) {
    yield put(setCardsCount(data));
  } else {
    console.log("The number of posts was not received", problem);
  }
}

function* getSearchedPostsWorker(action: PayloadAction<SearchPostsPayload>) {
  yield put(setSearchPostsLoading(true));
  const { _start, isOverwrite, title_contains } = action.payload;

  const { data, status, problem } = yield call(
    API.getSearchedPosts,
    title_contains,
    _start
  );
  if (status === 200 && data) {
    yield put(setSearchedPosts({ data: data, isOverwrite }));
  } else {
    console.warn("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}

function* getSingleBlogPostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(API.getBlogPost, action.payload);
  if (status === 200 && data) {
    console.log(data);
    yield put(setSinglePost(data));
  } else {
    console.log("Sorry, but the card was not received", problem);
  }
  yield put(setSinglePostLoading(false));
}


function* getSearchedBlogPostsWorker(
  action: PayloadAction<SearchPostsPayload>
) {
  yield put(setSearchPostsLoading(true));
  const { _start, isOverwrite, title_contains } = action.payload;

  const { data, status, problem } = yield call(
    API.getSearchedBlogPosts,
    title_contains,
    _start
  );
  if (status === 200 && data) {
    yield put(setSearchedPosts({ data: data, isOverwrite }));
  } else {
    console.log("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}

function* getPostByBtnWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));

  const { _start, _sort, publishedAt_gt } = action.payload;

  const { data, status, problem } = yield call(
    API.getPostsByButton,
    _start,
    publishedAt_gt,
    _sort
  );

  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
  yield put(setPostsLoading(false));
}

function* getPostBlogByBtnWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));

  const { _start, _sort, publishedAt_gt } = action.payload;

  const { data, status, problem } = yield call(
    API.getPostBlogListByButton,
    _start,
    publishedAt_gt,
    _sort
  );

  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
  yield put(setPostsLoading(false));
}


export default function* postsSaga() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest (getSinglePost, getSinglePostWorker),
    takeLatest(getPostsCount, getPostsCountWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),
    takeLatest(getBlogPosts, getBlogPostsWorker),
    takeLatest(getBlogPostsCount, getBlogPostsCountWorker),
    takeLatest(getSingleBlogPost, getSingleBlogPostWorker),
    takeLatest(searchForBlogPosts, getSearchedBlogPostsWorker),
    takeLatest(getPostsBtn, getPostByBtnWorker),
    takeLatest(getPostsBlogBtn, getPostBlogByBtnWorker),
    
  ]);
}