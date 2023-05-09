import { FC } from "react";
import styles from "./Card.module.scss";

import classNames from "classnames";
import {
  setPostModalImgVisible,
  setSelectedPost,
} from "../../redux/reducers/postSlice";
import Selectors from "src/redux/Selectors";
import { CardPostProps } from "./types";
import { useNavigate } from "react-router-dom";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { useDispatch, useSelector } from "react-redux";

const Card: FC<CardPostProps> = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const isVisible = useSelector (Selectors. getIsModalImgVisible);
  const { imageUrl, title, updatedAt, id } = post;

  function convertDate(updatedAt: string | number | Date) {
    const data = new Date(updatedAt);
    return data.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  const onNavigateToPost = () => {
    navigate(`/posts/${id}`);
  };

  const onClickMore = () => {
    dispatch(setSelectedPost(post));
    dispatch(setPostModalImgVisible(true));
  };

  return (
    <div
      className={classNames(styles.Wrap, {
        [styles.Wrap_Dark]: isDarkTheme,
      })}
    >
      <div className={styles.Wrap_imgWrap}>
        <img
          className={styles.Wrap_imgWrap_img}
          onClick={onClickMore}
          src={imageUrl}
          alt="#"
        />
      </div>
      <div
        className={classNames(styles.Wrap_textWrap, {
          [styles.Wrap_textWrap_Dark]: isDarkTheme,
        })}
        onClick={onNavigateToPost}
      >
        <div
          className={classNames(styles.Wrap_textWrap_dateText, {
            [styles.Wrap_textWrap_dateText_Dark]: isDarkTheme,
          })}
        >
          {convertDate(updatedAt)}
        </div>
        <div
          className={classNames(styles.Wrap_textWrap_titleText, {
            [styles.Wrap_textWrap_titleText_Dark]: isDarkTheme,
          })}
          onClick={onNavigateToPost}
        >
          {title.length > 67 ? title.substr(0, 67) + "..." : title}
        </div>
      </div>
    </div>
  );
};
export default Card;