import { create } from "apisauce";
import { ActivateUserData, UserPayloadData, SignInUserData } from "../reducers/@types";
import { PER_PAGE } from "src/utils/constants";

const API = create({
  baseURL: "https://api.spaceflightnewsapi.net",
});

const getPostsList = ( _start: number, _sort?: string, publishedAt_gt?: string) => {
  return API.get("/v3/articles/", ({_limit:PER_PAGE, _start, _sort, publishedAt_gt}));
};
const getBlogPostList = (
  _start: number,
  _sort?: string,
  publishedAt_gt?: string
) => {
  return API.get("/v3/blogs", {
    _limit: PER_PAGE,
    _start,
    _sort,
    publishedAt_gt,
  });
};
const getPost = (id: string) => {
  return API.get(`/v3/articles/${id}/`);
};
const getBlogPost = (id: string) => {
  return API.get(`/v3/blogs/${id}`);
};

const getPostsCount = () => {
  return API.get("/v3/articles/count");
};
const getBlogPostCount = () => {
  return API.get("/v3/blogs/count");
};

const getSearchedPosts = (title_contains: string, _start: number) => {
  return API.get("/v3/articles", { title_contains, _limit: PER_PAGE, _start });
};

const getSearchedBlogPosts = (title_contains: string, _start: number) => {
  return API.get("/v3/blogs", { title_contains, _limit: PER_PAGE, _start });
};

const getPostsByButton = (
  _start: number,
  publishedAt_gt?: string,
  _sort?: string
) => {
  return API.get("/v3/articles", {
    _limit: PER_PAGE,
    _start,
    _sort,
    publishedAt_gt,
  });
};
const getPostBlogListByButton = (
  _start: number,
  publishedAt_gt?: string,
  _sort?: string
) => {
  return API.get("/v3/blogs", {
    _limit: PER_PAGE,
    _start,
    _sort,
    publishedAt_gt,
  });
};


const signUpUser = (data: UserPayloadData) => {
  return API.post("/auth/users/", data);
};

const activateUser = (data: ActivateUserData) => {
  return API.post("/auth/users/activation/", data);
};
const signInUser = (data: SignInUserData) => {
  return API.post("/auth/jwt/create/", data);
};

const getUserInfo = (token: string) => {
  return API.get(
    "/auth/users/me/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};
const getMyPosts= (token: string) => {
  return API.get("/blog/posts/my_posts/",
      {},
      {headers: { Authorization: `Bearer ${token}`,
          },
      }
  );
};
const refreshToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
};
const addPost = (token: string, data: any) => {
  return API.post("/blog/posts/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default {
  getPostsList,
  getPost,
  
  getPostsCount,
  getSearchedPosts,
  getBlogPostList,
  getBlogPostCount,
  getBlogPost,
  getSearchedBlogPosts,
  getPostsByButton,
  getPostBlogListByButton,

  signUpUser,
  activateUser,
  signInUser,
  getUserInfo,
  verifyToken,
  getMyPosts,
  refreshToken,
  addPost,
};