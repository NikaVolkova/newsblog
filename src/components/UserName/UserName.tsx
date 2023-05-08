import React,{FC, ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import  styles from "./UserName.module.scss";
import { Theme, useThemeContext } from "src/components/context/Theme/Context";
import { UserIcon} from "src/assets/icons";
import {UserInfoResponse} from "../../redux/sagas/@types";


export type UserNameProps={
    username:string;
};
const User:FC<UserNameProps> = ({username })=>{
  const { theme } = useThemeContext();
  const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const res = username.split("").filter(function (l: any) {
    return ~caps.indexOf(l);
  });
    return(    
    <div className={styles.userSpane}>
        <div className={styles.userInitials}>
        {res.length !== 0 ? res : <UserIcon />}
        </div>
        <div className={styles.userName}>{username}</div>
      </div>
  );
};
export default User;