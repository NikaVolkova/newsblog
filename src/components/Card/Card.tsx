import React, { FC, useState } from "react";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { CardProps} from "./types";
import styles from "./Card.module.scss";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import { DislikeIcon } from "../../assets/icons/DislikeIcon";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { MoreIcon } from "../../assets/icons/MoreIcon";
import { AddBookmarkIcon } from "../../assets/icons";
import { SearchIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { CardSize } from "../../utils/@globalTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  LikeStatus,
  PostSelectors,
  setAddPost,
  setPostVisibility,
  setSelectedPost,
  setStatus,
} from "../../redux/reducers/postSlice";


const Card: FC<CardProps> = ({ card, size }) => {
  const { title, text, date, image, id } = card;

  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isVisible = useSelector(PostSelectors.getVisibleSelectedModal);
  const isDark = theme === Theme.Dark;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;
  const isSearch = size === CardSize.Search;
  
  const onStatusClick = (status: LikeStatus) => () => {
    dispatch(setStatus({ status, card }));
  };
  const onClickMore=()=>{
    dispatch(setSelectedPost(card));
    dispatch(setPostVisibility(true));
  };
  const onClickBookmark = () => {
    dispatch(setAddPost({card}));
  };
  const onTitleClick = () => {
    navigate(`/blog/${id}`);
  };
  const likedPosts = useSelector(PostSelectors.getLikedPosts);
  const dislikedPosts = useSelector(PostSelectors.getDislikedPosts);
  const addPost = useSelector(PostSelectors.getAddPost);
  const addPostIndex = addPost.findIndex((post) => post.id === card.id);
  const likedIndex = likedPosts.findIndex((post) => post.id === card.id);
  const dislikedIndex = dislikedPosts.findIndex((post) => post.id === card.id);

  return (
    <div
      className={classNames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSmall,
        [styles.darkContainer]: isDark,
        [styles.searchContainer]: isSearch,
      })}
    >
      <div
        className={classNames(styles.infoContainer, {
          [styles.mediumInfoContainer]: isMedium,
          [styles.smallInfoContainer]: isSmall,
          [styles.searchInfoContainer]: isSearch,
        })}
      >
        <div className={styles.mainInfoContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.date}>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.mediumTitle]: isMedium || isSmall || isSearch,
                [styles.darkContainer]: isDark,
              })}
              onClick={onTitleClick}
            >
              {title}
            </div>
          </div>
          {size === CardSize.Large && <div className={styles.text}>{text}</div>}
        </div>
        <img
          src={image}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall || isSearch,
          })}
        />
      </div>
      <div className={styles.footer}>
        <div className={classNames(styles.iconContainer, {
            [styles.darkIconContainer]: isDark,
          })}>
          <div onClick={onStatusClick(LikeStatus.Like)}>
            <LikeIcon />
            {likedIndex > -1 && 1}
          </div>
          <div onClick={onStatusClick(LikeStatus.Dislike)}>
            <DislikeIcon />
            {dislikedIndex > -1 && 1}
          </div>
        </div>
        <div  className={classNames(styles.iconContainer, {
            [styles.darkIconContainer]: isDark,
          })}>
          <div onClick={onClickBookmark} >
            {addPostIndex > -1 ? <AddBookmarkIcon/>: <BookmarkIcon /> }
          </div>
          {!isVisible && <div onClick={onClickMore}>
            <MoreIcon />
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Card;