import React,{FC} from "react";
import styles from "./Modal.module.scss";
import { ModalWindowPropsType } from "./types";
import { CardPostType} from "../../utils/@globalTypes";
import { CloseIconModal } from "../../assets/icons/CloseIconModal";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import classnames from "classnames";




const Modal: FC<ModalWindowPropsType> = ({
  isVisible,
    closeModal,
    children,
  }) => {
    const { theme } = useThemeContext();
    const isDarkTheme = theme === Theme.Dark;
  
    return (
      <div
        className={classnames(styles.modal, {
          [styles.modalActive]: isVisible,
          [styles.modal_Dark]: isDarkTheme,
        })}
        onClick={closeModal}
      >
        <div className={styles.closeIcon} onClick={closeModal}>
                    <CloseIconModal/>
                </div>
        <div
          className={classnames(styles.modal_content, {
            [styles.modalActive_content]: isVisible,
            [styles.modalActive_content_Dark]: isDarkTheme,
          })}
          onClick={(event) => event.stopPropagation()}
        >
          
          {children}
        </div>
      </div>
    );
  };
  

export default Modal;