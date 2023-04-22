import { CardListType } from "../../utils/@globalTypes";

export type AllPostsResponse = {
  id: 	number;
  title:string;
  url:string;
  imageUrl:string;
  summary:string;
  publishedAt:number;
  launches:CardListType;
  events:CardListType;
 
};
export type SignUpUserResponse = {
  username: string;
  email: string;
  id: number;
};
export type SignInResponse = {
  access: string;
  refresh: string;
};

export type UserInfoResponse = {
  username: string;
  email: string;
  id: number;
};