import React, { FC } from "react";
import styles from "./Select.module.scss";

import classNames from "classnames";
import { SelectProps } from "./types";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";

const Select: FC<SelectProps> = ({
  options,
  selectValue,
  onChange,
  disabled,
}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div
      className={classNames(styles.selectWrap, {
        [styles.selectWrap_Dark]: isDarkTheme,
      })}
    >
      <select
        value={selectValue}
        onChange={onChange}
        disabled={disabled}
        className={classNames(styles.select, {
          [styles.select_Dark]: isDarkTheme,
        })}
      >
        {options.map(({ key, title, value }) => {
          return (
            <option
              key={key}
              value={value}
              className={classNames(styles.option, {
                [styles.option_Dark]: isDarkTheme,
              })}
            >
              {title} Filter (A-Z)
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;