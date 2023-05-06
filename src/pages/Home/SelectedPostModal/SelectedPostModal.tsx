import React from 'react';
import styles from "./SelectedPostModal.module.scss"
import Modal from 'src/components/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { setPostModalImgVisible,
  setSelectedPost} from '../../../redux/reducers/postSlice';
import classnames from "classnames";
import Selectors from "../../../redux/Selectors";
import {
  Theme,
  useThemeContext,
} from "../../../components/context/Theme/Context";


const PostModal = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const post = useSelector(Selectors.getSelectedPost);
  const isVisible = useSelector(Selectors.getIsModalImgVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setPostModalImgVisible(!isVisible));
    dispatch(setSelectedPost(null));
  };

  return post ? (
    <Modal isVisible={isVisible} closeModal={onClose}>
      <img
        className={classnames(styles.modalImg, {
          [styles.modalImg__Dark]: isDarkTheme,
        })}
        src={post.imageUrl}
        alt=""
      />
    </Modal>
  ) : null;
};
export default PostModal;