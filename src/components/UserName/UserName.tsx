import React,{FC, ReactNode} from "react";
import  styles from "./UserName.module.scss";
import {UserInfoResponse} from "../../redux/sagas/@types";

export type UserNameProps={
    userName:string;
};
const UserBox:FC<UserNameProps> = ({userName })=>{
    
    return(    
    <div className={styles.userSpane}>
        <div className={styles.userInitials}>
          {userName.split(" ").map((elem: string) => elem[0]).join('')}
        </div>
        <div className={styles.userName}>{userName}</div>
      </div>
  );
};
export default UserBox;