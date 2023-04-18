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
    errorText?:string;
    type?: string;
    inputClassName?: string;
}
const TextInput:FC<InputProps>=({value,onChange,type,
  title,placeholder,disabled,errorText,inputClassName,
  onKeyDown,})=>{


const onChangeText = (e: React.ChangeEvent<HTMLInputElement>)=>{
    onChange(e.target.value);
};
    return(
      <div className={styles.container}>
         {title && <div className={styles.title}>{title}</div>}
        <input
        value={value}
        className={classNames(styles.input,inputClassName,{
            [styles.disabled]:disabled,
            [styles.valid]:errorText,}
            )
}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChangeText}
        disabled={disabled}
        type={type}
        />
        {errorText &&<div className={styles.validText}>{errorText}</div>}
      </div>  
    );
    };
export default TextInput;