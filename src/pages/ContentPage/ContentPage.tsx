import React, { FC, useEffect } from "react";
import { CardType,CardListType, CardSize } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import styles from "./ContentPage.module.scss";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import {MoreIcon} from "../../assets/icons/MoreIcon";
import {  TwiterIcon } from "../../assets/icons/Twiter";
import { FacebookIcon } from "../../assets/icons/Facebook";
import classNames from "classnames";
import CardsList from "../../components/CardsList";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  PostSelectors,
  setPostVisibility,
  setSelectedPost,
 
} from "../../redux/reducers/postSlice";

type PostProps = {
  post: CardType;
};

const ContentPage: FC<PostProps>= ({post}) => {

  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postsList = useSelector(PostSelectors.getAllPosts);
  const isVisible = useSelector(PostSelectors.getVisibleSelectedModal);
  const isDark = theme === Theme.Dark;
const { title,imageUrl,summary, id} = post;

const onClickMore=()=>{
  dispatch(setSelectedPost(post));
  dispatch(setPostVisibility(true));
};
const getCurrentList = () => {
      return postsList;
};
const onTitleClick = () => {
  navigate(`/blog/${id}`);
};
return(
<div>
    <div className={styles.wraper}>
        <div className={styles.navigation}>
         <div className={styles.anchorНome}>
         <div
className={classNames (styles.anchorНome, {
[styles.darkAnchorНome]: theme === Theme.Dark,
})}
>
Home
</div>

         </div>
         <div className={styles.pipeline}>|</div>
         <div className={styles.postText}>Post {id}</div>
        </div>
              <div className={styles.contentFilling}>
               <div className={styles.header}>
               <div className={classNames(styles.title, {
              [styles.darkTitle]: theme === Theme.Dark,
              })}
              onClick={onTitleClick}
               >
             {title}
            </div>

                </div>
               <img src={imageUrl} className={styles.picture}></img>
               <div className={styles.textPost}>
               <div className={classNames(styles.textPost, {
              [styles.darkText]: theme === Theme.Dark,
              })}
              >
            {summary}
             </div>

                </div>
              </div>
            <div className={styles.icons} >
              <div className={styles.leftIcons}>
                  <div className={styles.facebookIc}>
                  <a href="https://ru-ru.facebook.com/">
                <FacebookIcon /> 
                   </a>
                  </div>
                  <div className={styles.twiterIc}>
                    <a href="https://twitter.com/">
                < TwiterIcon/>
                    </a>
                  </div>
                  <div  className={classNames(styles.moreIcon, {
            [styles.darkIconContainer]: isDark,
          })}>
          {!isVisible && <div  onClick={onClickMore}> <MoreIcon/> </div>}
        </div>
              </div>
        
            </div>
     <div className={styles.footer}>
    
      



      </div>

    </div>
</div>
);
};
export default ContentPage;