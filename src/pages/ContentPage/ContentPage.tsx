import React, { FC, useEffect } from "react";

import { CardPostType,CardListType } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./ContentPage.module.scss";
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

const ContentPage= () => {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const post = useSelector(Selectors.getSinglePost);
  const isLoading = useSelector(Selectors.getSinglePostLoading);
  const activeTab = useSelector(Selectors.getActiveTab);
  const postsList = useSelector(Selectors.getSinglePost);
  const cardsList = useSelector(Selectors.getCardsList);
  const isVisible = useSelector(Selectors.getIsModalImgVisible);
  const isDark = theme === Theme.Dark;
  const { id } = params;


const getCurrentList = () => {
      return postsList;
};
const onTitleClick = () => {
  navigate(`/blog/${id}`);
};
useEffect(() => {
  if (id) {
    dispatch(
      activeTab === TabsNames.News ? getSingleBlogPost(id) : getSinglePost(id)
    );
  }
}, [id]);

return !isLoading && post ? (
  <>
    <SinglePostList post={post} />
    <RecomendPostsList cardList={cardsList} />
  </>
) : (
  <div className={styles.lottie_container}>
    <Loader />
  </div>
);
}


export default ContentPage;