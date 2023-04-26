import React, { useMemo, useState, KeyboardEvent  } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ButtonType } from "../../../utils/@globalTypes";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Button from "src/components/Button";
import Input from "src/components/Input";
import { UserIcon, SearchIcon, } from "src/assets/icons";
//import BurgerBtn from "../../../components/BurgerButton/BurgerButton";

import UserName from "src/components/UserName";

import { RoutesList } from "../../Router";


import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, logoutUser } from "src/redux/reducers/authSlice";

import { getSearchedPosts } from "src/redux/reducers/postSlice";


const Header = () => {
  const [isOpened, setOpened] = useState(false);
  const [isInputOpened, setInputOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
const userInfo = useSelector(AuthSelectors.getUserInfo);
  const dispatch = useDispatch();

  const onClickMenuButton = () => {
    setOpened(!isOpened);
  };

 const onAuthButtonClick = () => {
  navigate(RoutesList.SignIn);
 };

  //const onLogoutClick = () => {
  //  dispatch(logoutUser());
  //};

  const onClickSearchButton = () => {
    setInputOpened(!isInputOpened);
    if (isInputOpened) {
      dispatch(getSearchedPosts({searchValue, isOverwrite: true, offset: 0 }));
      setSearchValue('');
      navigate(RoutesList.Search);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearchButton();
    }
  };
  const navButtonsList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      //...(!isLoggedIn
       // ?[]
       // :[
      //{
       // title: "Add Post",
      //  key: RoutesList.AddPost,
    //  },
   // ]),
    ],
    [isLoggedIn]
  );

  return (
    <>
      <div className={styles.container}>
      <div className={styles.infoContainer}>
        <Button
          title=""
          onClick={onClickMenuButton}
          type={ButtonType.Primary}
          className={styles.buttonBlogo}
        />
        {isInputOpened && (
            <Input
              value={searchValue}
              onChange={setSearchValue}
              onKeyDown={onKeyDown}
              inputClassName={styles.input}
              placeholder="Search..."
            />
          )}
        </div>
    <div className={styles.infoContainer}>
          <Button
            title={<SearchIcon />}
            onClick={onClickSearchButton}
            type={ButtonType.Primary}
            className={styles.button}
          />
        <div className={styles.button} onClick={onAuthButtonClick}>
          {isLoggedIn && userInfo ? (
            <UserName userName={userInfo?.username} /> ) : (<UserIcon /> )}
        </div>
    </div>  
        
      </div>
      {isOpened && (
        <div className={styles.menuContainer}>
          <div className={styles.actionsContainer}>
          
          {isLoggedIn && (
              <div className={styles.authButton}>
                {userInfo ? <UserName userName={userInfo?.username} /> : null}
              </div>
            )}

            {navButtonsList.map(({ key, title }) => {
              return (
                <NavLink
                  to={key}
                  key={key}
                  className={classNames(styles.navButton, {
                    [styles.activeNavButton]: location.pathname === key,
                  })}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
          <div>
           

          </div>
        </div>
      )}
    </>
  );
};

export default Header;