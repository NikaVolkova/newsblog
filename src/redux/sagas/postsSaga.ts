import API from "../api";
import { takeLatest, all, call, put, takeLeading} from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";
import { AddPostPayload,GetAllPostsPayload,GetSearchPostsPayload, } from "src/redux/reducers/@types";
import { addNewPost,getAllPosts, setAllPosts, setAllPostsLoading, getSinglePost,setSinglePost,getMyPosts,setMyPosts,getSearchedPosts,setSearchedPosts} from "../reducers/postSlice";
import { AllPostsResponse } from "./@types";
import { CardListType, CardType } from "../../utils/@globalTypes";
import callCheckingAuth from "src/redux/sagas/callCheckingAuth";

function* getAllPostsWorker(action: PayloadAction<GetAllPostsPayload>) {
  yield put(setAllPostsLoading(true));
  const { offset,search, ordering } = action.payload;
  const { ok, data, problem }: ApiResponse<CardListType> = yield call(
    API.getPosts,
    offset,
    search,
    ordering
  );
  if (ok && data) {
    yield put(setAllPosts(data ));
  } else {
    console.warn("Error getting all posts", problem);
  }
  yield put(setAllPostsLoading(false));
}
function* getSinglePostWorker(action:PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<CardType> = yield call(
    API.getSinglePost,action.payload
  );
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error getting post", problem);
  }
}
//function* getMyPostsWorker() {
 // const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield callCheckingAuth(
 //   API.getMyPosts
  //);
 // if (ok && data) {
 //   yield put(setMyPosts(data.results));
 // } else {
 //   console.warn("Error getting my posts", problem);
 // }
//}
function* getSearchedPostsWorker(action: PayloadAction<GetSearchPostsPayload>) {
  const { searchValue, isOverwrite, offset } = action.payload;
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getPosts,
    offset,
    searchValue
  );
  if (ok && data) {
    yield put(
      setSearchedPosts({
        cardList: data.launches,
        postsCount: data.id,
        isOverwrite,
      })
    );
  } else {
    console.warn("Error getting all posts", problem);
  }
}

function* addNewPostWorker(action: PayloadAction<AddPostPayload>) {
  const { data, callback } = action.payload;
 // const { ok, problem }: ApiResponse<undefined> = yield callCheckingAuth(
 //   API.addPost,
  //  data
 // );
 // if (ok) {
 //   callback();
 // } else {
 //   console.warn("Error adding post", problem);
//  }
}

export default function* postsSaga() {
  yield all([
    takeLatest(getAllPosts, getAllPostsWorker),
    takeLatest (getSinglePost, getSinglePostWorker),
  //  takeLatest(getMyPosts, getMyPostsWorker),
    takeLeading(getSearchedPosts, getSearchedPostsWorker),
    takeLatest(addNewPost, addNewPostWorker),
  ]);
}