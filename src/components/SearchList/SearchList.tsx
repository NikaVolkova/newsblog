import React, { FC } from "react";

import styles from "./SearchList.module.scss";
import classNames from "classnames";
import Card from "../Card";
import EmptyState from "../EmptyState";
import { Theme, useThemeContext } from "../context/Theme/Context";
import { SearchListProps } from "./type";

const SearchList: FC<SearchListProps> = ({ searchedPosts }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return searchedPosts && searchedPosts.length > 0 ? (
    <div
      className={classNames(styles.listWrap, {
        [styles.listWrap_Dark]: isDarkTheme,
      })}
    >
      <div
        className={classNames(styles.listWrap_Card, {
          [styles.listWrap_Card_Dark]: isDarkTheme,
        })}
      >
        {searchedPosts.map((post, id) => {
          return <Card  key={post.id} post={post}  />;
        })}
      </div>
    </div>
  ) : (
    <EmptyState
     
    />
  );
};

export default SearchList;