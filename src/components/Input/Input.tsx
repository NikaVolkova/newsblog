import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";


type InputProps={
    value:string;
    onChange:(value:string)=>void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    title?: string;
    placeholder:string;
    disabled?:boolean;
    error?: boolean;
    type?: string;
    className?: string;
    onBlur?: () => void;
}
const TextInput:FC<InputProps>=({value,onChange,type,
  title,placeholder,disabled,error,className,
  onKeyDown,onBlur})=>{


const onChangeText = (e: React.ChangeEvent<HTMLInputElement>)=>{
    onChange(e.target.value);
};
    return(
      <div className={styles.container}>
         {title && <div className={styles.title}>{title}</div>}
        <input
        value={value}
        className={classNames(styles.input,className,{
            [styles.disabled]:disabled,
            [styles.valid]:error,}
            )
}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChangeText}
        disabled={disabled}
        type={type}
        onBlur={onBlur}
        />
        {error &&<div className={styles.validText}>{error}</div>}
      </div>  
    );
    };
export default TextInput;