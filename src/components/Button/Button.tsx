import React,{FC,ReactNode} from "react";
import classNames from "classnames";
import { ButtonType } from "src/utils/@globalTypes";
import styles from "./Button.module.scss";


type ButtonProps={
    title:string | ReactNode;
    onClick:()=>void;
    type:ButtonType;
    disabled?:boolean;
    className?:string;
}
const btnSlyles={
  [ButtonType.Primary]:styles.primaryButton,
  [ButtonType.Secondary]:styles.secondaryButton, 
  [ButtonType.Error]:styles.errorButton,   
}
const Button:FC<ButtonProps> = ({title,onClick,type,disabled,className})=>{
  const buttonClassname=btnSlyles[type];
    return (
    <div onClick={disabled ? undefined : onClick} className={classNames(buttonClassname,className,
      {
        [styles.disabledButton]:disabled,
      }  
        )}> {title}</div>);
};
export default Button
