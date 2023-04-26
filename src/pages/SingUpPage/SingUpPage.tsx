import React, { useEffect, useMemo, useState  } from "react";
import styles from './SingUpPage.module.scss';
import Title from "../../components/Title";
import TextInput from "../../components/Input";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../Router";
import { useDispatch } from "react-redux";
import {  signUpUser } from "../../redux/reducers/authSlice";

const SingUpPage= () => {
    const { theme } = useThemeContext();
    const isDark = theme === Theme.Dark;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const onChangeName = (value: string) => {
      setName(value)
    };

    const [email, setEmail] = useState("");
    const onChangeEmail = (value: string) => {
      setEmail(value)
    };
    const [password, setPassword] = useState("");
    const onChangePassword = (value: string) => {
      setPassword(value);
    };


    const [confirmPassword, setConfirmPW] = useState("");
    const onChangeConfirmPW = (value: string) => {
      setConfirmPW(value);
    };

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const onSignUpClick = () => {
      dispatch(
        signUpUser({
          data: { username: name, email, password },
          callback: () => navigate(RoutesList.SignIn),
        })
      );
    };
  
    useEffect(() => {
      if (name.length === 0) {
        setNameError("Name is required field");
      } else {
        setNameError("");
      }
    }, [name]);
  
    useEffect(() => {
      if (email.length === 0) {
        setEmailError("Email is required field");
      } else {
        setEmailError("");
      }
    }, [email]);
  
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
      return (
        nameError.length === 0 &&
        emailError.length === 0 &&
        passwordError.length === 0
      );
    }, [nameError,emailError,passwordError]);
    
    // Используем, если не надо показывать никаких ошибок пользователю
  // const isValid = useMemo(() => {
  //   return (
  //     name.length > 0 &&
  //     email.length > 0 &&
  //     password.length > 0 &&
  //     confirmPassword.length > 0 &&
  //     password === confirmPassword
  //   );
  // }, [name, email, password, confirmPassword]);

    return(
    <div>
      <div
        className={classNames(styles.containerSingUp, {[styles.containerDark]: isDark,
        })}
      >
        
       <NavLink
        to={RoutesList.Home}
        className={classNames(styles.backBtnHome, {
          [styles.backHomeDark]: isDark,
        })}
      >
        Back to home
      </NavLink>
        
        <div className={classNames(styles.titleSuccess)}>
          <Title title={"Sign Up"} />
        </div>
         <div className={styles.wrapperSingUp}>
            <div
            className={classNames(styles.inputContainer, {
              [styles.inputContainerDark]: isDark,})}>
            
            <TextInput
              value={name}
              onChange={onChangeName}
              type={"text"}
              title="Name"
              placeholder="Your name" 
              errorText={nameError}
                />
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
            <TextInput
              value={confirmPassword}
              onChange={onChangeConfirmPW}
              type={"password"}
              title="Confirm Password"
              placeholder="Confirm Password"
              errorText={passwordError}
            />
               <div className={styles.button}>
               <Button
              title={"Sign Up"}
              disabled={!isValid}
              onClick={onSignUpClick}
              type={ButtonType.Primary}
            />
            </div>
            <div
              className={classNames(styles.singUp, {
                [styles.darkSingUp]: isDark,})} >
                  Already have an account?{" "}
            <NavLink to={RoutesList.SignIn} className={styles.navButton}>
              Sign In
            </NavLink>
            </div>
            </div>
         </div>
      </div>
     </div>
    );
};

export default SingUpPage;