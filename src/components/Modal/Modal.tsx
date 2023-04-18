import React,{FC,ReactNode} from "react";
import styles from "./Modal.module.scss";
import { CardType } from "../../utils/@globalTypes";
import { CloseIconModal } from "../../assets/icons/CloseIconModal";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import classNames from "classnames";


type ModalProps={
    isVisible:boolean;
     onClose:()=>void;
      children:ReactNode;
}

const Modal:FC<ModalProps>= ({isVisible, onClose, children})=>{
    const { theme } = useThemeContext();
    return isVisible? (
       <div className={styles.moduleWraper}>
            <div 
            className={classNames (styles.moduleFilling, {
                [styles.darkFilling]: theme === Theme.Dark,
                })}
            >
                <div className={styles.closeIcon} onClick={onClose}>
                    <CloseIconModal/>
                </div>
                <div className={styles.infoContainer}>
                   {children}
                </div>
            </div>
        </div>
    ):null;
};

export default Modal;