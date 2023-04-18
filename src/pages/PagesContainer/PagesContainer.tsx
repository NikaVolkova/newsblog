import React from "react";
import { Outlet} from "react-router-dom";
import classNames from "classnames";
import Home from "../Home";
import styles from "./PagesContainer.module.scss";
import { Theme, useThemeContext } from "src/components/context/Theme/Context";
import Header from "./Header";
import ThemeSwitcher from "src/components/ThemeSwitcher";

const PagesContainer = () => {

  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
      id="scrollableDiv"
    >
      <Header />
           <div className={styles.mainInfo}>
        <Outlet />
        <div className={styles.footer}>
          <div>©2022 Blogolog</div>
          <div>Dark theme
          <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesContainer;