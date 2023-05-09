import { RootState } from "./store";

export default {
    getCardsList: (state: RootState) => state.posts.cardsList,
    getPostsLoading: (state: RootState) => state.posts.isPostsLoading,
    getSinglePostLoading: (state: RootState) => state.posts.isPostLoading,
    getSinglePost: (state: RootState) => state.posts.singlePost,
    getSingleBlogPost: (state: RootState) => state.posts.singlePost,
    getCardsCount: (state: RootState) => state.posts.cardsCount,
    getSearchString: (state: any) => state.postsReducer.searchString,
    getSearchedPostsLoading: (state: RootState) =>
      state.posts.isSearchPostsLoading,
    getSearchedPosts: (state: RootState) => state.posts.searchedPosts,
    getSearchedPostsCount: (state: RootState) => state.posts.searchedPostsCount,
    getActiveTab: (state: RootState) => state.posts.activeTab,
    getBlogPost: (state:RootState) => state.posts.cardsList,
    getBlogCardsCount: (state: RootState) => state.posts.cardsCount,
    getSearchedBlogPosts: (state: any) => state.postsReducer.searchedPosts,
    getActiveBtn: (state: any) => state.postsReducer.activeBtn,
    setUser: (state: any) => state.authReducer.user,
    getIsModalImgVisible: (state: RootState) => state.posts.postModalImgVisible,
    getSelectedPost: (state:RootState) => state.posts.selectedPost,
    getUser: (state: RootState) => state.auth.user,
  };