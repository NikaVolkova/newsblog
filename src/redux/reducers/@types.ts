import { CardListType } from "src/utils/@globalTypes";
export type UserPayloadData = {
    username: string;
    email: string;
    password: string;
  };
  
  export type ActivateUserData = {
    uid: string;
    token: string;
  };
  
  export type SignInUserData = {
    email: string;
    password: string;
  };
  export type PayloadWithCallback<Data> = {
    data: Data;
    callback: () => void;
  };
  
export type GetAllPostsPayload = {
  offset: number;
  search?: string;
  ordering?: string;
};

export interface SetAllPostsPayload {
  cardList: CardListType;
  postsCount: number;
};
export type GetSearchPostsPayload = {
  searchValue: string;
  isOverwrite: boolean;
  offset: number;
};

export interface SetSearchedPostsPayload extends SetAllPostsPayload {
  isOverwrite: boolean;
}
  export type SignUpUserPayload = PayloadWithCallback<UserPayloadData>;
  export type ActivateUserPayload = PayloadWithCallback<ActivateUserData>;
  export type SignInUserPayload = PayloadWithCallback<SignInUserData>;
  export type AddPostPayload = PayloadWithCallback<any>;
 