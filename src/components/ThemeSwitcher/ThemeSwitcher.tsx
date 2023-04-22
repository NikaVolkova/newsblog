import React,{FC,ReactNode,useState} from "react";
import ReactSwitch from 'react-switch';

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

  const audio = new Audio("/path/to/sound.mp3");

  return (
    <div className={styles.container}>
      <div className={classNames(styles.button, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={() => {
          setChecked(ThemeSwitcherState.Notchecked);
          onChangeTheme(
            ThemeSwitcherchecked === ThemeSwitcherState.Ischecked
              ? Theme.Dark
              : Theme.Light
          );
        }}
>
  <ReactSwitch
     
      checked={ThemeSwitcherchecked===ThemeSwitcherState.Ischecked?(theme === Theme.Light):(theme === Theme.Dark)}
      onChange={handleChange}
      onClick={() => {
        setChecked(ThemeSwitcherState.Notchecked);
        onChangeTheme(
          ThemeSwitcherchecked === ThemeSwitcherState.Ischecked
            ? Theme.Dark
            : Theme.Light
        );
        audio.play();
      }}
    />

</div>
    </div>
  );
}


export default ThemeSwitcher;
