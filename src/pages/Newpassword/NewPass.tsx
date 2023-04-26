import React, { useEffect, useMemo, useState } from "react";
import styles from './NewPass.module.scss'
import TextInput from "../../components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/utils/@globalTypes";

const NewPass = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangePW = (value: string) => {
    setPassword(value);
  };
  const onChangeConfirmPW = (value: string) => {
    setConfirmPassword(value);
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords must match");
    } else if (password.length === 0 || confirmPassword.length === 0) {
      setPasswordError("Password is required field");
    } else {
      setPasswordError("");
    }
  }, [confirmPassword, password]);


  const isValid = useMemo(() => {
    return passwordError.length === 0;
  }, [passwordError]);

  return (
   
      <div className={styles.inputContainer}>
        <TextInput
          value={password}
          onChange={onChangePW}
          type={"password"}
          title="Password"
          placeholder="Your password"
          errorText={passwordError}
        />
        <TextInput
          value={confirmPassword}
          onChange={onChangeConfirmPW}
          type={"password"}
          title="Confirm password"
          placeholder="Confirm your password"
          errorText={passwordError}
        />

      <div className={styles.buttonNewPass}>
        <Button
          title={"Set password "}
          disabled={!isValid}
          onClick={() => {}}
          type={ButtonType.Primary}
        />
      </div>
      </div>
  
  );
};

export default NewPass;