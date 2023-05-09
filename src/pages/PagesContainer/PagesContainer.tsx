import React, { useState }  from "react";
import classNames from "classnames";
import Home from "../Home";
import styles from "./PagesContainer.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import { Theme, useThemeContext } from "src/components/context/Theme/Context";
import Header from "./Header";
import ThemeSwitcher from "src/components/ThemeSwitcher";
import { RoutesList } from "../Router";

const PagesContainer = () => {

  const { theme } = useThemeContext();
  const [openInput, setOpenInput] = useState(false);
  const location = useLocation();
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
      id="scrollableDiv"
    >
      <Header onClick={() => setOpenInput(!openInput)}
       openInput={openInput} />
         {location.pathname === RoutesList.Home }
           <div className={styles.mainInfo}>
        <Outlet />
        <div className={styles.footer}>
          <div className={styles.blogolog}>©2023 Blogolog</div>
          <div className={styles.switcher}>Dark Theme<ThemeSwitcher /></div>
          
        </div>
      </div>
    </div>
  );
};

export default PagesContainer;