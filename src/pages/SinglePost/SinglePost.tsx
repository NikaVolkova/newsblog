import React, { FC, useEffect } from "react";
import { CardPostType,CardListType } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getSingleBlogPost,  getSinglePost} from "src/redux/reducers/postSlice";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import {MoreIcon} from "../../assets/icons/MoreIcon";
import {  TwiterIcon } from "../../assets/icons/Twiter";
import { FacebookIcon } from "../../assets/icons/Facebook";
import Loader from "src/components/Loader/Loader";
import classNames from "classnames";
import RecomendPostsList from "../../components/RecomendedPostsList";
import SinglePostList from "src/components/SinglePost";
import {TabsNames} from "src/utils";
import { useDispatch, useSelector } from "react-redux";
import Selectors from "src/redux/Selectors";

type PostProps = {
  post: CardPostType;
};

const SinglePost=()=>{}



export default SinglePost;