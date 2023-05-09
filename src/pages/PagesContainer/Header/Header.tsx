import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import {UserIcon} from "src/assets/icons/UserIcon";
import classNames from "classnames";
import Input from "../../../components/Input";
import Button from "src/components/Button/Button";
import UserName from "../../../components/UserName";
import ThemeSwitcher from "src/components/ThemeSwitcher";
import {ButtonType} from "src/utils/@globalTypes";
import Selectors from "../../../redux/Selectors";
import {
  searchForBlogPosts,
  searchForPosts,
} from "../../../redux/reducers/postSlice";
import { SearchIcon, HeadLogo, IconCancel } from "../../../assets/icons";
import { Theme, useThemeContext } from "../../../components/context/Theme/Context";
import { RoutesList } from "../../Router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TabsNames } from "../../../utils";
import { HeaderProps } from "./types";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "src/firebase";
import { useAuthValue } from "src/components/context/Auth/Context";

export type UserPropsType = {
  username: string;
};

const Header: FC<HeaderProps> = ({ onClick, openInput }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeTab = useSelector(Selectors.getActiveTab);
  const [value, setValue] = useState<string>("");
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
 
 
  const onAuthButtonClick = () => {
    navigate(RoutesList.SignIn);
  };
    // @ts-ignore
    const { currentUser } = useAuthValue();
     const [user] = useAuthState(auth);
 
    const [name, setName] = useState("");
  
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
  
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    useEffect(() => {
      if (!user) return ;
      fetchUserName();
    }, [user]);

    const onSignInClick = () => {
      navigate(RoutesList.SignIn);
    };
  
  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };

  const cliclToLogo = () => {
    navigate(RoutesList.Home);
  };


  const onClickSearchButton  = () => {
    if (value.length > 0) {
      dispatch(
        activeTab === TabsNames.News
          ? searchForBlogPosts({
              title_contains: value,
              _start: 0,
              isOverwrite: true,
            })
          : searchForPosts({
              title_contains: value,
              _start: 0,
              isOverwrite: true,
            })
      );
      navigate(RoutesList.Search, { state: { searchElement: value } });
      setValue("");
      onClick();
    }
  };

  const screenWidth = window.screen.width;
  return (
    <>
      <div className={styles.container}>
      <div className={styles.infoContainer}
      
       onClick={cliclToLogo}>
        <div className={styles.buttonBlogo}> 
      <HeadLogo/>
      </div>
        {!openInput && (
            <Input
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder="Search..."
            />
          )}
        </div>
    <div className={styles.infoContainer}>
          <Button
            title=""
            onClick={onClickSearchButton}
            type={ButtonType.Primary}
            className={styles.button}
          > <SearchIcon /></Button>
        <div className={styles.userWrap}  onClick={onSignInClick}>
          <UserName 
            username={
              currentUser?.emailVerified ? name || "Sign In" : "Sign In"
            }
          />
        </div>
    </div>  
        
      </div>
      
    </>
  );
};

export default Header;