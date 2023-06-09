import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ButtonSort,
  CardListType,
  CardPostType,
  GetPostsPayload,
  SearchPostsPayload,
  SetSearchedPostsPayload,
  TabsNames,
} from "../../utils";


type PostStateType = {
  selectedPost: CardPostType | null;
  cardsList: CardListType | [];
  isPostsLoading: boolean;
  singlePost: CardPostType | null;
  isPostLoading: boolean;
  cardsCount: number;
  isSearchPostsLoading: boolean;
  searchedPostsCount: number;
  searchedPosts: CardListType;
  activeTab: TabsNames;
  activeBtn: ButtonSort;
  postModalImgVisible: boolean;
};

const initialState: PostStateType = {
  cardsList: [],
  isPostsLoading: false,
  singlePost: null,
  isPostLoading: false,
  cardsCount: 0,
  isSearchPostsLoading: false,
  searchedPostsCount: 0,
  searchedPosts: [],
  activeTab: TabsNames.Articles,
  activeBtn: ButtonSort.Day,
  postModalImgVisible: false,
  selectedPost: null,
};

const postsReducer = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<GetPostsPayload>) => {},
    getPostsCount: (state, action: PayloadAction<number>) => {},
    setCardsCount: (state, action: PayloadAction<number>) => {
      state.cardsCount = action.payload;
    },
    setCardsList: (state, action: PayloadAction<CardListType>) => {
      state.cardsList = action.payload.map((card) => {
        return {
          ...card,
        };
      });
    },
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostsLoading = action.payload;
    },
    getBlogPosts: (state, action: PayloadAction<GetPostsPayload>) => {},
    getBlogPostsCount: (state, action: PayloadAction<number>) => {},
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardPostType>) => {
      state.singlePost = action.payload;
    },
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostLoading = action.payload;
    },
    getSingleBlogPost: (state, action: PayloadAction<string>) => {},

    searchForPosts: (state, action: PayloadAction<SearchPostsPayload>) => {},
    setSearchPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isSearchPostsLoading = action.payload;
    },
    setSearchedPosts: (
      state,
      action: PayloadAction<SetSearchedPostsPayload>
    ) => {
      const { isOverwrite, data } = action.payload;
      if (isOverwrite) {
        state.searchedPosts = data;
      } else {
        state.searchedPosts.push(...data);
      }
    },
    setSearchedPostsCount: (state, action: PayloadAction<number>) => {
      state.searchedPostsCount = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabsNames>) => {
      state.activeTab = action.payload;
    },
    searchForBlogPosts: (
      state,
      action: PayloadAction<SearchPostsPayload>
    ) => {},
    getPostsBtn: (state, action: PayloadAction<GetPostsPayload>) => {},
    setActiveBtn: (state, action: PayloadAction<ButtonSort>) => {
      state.activeBtn = action.payload;
    },
    getPostsBlogBtn: (state, action: PayloadAction<GetPostsPayload>) => {},
    setSelectedPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedPost = action.payload;
    },
    setPostModalImgVisible: (state, action: PayloadAction<boolean>) => {
      state.postModalImgVisible = action.payload;
    },
  },
});

export default postsReducer.reducer;

export const {
  getPosts,
  setCardsList,
  setPostsLoading,
  getSinglePost,
  setSinglePost,
  setSinglePostLoading,
  getPostsCount,
  setCardsCount,
  searchForPosts,
  setSearchPostsLoading,
  setSearchedPosts,
  setSearchedPostsCount,
  setActiveTab,
  getBlogPosts,
  getBlogPostsCount,
  getSingleBlogPost,
  searchForBlogPosts,
  getPostsBtn,
  getPostsBlogBtn,
  setSelectedPost,
  setPostModalImgVisible,
} = postsReducer.actions;



