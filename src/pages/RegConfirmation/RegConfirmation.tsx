import React, { useState } from "react";
import styles from "./RegConfirmation.module.scss";
import Title from "../../components/Title";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { RoutesList } from "../Router";
import { useDispatch } from "react-redux";
import { activateUser } from "../../redux/reducers/authSlice";

const RegConfirmation = () => {
    const { theme } = useThemeContext();
    const isDark = theme === Theme.Dark;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { uid, token } = useParams();
    
  const onConfirmButtonClick = () => {
    if (uid && token) {
      dispatch(
        activateUser({
          data: { uid, token },
          callback: () => navigate(RoutesList.Success),
        })
      );
    }
  };
    return (
        <div>
          <div
            className={classNames(styles.containerRegConfirm, {[styles.containerDark]: isDark,
            })}
          >
            <div
              className={classNames(styles.backBtnHome, {[styles.backHomeDark]: isDark,
              })}
            >
          <NavLink
          to={RoutesList.Home}
          className={classNames(styles.backHome, {
            [styles.backHomeDark]: isDark,
          })}
        >
          Back to home
        </NavLink>
            </div>
            <div className={classNames(styles.titleRegConfirm)}>
              <Title title={"Registration Confirmation"} />
            </div>
            <div className={styles.wrapperRegConfirm}>
              <div
                className={classNames(styles.emailText, { [styles.emailTextDark]: isDark,
                })}
              >
    
                <div className={styles.textComment}>{" "}
            Please activate your account with the activation link in the email.
            Please, check your email</div>
               
                <div className={styles.button}>
                  <Button
                    title={"Confirm"} onClick={onConfirmButtonClick} type={ButtonType.Primary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default RegConfirmation;