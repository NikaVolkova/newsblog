import React,{FC,ReactNode,useState} from "react";
import ReactSwitch from 'react-switch';


import { SunIcon } from "../../assets/icons/SunIcon";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import styles from "./ThemeSwitcher.module.scss";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import classNames from "classnames";

const ThemeSwitcher = () => {
  const { theme, onChangeTheme } = useThemeContext();

  const onClick = (value: Theme) => () => onChangeTheme(value);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={onClick(Theme.Light)}
      >
        <SunIcon />
      </div>
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={onClick(Theme.Dark)}
      >
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwitcher;