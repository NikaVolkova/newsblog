import React, { useState } from "react";
import classNames from "classnames";

import styles from "./ResetPass.module.scss";
import Button from "src/components/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import TextInput from "../../components/Input";

const ResetPass = () => {
  const { theme } = useThemeContext();
  const isDark = theme === Theme.Dark;
  const [email, setEmail] = useState("");
  


  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  return (
    
      <div
        className={classNames(styles.resetPassText, {
          [styles.resetPassDark]: isDark,
        })}
      >
        You will receive an email 
        example@gmail.com with a link to reset your
        password!
        <div
          className={styles.inputContainer}
        >
          <TextInput
            value={email}
            onChange={onChangeEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
          />
        </div>
        <div className={styles.buttonResetPass}>
          <Button
            title={"Go to home"}
            onClick={() => {}}
            type={ButtonType.Primary}
          />
        </div>
      </div>
    
  );
};

export default ResetPass;