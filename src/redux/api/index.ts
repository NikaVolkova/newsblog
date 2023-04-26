import { create } from "apisauce";
import { ActivateUserData, UserPayloadData, SignInUserData } from "../reducers/@types";
import { PER_PAGE } from "src/utils/constants";

const API = create({
  baseURL: "https://api.spaceflightnewsapi.net",
});

const getPosts = ( offset?: number, search?: string, ordering?: string) => {
  return API.get("/v3/blogs/", ({_limit:PER_PAGE, _start: offset, _contains: search, _sort: ordering}));
};

const getSinglePost = (id: string) => {
  return API.get(`/v3/blogs/${id}/`);
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
  getPosts,
  getSinglePost,
  signUpUser,
  activateUser,
  signInUser,
  getUserInfo,
  verifyToken,
  getMyPosts,
  refreshToken,
  addPost,
};