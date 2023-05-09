import React, { FC } from "react";
import styles from "./SinglePost.module.scss";

import classNames from "classnames";
import { Theme, useThemeContext } from "src/components/context/Theme/Context";
import { PostProps } from "./type";
import {  TwiterIcon } from "../../assets/icons/Twiter";
import { FacebookIcon } from "../../assets/icons/Facebook";
import {MoreIcon} from "../../assets/icons/MoreIcon";
import { Link, useNavigate } from "react-router-dom";
import { RoutesList } from "src/pages/Router";
import PostModal from "src/pages/Home/SelectedPostModal";

const SinglePostList: FC<PostProps> = ({ post }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const { imageUrl, summary, title, id } = post;
  const ScreenWidth = window.screen.availWidth;
  return (
    <div
      className={classNames(styles.Post, {
        [styles.Post_Dark]: isDarkTheme,
      })}
    >
      <PostModal/>
      <div
        className={classNames(styles.Post_container, {
          [styles.Post_container_Dark]: isDarkTheme,
        })}
      >
        <div className={styles.Post_container_buttonAndIDWrap}>
          <div className={styles.linkWrap}>
            <Link
              to={RoutesList.Home}
              className={classNames(styles.linkWrap, {
                [styles.linkWrap_Dark]: isDarkTheme,
              })}
            >
              Home |
            </Link>
          </div>
          <div
            className={classNames(styles.idWrap, {
              [styles.idWrap_Dark]: isDarkTheme,
            })}
          >{`Post ${id}`}</div>
        </div>
        <div
          className={classNames(styles.Post_container_titleWrap, {
            [styles.Post_container_titleWrap_Dark]: isDarkTheme,
          })}
        >
          {title}
        </div>
        <div className={styles.Post_container_imgWrap}>
          <img
            className={styles.Post_container_imgWrap_img}
            src={imageUrl || undefined}
            alt={"#"}
          />
        </div>
        <div className={styles.Post_container_textWrap}>
          <div
            className={classNames(styles.Post_container_textWrap_text, {
              [styles.Post_container_textWrap_text_Dark]: isDarkTheme,
            })}
          >
            {summary}
          </div>
        </div>
        <div className={styles.Post_container_buttonsWrap}>
          <div className={styles.Post_container_buttonsWrap_rightSide}>
            <div
              className={classNames(styles.Post_container_buttonsWrap_buttons, {
                [styles.Post_container_buttonsWrap_buttons_Dark]: isDarkTheme,
              })}
            >
              <a target="_blank" href="https://twitter.com/">
                <TwiterIcon/>
              </a>
            </div>
            <div
              className={classNames(styles.Post_container_buttonsWrap_buttons, {
                [styles.Post_container_buttonsWrap_buttons_Dark]: isDarkTheme,
              })}
            >
              <a
                target="_blank"
                href="https://ru-ru.facebook.com/"
              >
                <FacebookIcon />
              </a>
            </div>
            <div
              className={classNames(styles.Post_container_buttonsWrap_buttons, {
                [styles.Post_container_buttonsWrap_buttons_Dark]: isDarkTheme,
              })}
            >
              <MoreIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostList;