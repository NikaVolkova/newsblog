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

export interface SetPostsListPayload {
  CardPostType: CardListType;
  postsCount: number;
  cardsList: CardListType;
};



export type SearchPostsPayload = {
  title_contains: string;
  _start: number;
  isOverwrite: boolean;
};

export type SetSearchedPostsPayload = {
  data: CardListType;
  isOverwrite: boolean;
};

  export type SignUpUserPayload = PayloadWithCallback<UserPayloadData>;
  export type ActivateUserPayload = PayloadWithCallback<ActivateUserData>;
  export type SignInUserPayload = PayloadWithCallback<SignInUserData>;
  export type AddPostPayload = PayloadWithCallback<any>;
 