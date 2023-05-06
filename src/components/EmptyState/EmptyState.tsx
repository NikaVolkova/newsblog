import React, { FC } from "react";
import classNames from "classnames";
import PostSelectors from "src/redux/reducers/postSlice";
import { NoContentIcon } from "src/assets/icons";
import { useSelector } from "react-redux";
import { Theme, useThemeContext } from "src/components/context/Theme/Context";
import styles from "./EmptyState.module.scss";
import { Link } from "react-router-dom";
import { RoutesList } from "src/pages/Router";

type EmptyStateProps = {
  title: string;
  description: string;
};

const EmptyState = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <NoContentIcon />
      
    </div>
  );
};

export default EmptyState;