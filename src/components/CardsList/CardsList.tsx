import React, { FC } from "react";
import classNames from "classnames";
import { CardListProps } from "./types";
import {Theme, useThemeContext} from "../../components/context/Theme/Context";
import { CardListType} from "../../utils/@globalTypes";
import Card from "../Card";
import EmptyState from "../EmptyState/EmptyState";
import styles from "./CardsList.module.scss";

const CardsList: FC<CardListProps> = ({ cardList }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div
      className={classNames(styles.mediumContainer, {
        [styles.mediumContainer_Dark]: isDarkTheme,
      })}
    >
      <div
        className={classNames(styles.mediumContainer, {
          [styles.mediumContainer_Card_Dark]: isDarkTheme,
        })}
      >
        {cardList.map((post, id) => {
          if (id >= 0 && id <= 12) {
            return <Card post={post} key={post.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default CardsList;