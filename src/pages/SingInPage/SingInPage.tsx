import React, { useState, useMemo, useEffect } from "react";
import styles from './SingInPage.module.scss';
import Title from "../../components/Title";
import TextInput from "../../components/Input";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../Router";
import { useDispatch } from "react-redux";
import { signInUser } from "src/redux/reducers/authSlice";

const SingInPage= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const onChangeEmail = (value: string) => {
    setEmail(value)
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onResetPass = () => {
    navigate(RoutesList.ResetPass);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { theme } = useThemeContext();
  const isDark = theme === Theme.Dark;

  const onSignInClick = () => {
    dispatch(
      signInUser({
        data: { email, password },
        callback: () => navigate(RoutesList.Home),
      })
    );
  };

  useEffect(() => {
    if (email.length === 0) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    if (password.length === 0) {
      setPasswordError("Password is required field");
    } else {
      setPasswordError("");
    }
  }, [password]);

  const isValid = useMemo(() => {
    return emailError.length === 0 && passwordError.length === 0;
  }, [emailError,passwordError ]);

  return (
    <div >
      <div
        className={classNames(styles.container, {
          [styles.containerDark]: isDark,
        })}
      >
        <div
          className={classNames(styles.backBtnHome, {
            [styles.backBtnHomeDark]: isDark,
          })}
        >
          Back to home
        </div>
        <div className={classNames(styles.title)}>
          <Title title={"Sing In"} />
        </div>
        <div className={styles.wrapperPage}>
          <div
            className={classNames(styles.inputContainer, {
              [styles.inputContainerDark]: isDark,
            })}
          >
            <TextInput
              value={email}
              onChange={onChangeEmail}
              type={"text"}
              title="Email"
              placeholder="Your email"
              errorText={emailError}
            />
            <TextInput
              value={password}
              onChange={onChangePassword}
              type={"password"}
              title="Password"
              placeholder="Your password"
              errorText={passwordError}
            />
            <div onClick={onResetPass}
              className={classNames(styles.forgotPassword, {
                [styles.darkThemeForgotPassword]: isDark,
              })}
            >
              Forgot password?
            </div>
            <div className={styles.button}>
              <Button
                title={"Sign In"}
                disabled={!isValid}
                onClick={onSignInClick}
                type={ButtonType.Primary}
              />
            </div>
            <div
              className={classNames(styles.singUp, {
                [styles.darkSingUp]: isDark,
              })}
            >
              Don’t have an account?{" "} 
              <NavLink to={RoutesList.SignUp} className={styles.navButton}>
              Sign Up
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingInPage;