import React,{FC,ReactNode} from "react";
import classNames from "classnames";
import { ButtonPropsType,ButtonType} from "src/utils/@globalTypes";
import styles from "./Button.module.scss";



const btnSlyles={
  [ButtonType.Primary]:styles.primaryButton,
  [ButtonType.Secondary]:styles.secondaryButton, 
  [ButtonType.Error]:styles.errorButton,   
}
const Button:FC<ButtonPropsType> = ({title,onClick,type,disabled,className,children})=>{
  const buttonClassname=btnSlyles[type];
    return (
    <div onClick={disabled ? undefined : onClick} className={classNames(buttonClassname,className || "",
      {
        [styles.disabledButton]:disabled,
      }  
        )}> {title|| children}</div>);
};
export default Button
