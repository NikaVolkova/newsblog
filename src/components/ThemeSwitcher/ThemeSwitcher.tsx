import React,{FC,ReactNode,useState} from "react";
import ReactSwitch from 'react-switch';


import { SunIcon } from "../../assets/icons/SunIcon";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import styles from "./ThemeSwitcher.module.scss";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import classNames from "classnames";

enum ThemeSwitcherState{
  Ischecked="ischecked",
  Notchecked="notchecked",
}  

const ThemeSwitcher = () => {
  const { theme, onChangeTheme } = useThemeContext();
  const onClick = (value: Theme) => () => onChangeTheme(value);

  const [ThemeSwitcherchecked, setChecked] = useState(
    ThemeSwitcherState.Ischecked);
  const handleChange = () => {
    return ThemeSwitcherchecked===ThemeSwitcherState.Ischecked?
    setChecked(ThemeSwitcherState.Notchecked):setChecked(ThemeSwitcherState.Ischecked);
  }

  

  return (
    <div className={styles.container}>
       <ReactSwitch
        checked={ThemeSwitcherchecked===ThemeSwitcherState.Ischecked?(theme === Theme.Light):(theme === Theme.Dark)}
        onChange={handleChange}
        onClick={() => {
          setChecked(ThemeSwitcherchecked);
          onChangeTheme(
            ThemeSwitcherchecked === ThemeSwitcherState.Ischecked
              ? Theme.Dark
              : Theme.Light
          );
        }}
      />
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={onClick(Theme.Light)}
      >
        Light
      </div>
      <div
        className={classNames(styles.button, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={onClick(Theme.Dark)}
      >
        Dark
      </div>
    </div>
  );
}



export default ThemeSwitcher;